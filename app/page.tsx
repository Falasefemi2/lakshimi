import Brand from "./components/Brand";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Selected from "./components/Selected";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="container mx-auto">
        <Brand />
        <Selected />
      </div>
    </main>
  );
}
