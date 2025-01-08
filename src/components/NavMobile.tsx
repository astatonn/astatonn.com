"use client"

import { Bebas_Neue } from 'next/font/google'


const bebas_neue = Bebas_Neue({ subsets: ['latin'], weight: "400" })
export default function NavMobile() {
    const handleScroll = (id: string) => {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>

                <div className={`${bebas_neue.className} text-foreground flex flex-col items-center gap-4 text-center`}>
                    <p className="text-3xl relative w-max">
                        <button
                            className="px-1 relative z-10 group-hover:text-wtsecondary cursor-pointer"
                            onClick={() => handleScroll('about')}
                        >
                            About
                        </button>
                        <button className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-indigo-600 z-0 group-hover:h-full "></button>
                    </p>
                    
                    <p className="text-3xl relative w-max">
                        <button
                            className="px-1 relative z-10 group-hover:text-wtsecondary cursor-pointer"
                            onClick={() => handleScroll('projects')}
                        >
                            Projects
                        </button>
                        <button className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-indigo-600 z-0 group-hover:h-full "></button>
                    </p>
                    
                    <p className="text-3xl relative w-max">
                        <button
                            className="px-1 relative z-10 group-hover:text-wtsecondary cursor-pointer"
                            onClick={() => handleScroll('mission')}
                        >
                            Mission
                        </button>
                        <button className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-indigo-600 z-0 group-hover:h-full "></button>
                    </p>

                    <p className="text-3xl relative w-max">
                        <button
                            className="px-1 relative z-10 group-hover:text-wtsecondary cursor-pointer"
                            onClick={() => handleScroll('contact')}
                        >
                            Contact
                        </button>
                        <button className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-indigo-600 z-0 group-hover:h-full "></button>
                    </p>

                </div>
          
        </>
    );
}