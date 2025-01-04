import Image from 'next/image'
import hero from '../../public/imgs/hero/hero.webp'
import Particles from '../components/Particle'
import Nav from './Nav';


export default function Hero() {
  return (
    <div className="md:min-h-screen flex flex-col items-center justify-evenly md:relative md:overflow-hidden h-screen">
        <Particles />
      <div className='md:absolute md:top-20'>
        <div className="flex items-center flex-col justify-start">
          <h1 className="lg:text-7xl tracking-widest text-4xl md:text-5xl font-bold text-foreground">
            LUCAS LIMA
          </h1>
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-2xl font-extralight text-foreground mb-4">
              WEBDEVELOPER
            </h2>

          </div>
        </div>
      </div>

      <div className="md:absolute lg:w-[42rem] lg:h-[42rem] md:w-[35rem] md:h-[35rem] bg-foreground rounded-full -bottom-60 hidden md:block ">
        <Nav />
        <Image src={hero} width={650} height={650} alt="Lucas Lima" className='md:absolute md:z-10 md:-translate-y-60 lg:-translate-y-52 hidden md:block' />
      </div>
      <div className='absolute bottom-0 z-50 w-full h-10 bg-gradient-to-t from-wtsecondary to-transparent block'></div>
    </div>
  );
}