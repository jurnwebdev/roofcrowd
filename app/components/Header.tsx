'use client'
import Image from "next/image"
import { Inter } from 'next/font/google'
import { Abel } from 'next/font/google'
import { Philosopher } from 'next/font/google'
import { useState } from "react"
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })
const abel = Abel({ weight: '400', subsets: ['latin'] })
const philosopher = Philosopher({ weight: '400', subsets: ['latin'] })

export default function Header() {

    const [toggle, setToggle] = useState(false);

    const toggleMenu = () => {
        setToggle(!toggle);
    }

    return (
        <header className="flex justify-between items-center w-full px-10 py-5">
            <Image src="/stock12.png" alt="roofcrowd Logo" width={180} height={50} />
            <nav className="uppercase text-[16px]">
                <ul className="flex gap-20">
                    <li><Link href="#">PROPERTIES</Link></li>
                    <li><Link href="#">ABOUT</Link></li>
                    <li className="flex items-center gap-2">LEARN
                        <span className="hover:cursor-pointer">
                            <Image
                                src='/dropdown.png'
                                alt="dropdown icon"
                                width={10}
                                height={10}
                                onClick={toggleMenu} />
                        </span>
                    </li>
                    <div className={`absolute bg-[#f1f1f1] w-[160px] shadow-lg z-10 p-5 flex-col gap-2 left-[55%] top-[80px] ${toggle ? "flex" : "hidden"}`}>
                        <div className="hover:text-roofblue">
                            <Link href="#">more</Link></div>
                        <div className="hover:text-slate-700"><Link href="#">more</Link></div>
                        <div className="hover:text-slate-700"><Link href="#">more</Link></div>
                    </div>

                    <li>CONTACT US</li>
                </ul>
            </nav>
            <div className="flex gap-4">
                <button type="button" className={`${philosopher.className} py-[15px] px-[20px] border-2 rounded-[10px] border-roofblue hover:bg-roofblue hover:text-white`}>LOGIN</button>
                <button type="button" className={`${philosopher.className} py-[15px] px-[20px] border-2  border-roofyelow rounded-[10px] bg-roofyelow text-white hover:bg-transparent hover:text-roofyelow`} >GET STARTED</button>
            </div>
        </header>
    )
}