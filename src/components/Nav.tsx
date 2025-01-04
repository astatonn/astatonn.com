import { Bebas_Neue } from 'next/font/google'


const bebas_neue = Bebas_Neue({ subsets: ['latin'], weight: "400" })
export default function Nav() {
    return (
        <>
            <div className='absolute top-1/2 md:right-24 lg:right-12 -translate-y-56 z-50'>
                <div className={`${bebas_neue.className} text-wtsecondary flex items-end flex-col text-right`}>
                    <p className="md:text-5xl lg:text-6xl md:m-2 lg:m-6 group relative w-max">
                        <button className="px-1  relative z-10 group-hover:text-wtsecondary cursor-pointer">Mission</button>
                        <button className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-indigo-600 z-0 group-hover:h-full "></button>
                    </p>
                    <p className="md:text-3xl lg:text-4xl md:m-2 lg:m-6 group relative w-max">
                        <button className="px-1 relative z-10 group-hover:text-wtsecondary cursor-pointer">contact</button>
                        <button className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-indigo-600 z-0 group-hover:h-full "></button>
                    </p>
                </div>
            </div>
            <div className='absolute md:top-40 lg:top-40 md:-left-14 lg:-left-32  -translate-y-60 z-50'>
                <div className={`${bebas_neue.className}  text-foreground  flex flex-col`}>

                    <p className="md:text-3xl lg:text-3xl md:m-2 lg:m-6 group relative w-max">
                        <button className="px-1 relative z-10 group-hover:text-wtsecondary cursor-pointer">About</button>
                        <button className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-indigo-600 z-0 group-hover:h-full "></button>
                    </p>
                    <p className="md:text-5xl lg:text-6xl md:m-2 lg:m-6 group relative w-max">
                        <button className="px-1 relative z-10 group-hover:text-wtsecondary cursor-pointer">Projects</button>
                        <button className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-indigo-600 z-0 group-hover:h-full "></button>
                    </p>
                </div>
            </div>
        </>
    )
}