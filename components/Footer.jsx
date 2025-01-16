import Image from "next/image";
import Link from "next/link";

const links =[
    {href: "/", name: "Home"},
    {href: "/", name: "Explore"},
    {href: "/", name: "About"},
    {href: "/", name: "Menu"},
    {href: "/", name: "Contact"},
  ];

//items
import {FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-no-repeat pt-16 relative ">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/[0.90] z-10 top-0 "></div>
        <div className="container mx-auto z-20 relative">
            <div className="flex flex-col gap-14 items-center justify-center">

                {/* nav */}
                <nav className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-center justify-center">
                    {links.map((link, index)=>{
                        return (
                            <Link href={link.href} key={index} className="uppercase text-white tracking-widest hover:text-accent transition-all">{link.name}</Link>
                        );
                    })}
                </nav>
                {/* social */}
                <ul className="flex text-white text-xl gap-4">
                    <Link href="/" className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all">
                        <FaYoutube/>
                    </Link>

                    <Link href="/" className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all">
                        <FaFacebookF/>
                    </Link>

                    <Link href="/" className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all">
                        <FaInstagram/>
                    </Link>

                    <Link href="/" className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all">
                        <FaTwitter/>
                    </Link>
                </ul>
                {/* copyright */}
                <div className="border-t border-white/10 text-[15px] text-white/70 font-light w-full flex items-center justify-center py-6">
                    <p>&copy; Copyright 2025 - coco coffe. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer