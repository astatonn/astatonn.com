import About from '@/components/About';
import Hero from '../components/Hero'
import Projects from '@/components/Projects';
import Mission from '@/components/Mission';
import Contact from '@/components/Contact';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Lucas Lima - Astatonn | Developer Portfolio',
  description: 'Welcome to my web development portfolio. Explore my projects, skills, and experience in creating modern web applications.',
}

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
