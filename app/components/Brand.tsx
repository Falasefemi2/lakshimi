import { Button } from "@/components/ui/button";
import Image from "next/image";

const Brand = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-center m-6">
            <div className="md:w-1/2 md:pr-10">
                <h1 className="text-[#E16E4E] font-bold text-5xl leading-[64px] mb-2">About Brand</h1>
                <p className="text-[#333333] font-normal text-lg leading-[32px]">
                    Lakshimi started with a tea class that the representative, Yoko Toda, started at home. In 2005, “Lakshimi Tea Shop” opened in Kitano, Kobe.
                    In 2008, we started to blend our own original tea. Initially, we started with only a few blends, but as we learned about the tastes and preferences of our customers, we gradually increased the number of original blends.<br />
                    In 2011, we developed our popular product, “Premium Honey Tea”. This tea was well-received by customers who enjoyed its sweet yet low-calorie content, making it a mainstay in our store.
                </p>
                <div className="max-w-sm mt-10 hidden md:block">
                    <Button size="lg" className="bg-[#E16E4E] text-white rounded w-[235px]">Buy Now</Button>
                </div>

            </div>

            <div className="md:w-1/2 mt-5 md:mt-0 md:pl-10 flex justify-center">
                <Image src="/image 297.png" alt="flower" width={355} height={355} />
            </div>
        </div>
    );
}

export default Brand;




