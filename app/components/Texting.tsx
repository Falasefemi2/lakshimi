import { Button } from "@/components/ui/button";
import Image from "next/image";

interface TextingProps {
    imgSrc: string;
    heading: string;
    subHeading: string;
    buttonText: string;
    reverseLayout?: boolean; // Prop for controlling flex direction

}

const Texting: React.FC<TextingProps> = ({ imgSrc, heading, subHeading, buttonText, reverseLayout = false }) => {
    return (
        <div className="mt-2">
            <div className={`flex flex-col md:flex-row items-center ${reverseLayout ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                    <Image src={imgSrc} alt="img" width={467} height={440} />
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <h1 className="font-semibold text-2xl leading-8 text-[#202020]">{heading}</h1>
                    <div className="md:max-w-[465px]">
                        <p className="text-lg font-normal leading-8 text-[#333333]">{subHeading}</p>
                    </div>
                    <div className="max-w-sm mt-6 md:mt-0"> {/* Adjusted */}
                        <Button size="lg" className="bg-[#E16E4E] text-white rounded w-[235px]">{buttonText}</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Texting;
