import Image from 'next/image'
import Hero from './components/Hero'
import { philosopher } from '@/constants'
import Investment from './components/Investment'
import Howitworks from './components/Howitworks'

export default function Home() {
  return (
    <>
      <Hero />
      <section className='flex justify-between items-stretch w-full p-10'>
        <div className='w-[20%] p-[3px]'>
          <h1 className={`${philosopher.className} text-[44px] text-roofgreen font-bold`}>10%</h1>
          <p>Estimated return on investment
            are between 10-15% annually
            depending on current property
            valuation.</p>
        </div>

        <div className='border-l-[1px] border-black h-150px w-[20%] px-10'>
          <h1 className={`${philosopher.className} text-[44px] text-roofgreen font-bold`}>₦100,000</h1>
          <p>Minimum investment of
            N100,000 on any listed
            property.</p>
        </div>

        <div className='border-l-[1px] border-black h-150px w-[20%] px-10'>
          <h1 className={`${philosopher.className} text-[44px] text-roofgreen font-bold`}>70.5M+</h1>
          <p>Total Rental Income Paid</p>
        </div>

        <div className='border-l-[1px] border-black h-150px w-[20%] px-10'>
          <h1 className={`${philosopher.className} text-[44px] text-roofgreen font-bold`}>21%</h1>
          <p>House prices in Nigeria are set
            to increase by 21% in the next
            5 years.<br />
            (Arithmetic Cap. Research, 2022)</p>
        </div>
      </section>

      <Investment />
      <Howitworks />
    </>
  )
}
