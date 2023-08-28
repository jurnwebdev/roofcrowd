import { philosopher } from '@/constants'
import React from 'react'

export default function Howitworks() {
    return (
        <section className='bg-howitworksBg bg w-full h-[300px] text-center justify-center items-center'>
            <h1 className={`${philosopher.className} text-[40px] font-bold text-roofgreen my-10`}>How it Works</h1>
        </section>

    )
}
