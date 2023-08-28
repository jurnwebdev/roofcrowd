import { philosopher } from '@/constants'
import React from 'react'

export default function Investment() {
    return (
        <section className='flex flex-col text-center justify-center items-center w-full h-auto '>
            <h1 className={`${philosopher.className} text-[40px] font-bold text-roofgreen my-10`}>Our Latest Investment Opportunities</h1>
            <div className='w-full bg-roofgreen h-[600px]'></div>
        </section>
    )
}
