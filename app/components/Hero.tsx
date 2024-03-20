import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


const Hero = () => {
    return (
        <section className="relative overflow-hidden flex flex-col justify-center items-center text-center">
            {/* Image Container */}
            <div className="absolute inset-0 z-0">
                <Image
                    src='/image 296.png'
                    alt="hero-img"
                    fill
                    objectFit="cover"
                />
            </div>
            {/* Text Content */}
            <div className="relative z-10 text-white text-center py-16 md:py-32 lg:py-48 px-4 md:px-0">
                <div className="container mx-auto">

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-none text-center md:w-[858px] w-[383px] mx-auto mb-2">
                        The ultimate aroma and taste, for blissful <span className="text-[#DBCA00]">relaxation</span>.
                    </h1>



                    <p className="text-base md:text-lg lg:text-xl font-semibold leading-7 md:leading-8 text-center  md:w-[656px] w-[355px] mx-auto">
                        Elevate your tea experience and discover the perfect balance of tranquility and taste, sip by sip. Welcome to a journey where every cup is a celebration of serenity and indulgence.
                    </p>

                    <div className="flex justify-center max-w-sm mx-auto mt-10">
                        <Button size="lg" className="bg-[#E16E4E] text-white rounded w-[235px]">Buy Now</Button>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Hero;
// text-[48px] md:text-6xl font-normal md:font-bold text-white mb-4 leading-[64px] md:leading-[88px]
// leading-[28px] text-white mb-8 font-semibold text-base max-w-[656px] mx-auto