"use client"
import { Bebas_Neue } from 'next/font/google';
import { FaPython, FaPhp, FaLaravel, FaYoutube, FaJs, FaJoomla, FaGitAlt, FaDatabase, FaReact, FaLinkedin } from "react-icons/fa6";
import { SiAdobeaftereffects, SiAdobeillustrator, } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";
import { useState } from 'react';
import { IconType } from 'react-icons';
import { data } from './Data';
import Image from 'next/image';
import ImageWithModal from './ImageWithModal';

type TechKey = keyof typeof data;



interface Project {
    title: string;
    description: string;
    linkedinUrl: string | null;
    githubUrl: string | null;
    webUrl: string | null;
}





interface TechData {
    description: string;
    projects: Record<number, Project>;
    images: Record<number, Image>;
}

interface TechStyle {
    shadow: string;
    gradient: string;
}

interface Image {
    url: string;
    alt: string;
}


const bebas_neue = Bebas_Neue({ subsets: ['latin'], weight: "400" });

const techIcons: Record<string, IconType> = {
    Python: FaPython,
    PHP: FaPhp,
    Laravel: FaLaravel,
    Javascript: FaJs,
    Joomla: FaJoomla,
    Git: FaGitAlt,
    Database: FaDatabase,
    React: FaReact,
    AfterEffects: SiAdobeaftereffects,
    Illustrator: SiAdobeillustrator,
};



const techStyles: Record<string, TechStyle> = {
    Python: { shadow: 'shadow-yellow-900', gradient: 'from-yellow-400 to-yellow-700' },
    PHP: { shadow: 'shadow-indigo-900', gradient: 'from-indigo-700 to-blue-600' },
    Laravel: { shadow: 'shadow-red-900', gradient: 'from-orange-700 to-red-700' },
    Javascript: { shadow: 'shadow-amber-900', gradient: 'from-amber-400 to-amber-700' },
    Joomla: { shadow: 'shadow-blue-900', gradient: 'from-blue-400 to-blue-700' },
    Git: { shadow: 'shadow-orange-900', gradient: 'from-orange-700 to-orange-400' },
    Database: { shadow: 'shadow-sky-900', gradient: 'from-sky-100 to-sky-400' },
    React: { shadow: 'shadow-sky-900', gradient: 'from-blue-700 to-blue-400' },
    AfterEffects: { shadow: 'shadow-indigo-900', gradient: 'from-indigo-400 to-indigo-700' },
    Illustrator: { shadow: 'shadow-amber-900', gradient: 'from-amber-400 to-amber-700' },
};


export default function Projects() {
    const [selectedTech, setSelectedTech] = useState<TechKey>('Python');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const currentData = data[selectedTech];

    const handleTechClick = (tech: TechKey) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setSelectedTech(tech);
            setIsTransitioning(false);
        }, 300);
    };

    return (
        <div className="flex pt-28 bg-wtsecondary md:px-10 ">
            <section id='projects' className="container px-10 md:px-0 mx-auto md:min-h-fit">
                <h2 className={`${bebas_neue.className}  text-center min-[620px]:text-left text-7xl md:text-9xl border-b-4  border-indigo-600 pb-8`}>
                    Projects
                </h2>
                <div id='projects' className="text-gray-500">
                    <div className="flex flex-col md:flex-row gap-4 text-sm text-center font-bold leading-6 pt-4 h-fit">
                        <div className="flex flex-col row-span-3 md:w-3/5">
                            <h4 className='text-2xl text-indigo-600 text-left'>Stacks</h4>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 text-xl text-center font-bold pt-10 text-wtsecondary">
                                {Object.entries(techIcons).map(([tech, Icon]) => (
                                    <div key={tech} className="flex items-center justify-center">
                                        <button
                                            onClick={() => handleTechClick(tech as TechKey)}
                                            className={`shadow-md ${techStyles[tech].shadow} bg-gradient-to-br ${techStyles[tech].gradient} 
                                                bg-[length:150%_150%] bg-[position:0%_50%] p-4 rounded-lg transition-all duration-500 
                                                hover:-translate-y-2 hover:animate-gradientShift 
                                                ${selectedTech === tech ? 'ring-2 ring-white' : ''}`}
                                        >
                                            <Icon />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className='h-full py-10 text-left'>
                                <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                                    <h4 className={`py-10 font-black text-5xl drop-shadow-md bg-gradient-to-br ${techStyles[selectedTech].shadow} ${techStyles[selectedTech].gradient} bg-clip-text text-transparent`}>
                                        {selectedTech}
                                    </h4>
                                    <div className='text-gray-500 text-xl font-light'
                                        dangerouslySetInnerHTML={{ __html: currentData.description }}
                                    />
                                    <div>
                                        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:mb-6 pt-8 items-center justify-evenly">
                                            {Object.values(currentData.images).map((image, index) => (
                                                <div key={index} className="md:w-1/3">
                                                    {image.url && (
                                                        <ImageWithModal
                                                            src={image.url}
                                                            alt={image.alt}
                                                            width={250}
                                                            height={160}
                                                            className="w-full h-40 object-scale-down rounded-lg shadow-md bg-slate-200"
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:p-4 md:border-l-2 md:w-2/5 mt-10">
                            <div className='flex flex-col items-start container'>
                                <div className='pl-4 text-4xl'>Projects</div>
                                <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                                    {Object.values(currentData.projects).map((project, index) => (
                                        <div key={index} className='pl-4 text-left py-5'>
                                            <div className='font-bold'>{project.title}</div>
                                            <div className='flex flex-col justify-between w-full'>
                                                <div className='font-light italic text-sm'>{project.description}</div>
                                                <div className='flex text-2xl gap-x-2 pt-2'>
                                                    {project.linkedinUrl && (
                                                        <a href={project.linkedinUrl} target='_blank' rel="noreferrer">
                                                            <FaLinkedin />
                                                        </a>
                                                    )}
                                                    {project.githubUrl && (
                                                        <a href={project.githubUrl} target='_blank' rel="noreferrer">
                                                            <FaGithubSquare />
                                                        </a>
                                                    )}
                                                    {project.webUrl && (
                                                        <a href={project.webUrl} target='_blank' rel="noreferrer">
                                                            <TbWorld />
                                                        </a>
                                                    )}
                                                    {project.youtubeLink && (
                                                        <a href={project.youtubeLink} target='_blank' rel="noreferrer">
                                                            <FaYoutube />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


