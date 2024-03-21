import Texting from "./Texting";

const ProductFeatured = () => {
    return (
        <div className=" mt-28">
            <h1 className=" font-bold text-[32px] md:text-5xl leading-[48px] md:leading-[56px] text-[#E16E4E]">Product Features</h1>
            <p className="mt-4 font-normal text-lg leading-8 text-[#202020]">Discover the Essence of Our Tea Collection</p>

            <Texting
                imgSrc="/image 288.png"
                heading="Honey that took over 2 years to find."
                subHeading="Discover the liquid gold that embodies patience and persistence – our honey took over 2 years to find. We have tried over a 1000 different types of honey of different locations and finally, after 2 years of extensive search and going all the way from Japan to Spain, we discovered the perfect honey for the perfect flavored blend of tea."
                buttonText="Buy now"
            />

            <div className=" mt-10 ">
                <Texting
                    imgSrc="/image 287.png"
                    heading="Blended by Japanese tea sommelier Yoko Toda."
                    subHeading="Crafted with precision and expertise, each blend bears the mark of Japanese tea sommelier Yoko Toda. Immerse yourself in the artistry of tea, perfected by a master for an unparalleled experience in every sip."
                    buttonText="Buy now"
                    reverseLayout={true}
                />
            </div>

        </div>
    );
}

export default ProductFeatured;