import About from '@/components/About';
import Hero from '../components/Hero'
import Projects from '@/components/Projects';
import Mission from '@/components/Mission';
import Contact from '@/components/Contact';


export default function Home() {
  return (
    <>
    <main>
      <Hero />
      <About />
      <Projects />
      <Mission />
      <Contact />
    </main>
    </>
  );
}
