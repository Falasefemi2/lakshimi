import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="flex flex-col items-center lg:flex-row justify-between py-4 lg:py-0 px-4 border-b lg:h-20 md:px-6">
            <div className="max-w-[1440px] px-4 mx-auto flex flex-col md:flex-row justify-between items-center w-full">

                <nav className="md:flex hidden space-x-9 lg:flex flex-1 shrink-0 text-sm font-medium items-center mt-8">
                    <Link className="text-[#333333] font-normal text-sm leading-5" href="#">
                        Home
                    </Link>
                    <Link className="text-[#333333] font-normal text-sm leading-5" href="#">
                        About
                    </Link>

                    <Link className="text-[#333333] font-normal text-sm leading-5" href="#">
                        Project
                    </Link>
                </nav>

                <div className="flex items-center justify-center md:justify-start"> {/* Adjusted alignment for mobile */}
                    <Image src='/image 279.png' alt="logo" width={58} height={58} />
                </div>

                <nav className="md:flex hidden space-x-9 lg:flex flex-1 shrink-0 text-sm font-medium justify-end items-center mt-8">
                    <Link className="text-[#333333] font-normal text-sm leading-5" href="#">
                        Features
                    </Link>
                    <Link className="text-[#333333] font-normal text-sm leading-5" href="#">
                        Awards
                    </Link>
                    <Link className="text-[#333333] font-normal text-sm leading-5" href="#">
                        FAQ
                    </Link>
                </nav>

            </div>
        </header>
    );
}

export default Navbar;
