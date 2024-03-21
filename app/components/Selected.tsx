import { Button } from "@/components/ui/button";
import Image from "next/image";

const Selected = () => {
    return (
        <div className="m-6">
            <div className="mt-12">
                <div className="text-center">
                    <h1 className="text-[#E16E4E] text-[32px] md:text-[48px] leading-[48px] md:leading-[56px] font-bold">Selected Products</h1>
                    <p className="font-normal text-[18px] leading-8 mt-2 ">Indulge in Our Exceptional Tea Collection.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center mt-14">
                <div className="md:w-1/2 md:pr-10">

                    <Image src="/image 285.png" alt="pic" width={465} height={440} />
                    <h1 className="text-[#202020] font-semibold leading-8 mt-4 text-2xl md:text-[32px] md:leading-10">Premium Honey Tea</h1>
                    <div className=" md:max-w-[465px]">

                        <p className=" font-normal text-base leading-7 md:text-base md:leading-8 text-[#333333] mt-2 break-words">As a product delivered by a tea sommelier from a tea specialty shop, we have maximized the flavor of the tea leaves. We blend powdered multi-floral honey from Spain into the tea. The sweetness of the honey is so strong that there is no need to use sugar. Just one sip brings a feeling of happiness, a rich flavor. It’s a delicious tea, whether hot or iced, straight or as a milk tea.</p>
                    </div>
                    <Button size="lg" className="bg-[#E16E4E] text-white rounded w-[235px] mt-3">Buy Now</Button>

                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 md:pl-32">
                    <Image src="/image 284.png" alt="pic" width={465} height={465} />
                    <h1 className="text-[#202020] font-semibold leading-8 mt-4 text-2xl md:text-[32px] md:leading-10">Premium Honey Lemon Tea</h1>
                    <div className="md:max-w-[465px]">

                        <p className=" font-normal text-base leading-7 md:text-base md:leading-8 text-[#333333] mt-2 break-words">Indulge in the harmonious blend of nature&aposs finest ingredients with Lakshimi Premium Honey Lemon Tea. Crafted with meticulous care, this exquisite infusion combines the sweetness of pure honey, the zest of sun-kissed lemons, and the premium quality tea leaves to create a tea experience like no other. Elevate your tea ritual with Lakshimi Premium Honey Lemon Tea, where every sip is a celebration of taste and tranquility.

                        </p>
                    </div>
                    <Button size="lg" className="bg-[#E16E4E] text-white rounded w-[235px] mt-3">Buy Now</Button>
                </div>
            </div>
        </div>
    );
}

export default Selected;







