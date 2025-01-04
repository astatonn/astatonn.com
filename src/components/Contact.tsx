import { Bebas_Neue } from 'next/font/google';

const bebas_neue = Bebas_Neue({ subsets: ['latin'], weight: "400" });

export default function Contact(){
    return (
        <div className="flex bg-wtsecondary ">
            <section className="flex flex-col items-center w-full justify-center py-28 md:py-52 lg:pt-48 h-fit">
                <h2 className={`${bebas_neue.className} text-6xl `}>
                    Get in Touch
                </h2>
                    <div>e-mail: lucas.lima.rk@gmail.com</div>
                    <button type='button' className='py-2.5 mt-5 px-6 text-sm bg-indigo-500 text-wtsecondary rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700'>Download C.V.</button>

            </section>
        </div>
    )
}