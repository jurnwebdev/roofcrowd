import { philosopher } from '@/constants'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className='bg-heroBg w-full h-[627px] flex flex-col gap-[16px] justify-center items-center text-center p-[150px] text-white'>
            <h1 className={`${philosopher.className} text-[55px] font-bold leading-[70px]`}>
                Unlock the Path to Financial Freedom through Real Estate Investing
            </h1>
            <h4 className='text-[20px] font-light text-slate-200'>Your Gateway to Prosperity: Transforming Properties into Profits</h4>

            <div className='flex gap-6 justify-between items-center mt-4'>
                <h3 className={`${philosopher.className} text-[22px]`}>EXPLORE PROPERTIES</h3>
                <Image src='/herobutton.svg' width={60} height={60} alt='hero Button' />
            </div>
        </section>
    )
}
