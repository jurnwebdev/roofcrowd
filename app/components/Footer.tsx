import Link from 'next/link'
import Image from 'next/image'
import { footerLink1, footerLink2, philosopher } from '@/constants'


export default function Footer() {
    return (
        <footer className="bg-footerBg w-full text-white">
            <div className='p-10 pb-[70px]'>
                <Image src="/stock12.png" width={200} height={300} alt="roof crowd Logo" />
                <div className='w-full flex flex-col md:flex-row justify-between items-start gap-[68px] mt-[25px]'>
                    <div className=' w-auto flex gap-[68px]'>
                        {
                            footerLink1.map((section) => (
                                <div key={section.heading}>
                                    <h2 className={`${philosopher.className} font-bold`}>{section.heading}</h2>
                                    <ul className='flex flex-col gap-5 mt-5 justify-between h-auto'>
                                        {section.menuList.map((menuItem) => (
                                            <li className="hover:text-roofblue" key={menuItem.title}>
                                                <a href={menuItem.link}>{menuItem.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex flex-col justify-stretch w-[200px]'>
                        <h2 className={`${philosopher.className} font-bold`}>Get Started</h2>
                        <div className='flex flex-col w-full mt-5 gap-4 justify-center items-center'>
                            <button type="button" className={`${philosopher.className} py-[12px] px-[20px] border-2 rounded-[10px] border-roofblue hover:bg-roofblue hover:text-white w-full`}>LOGIN</button>
                            <button type="button" className={`${philosopher.className} py-[12px] px-[20px] border-2  border-roofyelow rounded-[10px] bg-roofyelow text-white hover:bg-transparent hover:text-roofyelow w-full`} >SIGNUP</button>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className={`${philosopher.className} font-bold`}>Social Links</h2>
                        <div className='flex flex-col mt-5 justify-between h-20'>
                            <p className=''>Hello@roofcrowd.com</p>
                            <div className='flex gap-2'>
                                <Link href="#" ><Image className="hover:bg-roofyelow" src='/Link.svg' alt='LinkedIn icon' width={35} height={35} /></Link>
                                <Link href="#" ><Image className="hover:bg-roofyelow" src='/Link-1.svg' alt='LinkedIn icon' width={35} height={35} /></Link>
                                <Link href="#" ><Image className="hover:bg-roofyelow" src='/Link-2.svg' alt='LinkedIn icon' width={35} height={35} /></Link>
                                <Link href="#" ><Image className="hover:bg-roofyelow" src='/Link-3.svg' alt='LinkedIn icon' width={35} height={35} /></Link>
                            </div>

                        </div>

                    </div>
                    <div className='flex flex-col '>
                        <h2 className={`${philosopher.className} font-bold capitalize`}>Subscribe to our newsletter</h2>
                        <div className='flex flex-col mt-5'>
                            <form>
                                <div className='flex gap-2'>
                                    <input className='p-[15px] w-[200px] text-black' type="text" placeholder='Enter Email'></input>
                                    <button className='py-[13px] px-10 bg-roofyelow rounded-[5px]'>Subscribe</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

                <div className='flex flex-col mt-[60px]'>
                    <div className='flex flex-col md:flex-row gap-[20px]'>
                        {
                            footerLink2.map((link) => {
                                return (
                                    <Link className="hover:text-roofblue" href={link.link} key={link.title}>{link.title}</Link>
                                )
                            })
                        }
                    </div>
                    <div className='h-[1px] w-full my-[24px] bg-[#F7F7F7]'></div>
                    <p className='text-[12px] font-thin'>Roofcrowd Properties Limited  is regulated by the Nigerian Financial Services Authority (NFSA) as an Operator of a Property Investment Crowdfunding Platform. The platform consists of the website and web platform. <br />
                        By using Roofcrowd, you agree to be bound by the Terms & Conditions, Cookie Notice and Privacy Policy. All investments through Roofcrowd carry risk and are not guaranteed. Please read Key Risks before
                        investing.</p>
                </div>
            </div>

            <div className='px-10 py-5 border-t-[1px] border-[#f7f7f7]'>
                <p>© 2023 Roofcrowd. | All Rights Reserved</p>
            </div>
        </footer >
    )
}
