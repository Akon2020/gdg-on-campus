import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from '@/components/Grid';
import { navItems } from "@/data";
import ProjetsRecents from '@/components/ProjetsRecents';
import Temoignages from '@/components/Temoignages';
import Experience from '@/components/Experience';
import Tactique from '@/components/Tactique';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <ProjetsRecents />
        <Temoignages />
        <Experience />
        <Tactique />
        <Footer />
      </div>
    </main>
  );
}
