"use client";
import { Bebas_Neue } from 'next/font/google';
import React, { useState } from 'react';
import mePlaying from '../../public/imgs/hero/me_playing.webp'
import military from '../../public/imgs/hero/fardado.webp'
import looking from '../../public/imgs/hero/me_looking.webp'
import coding from '../../public/imgs/hero/coding.webp'
import guitar from '../../public/imgs/hero/me_and_kiko.webp'
import { FcBusinessman, FcGraduationCap, FcCommandLine, FcReading, FcCollaboration } from "react-icons/fc"
import GraphVisualization from './GraphVisualization';
import LazyImage from './LazyImage';



const bebas_neue = Bebas_Neue({ subsets: ['latin'], weight: "400" });

type TabName = 'life' | 'education' | 'skills' | 'work';

export default function About() {
    const [activeTab, setActiveTab] = useState<TabName>('life');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleTabChange = (tab: TabName) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveTab(tab);
            setIsTransitioning(false);
        }, 200);
    };

    const tabContent: Record<TabName, React.ReactElement> = {
        life: (
            <div className={`p-4 pt-10 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
                <h3 className="text-xl font-semibold mb-3">Who am I?</h3>
                <div className="text-gray-500 flex text-justify">
                    <div className="gap-0 sm:gap-16 md:items-start items-center max-w-screen flex flex-col md:grid md:grid-cols-2">
                        <div className="columns-1 md:columns-2 gap-2 md:gap-6 ">
                        <div className="break-inside-avoid mb-8">    
                            <LazyImage
                                src={military}
                                alt="Lucas Lima in uniform of Brazilian Army"
                                width={350}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="break-inside-avoid mb-8">
                            <LazyImage
                                src={looking}
                                alt="A kid playing Rock and Roll Racing in 1999"
                                width={350}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="break-inside-avoid mb-8">
                            <LazyImage
                                src={mePlaying}
                                alt="Lucas Lima playing Rock and Roll Racing in 1999"
                                width={350}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="break-inside-avoid mb-8">
                            <LazyImage
                                src={coding}
                                alt="Lucas Lima thinking while he's coding"
                                width={350}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="break-inside-avoid mb-8">
                            <LazyImage
                                src={guitar}
                                alt="Lucas Lima playing the guitar"
                                width={350}
                                className="rounded-lg"
                            />
                        </div>

                    </div>

                    <div className="text-gray-500 w-full ">
                        <p className="first-letter:text-8xl font-light text-lg first-letter:font-bold first-letter:text-indigo-600 first-letter:mr-3 first-letter:float-left">
                            Born in December 1994, in Campo Grande, Mato Grosso do Sul, Brazil, I have always been <span className='text-indigo-600'>fascinated</span> by the world of technology and video games. This early passion inspired me to dive into <span className='text-indigo-600'>learning</span> how to develop my own projects, blending <span className='text-indigo-600'>creativity</span> with problem-solving.</p>
                        <p className='text-lg pt-6 font-light'>Over time, I realized the transformative power of education and understood that, regardless of what life brings, we must always strive to acquire new knowledge. In 2016, after a rigorous selection process, I joined the Brazilian Army as a career Sergeant. This experience not only instilled <span className='text-indigo-600'>discipline</span> and <span className='text-indigo-600'>leadership</span> in me but also shaped my ability to work effectively in challenging environments.</p>
                        <p className='text-lg pt-6 font-light'>Since 2018, I have been living in Porto Alegre, Rio Grande do Sul, Brazil, where I started a degree in Computer Science. During my studies, I delved into research focused on <span className='text-indigo-600'>innovative</span> methods to enhance learning abilities in Brazilian education, aiming to bridge gaps and <span className='text-indigo-600'>improve</span> outcomes.</p>
                        <p className='text-lg pt-6 font-light'>In my free time, I enjoy playing the guitar, improve my routine solving daily problems, and joining in new projects that challenge my skills. Currently, my biggest ambition is to live abroad, sharing my knowledge and <span className='text-indigo-600'>collaborating</span> with people from diverse cultures and backgrounds. I am passionate about leveraging technology to make a difference and believe that continuous learning and exchange of ideas are keys to growth.</p>

                    </div>

                </div>

            </div>
            </div >
        ),
    education: (
        <div className={`p-4 pt-10 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <div className="text-gray-500 flex flex-col gap-8">

                <div>
                    <div className="flex w-full items-center rounded-full mb-4">
                        <div className="flex-1 border-b border-indigo-600"></div>
                        <span className="text-indigo-600 text-lg font-semibold leading-8 px-8 py-3">Basic Education</span>
                        <div className="flex-1 border-b border-indigo-600"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <div className='font-bold'>Bachelor in Computer Science¹</div>
                            <div className='font-light italic text-sm'>2019 - 2023</div>
                            <div>Insitution: Faculdade de Desenvolvimento do Rio Grande do Sul (FADERGS)</div>
                            <div className='text-xs align-text-top underline underline-offset-4 decoration-indigo-600/30'><a href='https://www.linkedin.com/posts/astatonn_ainda-sobre-o-%C3%BAltimo-post-eu-coloquei-esfor%C3%A7o-activity-7052771923499376640-o6kN?utm_source=share&utm_medium=member_desktop'>1: Outstanding Academic Student</a></div>
                        </div>
                        <div>
                            <div className='font-bold'>Quartermaster Sergeant Formation</div>
                            <div className='font-light italic text-sm'>2016 - 2017</div>
                            <div>Insitution: Brazilian Army</div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex w-full items-center rounded-full mb-4">
                        <div className="flex-1 border-b border-indigo-600"></div>
                        <span className="text-indigo-600 text-lg font-semibold leading-8 px-8 py-3">IT Courses</span>
                        <div className="flex-1 border-b border-indigo-600"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <div className='font-bold'>Laravel 11: Framework, ecosystem and Web Projects</div>
                            <div className='font-light italic text-sm'>Nov 2024</div>
                            <div>Insitution: Udemy</div>
                        </div>
                        <div>
                            <div className='font-bold'>AWS Academy Cloud Foundations</div>
                            <div className='font-light italic text-sm'>Oct 2021</div>
                            <div>Insitution: AWS Academy</div>
                        </div>
                        <div>
                            <div className='font-bold'>Google Cloud Essentials</div>
                            <div className='font-light italic text-sm'>Mar 2022</div>
                            <div>Insitution: Google</div>
                        </div>
                        <div>
                            <div className='font-bold'>ISO 20.000 and ITIL</div>
                            <div className='font-light italic text-sm'>Dec 2021</div>
                            <div>Insitution: Brazilian Army - SISTEx</div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="flex w-full items-center rounded-full mb-4">
                        <div className="flex-1 border-b border-indigo-600"></div>
                        <span className="text-indigo-600 text-lg font-semibold leading-8 px-8 py-3">General Courses</span>
                        <div className="flex-1 border-b border-indigo-600"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <div className='font-bold'>Certification in Leadership, Learnability and Resilience</div>
                            <div className='font-light italic text-sm'>Aug 2021</div>
                            <div>Insitution: Pontifícia Universidade Católica do Rio Grande do Sul</div>
                        </div>
                        <div>
                            <div className='font-bold'>Graphic Designer</div>
                            <div className='font-light italic text-sm'>Dec 2021</div>
                            <div>Insitution: FIAP</div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex w-full items-center rounded-full mb-4">
                        <div className="flex-1 border-b border-indigo-600"></div>
                        <span className="text-indigo-600 text-lg font-semibold leading-8 px-8 py-3">Specializations</span>
                        <div className="flex-1 border-b border-indigo-600"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <div className='font-bold'>Basic Espacilization Course to Sergeants of Logistical-Techinical Area</div>
                            <div className='font-light italic text-sm'>Dec 2021</div>
                            <div>Insitution: Brazilian Army</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
        skills: (
            <div className={`p-4 pt-10 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
                <h3 className="text-xl font-semibold mb-3">Skills</h3>
                <div className="text-gray-500">
                    <GraphVisualization />
                </div>
            </div>
        ),

            work: (
                <div className={`p-4 pt-10 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
                    <h3 className="text-xl font-semibold mb-3">Work Experience</h3>
                    <div className="text-gray-500 flex flex-col gap-8">

                        <div>
                            <div className="flex w-full items-center rounded-full mb-4">
                                <div className="flex-1 border-b border-indigo-600"></div>
                                <span className="text-indigo-600 text-lg font-semibold leading-8 px-8 py-3">Brazilian Army</span>
                                <div className="flex-1 border-b border-indigo-600"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className='pr-10'>
                                    <div className='font-bold'>Brazilian Army Carrer Seargeant</div>
                                    <div className='flex justify-between w-full'>
                                        <div className='font-light italic text-sm'>2018 - Present</div>
                                        <div className='font-light italic text-sm'>Porto Alegre, RS - Brazil</div>
                                    </div>
                                    <div className='pt-4'>
                                        <ul className='list-disc ml-8 text-justify'>
                                            <li className='pb-2'>I was pioneer in the implementation of the first AI system in the Brazilian Army, streamlining decision-making processes.</li>
                                            <li className='pb-2'>I Created a new Joomla template for all barracks in Brazil to comply with Brazilian laws, recording videos that teach everything from installation to advanced concepts such as creating components.</li>
                                            <li className='pb-2'>Designed and implemented the social media presence of <a href="https://instagram.com/3bsup_exercito" target='_blank' className='underline underline-offset-4 decoration-indigo-600'>3º B Sup</a>, creating a visual identity and standardizing posts.</li>
                                            <li className='pb-2'>Planned and executed administrative processes for purchasing IT equipment, supporting 128 cities in the state of Rio Grande do Sul.</li>
                                            <li className='pb-2'>I acted as an instructor twice for recruits (2018 and 2023), where I fulfilled my role as a leader to nearly 300 recruits each year.</li>
                                            <li className='pb-2'>I coordinated, controlled, and managed logistical supplies for 128 cities in Rio Grande do Sul.</li>
                                            <li className='pb-2'>Controlled and managed the active personnel in a company.</li>
                                            <li>Updated the new user interface of the Armys Zimbra platform, providing a more user-friendly visual experience.</li>

                                        </ul>
                                    </div>
                                </div>
                                <div className='pr-10'>
                                    <div className='font-bold'>Brazilian Army Recruit</div>
                                    <div className='flex justify-between w-full'>
                                        <div className='font-light italic text-sm'>2013 - 2014</div>
                                        <div className='font-light italic text-sm'>Campo Grande, MS - Brazil</div>
                                    </div>
                                    <div className='pt-4'>
                                        <ul className='list-disc ml-8 text-justify'>
                                            <li className='pb-2'>Completion of Mandatory Military Service as a recruit in the Brazilian Army, including basic training in discipline, hierarchy, drill instruction, military training, and activities related to national defense. Developed skills such as leadership, teamwork, and civic responsibility during the 12-month period.</li>
                                            <li>Worked as IT Support at the Headquarters, resolving hardware and software issues. Additionally, assisted in building and installing an infrastructure project for nearly 200 devices.</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                            <div className="flex w-full items-center rounded-full mb-4">
                                <div className="flex-1 border-b border-indigo-600"></div>
                                <span className="text-indigo-600 text-lg font-semibold leading-8 px-8 py-3">Serviço Nacional de Aprendizagem Comercial (SENAC)</span>
                                <div className="flex-1 border-b border-indigo-600"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className='pr-10'>
                                    <div className='font-bold'>Teacher</div>
                                    <div className='flex justify-between w-full'>
                                        <div className='font-light italic text-sm'>2022 - 2023</div>
                                        <div className='font-light italic text-sm'>Viamão, RS - Brazil</div>
                                    </div>
                                    <div className='pt-4'>
                                        <ul className='list-disc ml-8 text-justify'>
                                            <li className='pb-2'>Shared fundamental concepts of programming and IT with practical and theoretical examples, using numerous analogies</li>
                                            <li className='pb-2'>I taught how to create websites using HTML, CSS, and JavaScript.</li>
                                            <li>Brought examples through the gamification of Object-Oriented Programming concepts, making complex ideas more engaging and easier to understand.</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div>
                            <div className="flex w-full items-center rounded-full mb-4">
                                <div className="flex-1 border-b border-indigo-600"></div>
                                <span className="text-indigo-600 text-lg font-semibold leading-8 px-8 py-3">Unisys</span>
                                <div className="flex-1 border-b border-indigo-600"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className='pr-10'>
                                    <div className='font-bold'>Support Analyst L2 - General Eletric</div>
                                    <div className='flex justify-between w-full'>
                                        <div className='font-light italic text-sm'>2015 - 2015</div>
                                        <div className='font-light italic text-sm'>Campo Grande, MS - Brazil</div>
                                    </div>
                                    <div className='pt-4'>
                                        <ul className='list-disc ml-8 text-justify'>
                                            <li className='pb-2'>Collaborated with global teams to troubleshoot and resolve complex technical issues involving cloud infrastructure and enterprise software.</li>
                                            <li className='pb-2'>Update knowledge base of proccedures.</li>
                                            <li className='pb-2'>Led and supervised the L1 team, ensuring optimal performance and adherence to standards.</li>
                                            <li className='pb-2'>Escalated critical incidents to the Technical Field L3 team, ensuring swift resolution of high-priority tickets.</li>

                                        </ul>
                                    </div>
                                </div>
                                <div className='pr-10'>
                                    <div className='font-bold'>Support Analyst L1 - General Eletric</div>
                                    <div className='flex justify-between w-full'>
                                        <div className='font-light italic text-sm'>2014 - 2015</div>
                                        <div className='font-light italic text-sm'>Campo Grande, MS - Brazil</div>
                                    </div>
                                    <div className='pt-4'>
                                        <ul className='list-disc ml-8 text-justify'>
                                            <li className='pb-2'>Provided first-line support to General Electric workers for software and hardware issues.</li>
                                            <li className='pb-2'>Administered accounts for General Electric softwares, supporting cross-departmental operations.</li>
                                            <li className='pb-2'>Created and tracked tickets in ServiceNow.</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>

            )
};

return (
    <div className="flex md:pt-28 bg-wtsecondary md:px-10 ">
        <section id='about' className="container px-10 md:px-0 mx-auto min-h-[750px]">
            <h2 className={`${bebas_neue.className} text-center min-[620px]:text-left text-7xl md:text-9xl border-b-4  border-indigo-600 pb-8`}>
                About
            </h2>

            <div className="tabs">
                <div  className="flex ">
                    <div className="w-full overflow-x-auto md:overflow-visible">
                        <ul className="flex min-w-max  transition-all duration-300 overflow-visible md:overflow-hidden">
                            <li>
                                <button
                                    onClick={() => handleTabChange('life')}
                                    className={`flex items-center gap-2 py-3 px-6 font-medium transition-all hover:rounded-b-lg whitespace-nowrap
                                        ${activeTab === 'life'
                                            ? 'bg-indigo-600 text-wtsecondary rounded-b-lg'
                                            : 'text-indigo-600 hover:bg-indigo-600 hover:text-wtsecondary'}`}
                                >
                                    <FcBusinessman /> LIFE
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleTabChange('education')}
                                    className={`flex items-center gap-2 py-3 px-6 font-medium transition-all hover:rounded-b-lg whitespace-nowrap
                                        ${activeTab === 'education'
                                            ? 'bg-indigo-600 text-wtsecondary rounded-b-lg'
                                            : 'text-indigo-600 hover:bg-indigo-600 hover:text-wtsecondary'}`}
                                >
                                    <FcGraduationCap /> EDUCATION
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleTabChange('work')}
                                    className={`flex items-center gap-2 py-3 px-6 font-medium transition-all hover:rounded-b-lg whitespace-nowrap
                                        ${activeTab === 'work'
                                            ? 'bg-indigo-600 text-wtsecondary rounded-b-lg'
                                            : 'text-indigo-600 hover:bg-indigo-600 hover:text-wtsecondary'}`}
                                >
                                    <FcCollaboration /> WORK
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() => handleTabChange('skills')}
                                    className={`flex items-center gap-2 py-3 px-6 font-medium transition-all hover:rounded-b-lg whitespace-nowrap
                                        ${activeTab === 'skills'
                                            ? 'bg-indigo-600 text-wtsecondary rounded-b-lg'
                                            : 'text-indigo-600 hover:bg-indigo-600 hover:text-wtsecondary'}`}
                                >
                                    <FcReading /> SKILLS
                                </button>
                            </li>

                            <li>
                                <button
                                    className={`flex items-center gap-2 cursor-default bg-gray-300 text-indigo-600 rounded-b-lg py-3 px-6 font-medium transition-all hover:rounded-b-lg whitespace-nowrap`}>
                                    <FcCommandLine /> <div className='relative'>BLOG  <div className='absolute text-sm bottom-2 bg-indigo-600 text-wtsecondary rounded-full pt-4 p-2 left-12'>soon</div></div>

                                </button>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="mt-3">
                    {tabContent[activeTab]}
                </div>
            </div>
        </section>
    </div>
);
}