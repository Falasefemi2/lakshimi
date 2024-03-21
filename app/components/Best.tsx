import Texting from "./Texting";

const Best = () => {
    return (
        <div className=" mt-16 p-6">
            <div className=" text-center">
                <h1 className=" font-bold text-[32px] md:text-[48px]  leading-[48px] md:leading-[56px] text-[#E16E4E]">Get the best from our Tea</h1>
                <p className=" text-[#202020]  leading-8 text-lg font-normal">Style to your own taste.</p>
            </div>
            <Texting
                imgSrc="/image 289.png"
                heading="With Milk"
                subHeading="Savor the perfect union of tradition and comfort by enjoying our tea with milk. Elevate your tea-drinking experience as the rich, robust flavors intertwine with the creamy embrace of milk, creating a symphony of taste that lingers in every delightful sip."
                buttonText="Buy Now"
                reverseLayout={false}
            />
            <div className="mt-10">
                <Texting
                    imgSrc="/image 290.png"
                    heading="With Ice"
                    subHeading="Embrace the refreshing symphony of flavors as you take a cool journey through our teas enjoyed with ice. Immerse yourself in the invigorating fusion of iced tea, where each sip unfolds a delightful dance of chilled sophistication and exceptional taste."
                    buttonText="Buy Now"
                    reverseLayout={true}
                />
            </div>
        </div>
    );
}

export default Best;