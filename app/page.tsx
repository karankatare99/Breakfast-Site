import { Desserts } from "@/components/desserts";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { Navbar } from "@/components/navbar";
import { Servedish } from "@/components/servedish";

export default function Home() {
  return (
    <div className="w-full h-full relative overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <Hero />
      <Desserts />
      <Servedish />
      <Intro />
      <Footer />
    </div>
  );
}
