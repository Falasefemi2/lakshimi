
import Best from "./components/Best";
import Brand from "./components/Brand";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductFeatured from "./components/ProductFeatured";
import Selected from "./components/Selected";
import Awards from "./components/Awards";
import Faq from "./components/Faq";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 md:px-8">
        <Brand />
        <Selected />
        <ProductFeatured />
        <Best />
        <Awards />
        <Faq />
      </div>
    </main>
  );
}
