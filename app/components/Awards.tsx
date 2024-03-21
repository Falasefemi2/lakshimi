import { Button } from "@/components/ui/button";
import Image from "next/image";

const Awards = () => {
    return (
        <div className="mt-28">
            <h1 className="font-bold text-[32px] md:text-5xl leading-[48px] md:leading-[56px] text-[#E16E4E]">Awards & Recognition</h1>
            <p className="mt-4 font-normal text-lg leading-8 text-[#202020]">Our work speak for us</p>
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 p-4 flex flex-col items-center"> {/* Modified */}
                    <Image src='/image 303.png' alt="img" width={466} height={331} />
                    <p className="text-[#202020] text-xl leading-8 font-semibold text-center mt-4">Top sales in tea category in Japanese EC site.</p> {/* Modified */}
                    <div className="max-w-sm mt-6"> {/* Adjusted */}
                        <Button size="lg" className="bg-[#E16E4E] text-white rounded w-[235px]">Buy Now</Button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-4 flex flex-col items-center"> {/* Modified */}
                    <Image src='/image 303.png' alt="img" width={466} height={331} />
                    <p className="text-[#202020] text-xl leading-8 font-semibold text-center mt-4">Top sales in tea category in Japanese EC site.</p> {/* Modified */}
                    <div className="max-w-sm mt-6"> {/* Adjusted */}
                        <Button size="lg" className="bg-[#E16E4E] text-white rounded w-[235px]">Buy Now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
