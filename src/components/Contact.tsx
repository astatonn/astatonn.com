"use client"
import { Bebas_Neue } from 'next/font/google';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { useState } from 'react';

const bebas_neue = Bebas_Neue({ subsets: ['latin'], weight: "400" });

export default function Contact() {

    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        try {
            setIsDownloading(true);
            const response = await fetch('/api/download-cv');
            
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message);
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Lucas_Lima_CV.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Download failed:', error);
            alert('Download failed. Please try again later.');
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="flex bg-wtsecondary ">
            <section id='contact' className="flex flex-col items-center w-full justify-center py-28 md:py-52 lg:pt-48 h-fit">
                <h2 className={`${bebas_neue.className} text-6xl `}>
                    Get in Touch
                </h2>
                <div>e-mail: lucas.lima.rk@gmail.com</div>
                <button 
                    type='button' 
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className='py-2.5 mt-5 px-6 text-sm bg-indigo-500 text-wtsecondary rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    {isDownloading ? 'Downloading...' : 'Download C.V.'}
                </button>
                <div className="flex gap-2 mt-4">
                    <a href='https://github.com/astatonn' target='_blank'
                        className='py-1 px-7 flex items-center gap-2 text-base max-h-max border-2 border-solid border-indigo-500 text-indigo-500 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-500 hover:text-wtsecondary'>
                            <span className='text-2xl'><FaGithubSquare /></span>
                             GitHub</a>
                    <a href='https://www.linkedin.com/in/astatonn/' target='_blank'
                        className='py-1 px-7 flex items-center gap-2 text-base max-h-max border-2 border-solid border-indigo-500 text-indigo-500 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-500 hover:text-wtsecondary'>
                            <span className='text-2xl'><FaLinkedin /></span>
                             LinkedIn</a>
                </div>
            </section>
        </div>
    )
}