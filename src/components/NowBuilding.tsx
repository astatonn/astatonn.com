import { readFile } from 'fs/promises';
import { Bebas_Neue } from 'next/font/google';
import { FaGithubSquare } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';

// Live progress published by my project bot (vpsmon on the VPS). It rewrites this JSON whenever a
// project marked as public changes; docker-compose mounts its folder read-only into the container.
// Server component, read on every request (the home page is force-dynamic).
const PROGRESS_FILE = process.env.PROGRESS_FILE ?? '/app/data/progress.json';

const bebas_neue = Bebas_Neue({ subsets: ['latin'], weight: '400' });

type Status = 'active' | 'idea' | 'paused' | 'done';

interface PublicProject {
    slug: string;
    name: string;
    emoji: string;
    description: string;
    status: Status;
    progress: number | null;
    done: number;
    total: number;
    started: string | null;
    updated: string | null;
    url: string | null;
    repo: string | null;
    language: string | null;
    history: (number | null)[];
}

const statusStyles: Record<Status, { label: string; pill: string; dot: string }> = {
    active: { label: 'In progress', pill: 'bg-indigo-100 text-indigo-700', dot: 'bg-indigo-500 animate-pulse' },
    idea: { label: 'Idea', pill: 'bg-amber-100 text-amber-800', dot: 'bg-amber-400' },
    paused: { label: 'Paused', pill: 'bg-gray-200 text-gray-600', dot: 'bg-gray-400' },
    done: { label: 'Shipped', pill: 'bg-emerald-100 text-emerald-700', dot: 'bg-emerald-500' },
};

async function loadProjects(): Promise<PublicProject[]> {
    try {
        const data = JSON.parse(await readFile(PROGRESS_FILE, 'utf-8'));
        return Array.isArray(data?.projects) ? data.projects : [];
    } catch {
        // No file (local dev, or the bot never published): the section simply doesn't render.
        return [];
    }
}

function timeAgo(iso: string | null, now: number): string | null {
    if (!iso) return null;
    const s = Math.max(0, (now - Date.parse(iso)) / 1000);
    const steps: [number, string][] = [[31536000, 'year'], [2592000, 'month'], [604800, 'week'],
        [86400, 'day'], [3600, 'hour'], [60, 'minute']];
    for (const [size, unit] of steps) {
        const n = Math.floor(s / size);
        if (n >= 1) return `${n} ${unit}${n > 1 ? 's' : ''} ago`;
    }
    return 'just now';
}

function Sparkline({ id, values }: { id: string; values: (number | null)[] }) {
    const points = values
        .map((v, i) => (v === null ? null : [(i / Math.max(1, values.length - 1)) * 100, 28 - (v / 100) * 26]))
        .filter((p): p is number[] => p !== null);
    if (points.length < 2) return null;
    const line = points.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
    const area = `${points[0][0].toFixed(1)},30 ${line} ${points[points.length - 1][0].toFixed(1)},30`;
    return (
        <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="h-10 w-full" aria-hidden="true">
            <defs>
                <linearGradient id={`spark-${id}`} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                </linearGradient>
            </defs>
            <polygon points={area} fill={`url(#spark-${id})`} />
            <polyline points={line} fill="none" stroke="#4f46e5" strokeWidth="1.5"
                vectorEffect="non-scaling-stroke" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
    );
}

function ProjectCard({ project, now }: { project: PublicProject; now: number }) {
    const style = statusStyles[project.status] ?? statusStyles.active;
    const updated = timeAgo(project.updated, now);
    const history = project.history ?? [];
    const hasHistory = history.filter((v) => v !== null).length > 1;

    return (
        <article className="flex flex-col rounded-2xl bg-white p-6 shadow-md shadow-gray-300/60 ring-1 ring-gray-200
            transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
            <header className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                    {project.emoji && <span className="text-3xl" aria-hidden="true">{project.emoji}</span>}
                    <h3 className="truncate text-xl font-bold text-gray-800">{project.name}</h3>
                </div>
                <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${style.pill}`}>
                    <span className={`h-2 w-2 rounded-full ${style.dot}`} />
                    {style.label}
                </span>
            </header>

            {project.description && (
                <p className="mt-3 text-sm font-light italic text-gray-500">{project.description}</p>
            )}

            {project.progress !== null ? (
                <div className="mt-6">
                    <div className="flex items-end justify-between">
                        <span className={`${bebas_neue.className} text-5xl leading-none text-indigo-600`}>
                            {project.progress}%
                        </span>
                        {project.total > 0 && (
                            <span className="text-xs text-gray-500">{project.done}/{project.total} milestones</span>
                        )}
                    </div>
                    <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-gray-200" role="progressbar"
                        aria-valuenow={project.progress} aria-valuemin={0} aria-valuemax={100}
                        aria-label={`${project.name} progress`}>
                        <div className="h-full rounded-full bg-gradient-to-r from-indigo-700 to-blue-500"
                            style={{ width: `${project.progress}%` }} />
                    </div>
                    {hasHistory && (
                        <div className="mt-4">
                            <Sparkline id={project.slug} values={history} />
                            <div className="text-[10px] uppercase tracking-widest text-gray-400">last 90 days</div>
                        </div>
                    )}
                </div>
            ) : (
                <p className="mt-6 text-sm text-gray-400">Milestones coming soon.</p>
            )}

            <footer className="mt-auto flex items-center justify-between gap-3 pt-6 text-xs text-gray-500">
                <span>
                    {updated && <>Updated {updated}</>}
                    {project.language && <> · {project.language}</>}
                </span>
                <div className="flex gap-2 text-2xl">
                    {project.url && (
                        <a href={project.url} target="_blank" rel="noreferrer" aria-label={`${project.name} website`}
                            className="transition-colors hover:text-indigo-600">
                            <TbWorld />
                        </a>
                    )}
                    {project.repo && (
                        <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}
                            className="transition-colors hover:text-indigo-600">
                            <FaGithubSquare />
                        </a>
                    )}
                </div>
            </footer>
        </article>
    );
}

export default async function NowBuilding() {
    const projects = await loadProjects();
    if (projects.length === 0) return null;
    const now = Date.now();

    return (
        <div className="flex pt-28 pb-10 bg-wtsecondary md:px-10">
            <section id="building" className="container px-10 md:px-0 mx-auto">
                <h2 className={`${bebas_neue.className} text-center min-[620px]:text-left text-7xl md:text-9xl border-b-4 border-indigo-600 pb-8`}>
                    Now Building
                </h2>
                <p className="pt-6 text-xl font-light text-gray-500">
                    What I&apos;m working on right now — progress goes live here as I update my own project tracker.
                </p>
                <div className="grid gap-6 pt-10 sm:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} now={now} />
                    ))}
                </div>
            </section>
        </div>
    );
}
