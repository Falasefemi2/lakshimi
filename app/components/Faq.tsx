/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";



const Faq = () => {
    return (
        <div className="mt-48">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-[#E16E4E] text-[32px] md:text-[48px] leading-[48px] md:leading-[56px] font-bold mb-2 text-center">Frequently Asked Questions</h1>
                <p className="font-normal text-lg leading-8 text-[#202020] max-w-[366px] md:max-w-[688px] mx-auto text-center">Dive into the details! Here are answers to some commonly asked questions. If you don't find what you're looking for, feel free to reach out to us – we're here to help!</p>

                <div className="flex flex-col mt-4 items-center">

                    <div className="flex justify-center items-center m-8">
                        <span className="mr-4 md:mr-24 text-[#E16E4E] font-bold leading-10 text-[32px]">01</span>
                        <p className="mb-1 text-[#333333] text-lg font-semibold leading-8">Can children drink it? <br />
                            <span className="mb-0 block font-semibold text-lg leading-8 text-[#666666] mt-2">
                                No. Do not give to children under 1 year old.
                            </span>
                        </p>
                    </div>


                    <div className="flex justify-center items-center m-8">
                        <span className=" mr-4 md:mr-24 text-[#E16E4E] font-bold leading-10 text-[32px]">02</span>
                        <p className="mb-1 text-[#333333] text-lg font-semibold leading-8">Are there staples attached to the tea bag? <br />
                            <span className="mb-0 font-semibold text-lg leading-8 text-[#666666] mt-2">There are no staples nor any metals attached.<br /> So, please drink it with peace of mind.</span>

                        </p>
                    </div>


                    <div className="flex justify-center items-center m-8">
                        <span className=" mr-4 md:mr-24 text-[#E16E4E] font-bold leading-10 text-[32px]">03</span>
                        <p className="mb-1 text-[#333333] text-lg font-semibold leading-8">Is there an expiration date? <br />
                            <span className="mb-0 font-semibold text-lg leading-8 text-[#666666] mt-2">The expiration date is 2 years after the date of <br /> manufacture.</span>

                        </p>
                    </div>

                </div>
                <div className=" flex items-center justify-center">

                    <Button size="lg" className="bg-[#E16E4E] text-white rounded w-[235px] mt-3">Buy Now</Button>
                </div>

            </div>
        </div>
    );
};

export default Faq;
