import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'

export default function Teams() {
  return (
    <div className='' id='teams'>
      <div className='container py-32'>
        <div className='flex flex-col gap-2 items-center'>
          <h2 className='text-4xl lg:max-w-[500px] font-semibold'>Teams</h2>
          <p className='opacity-50 text-md lg:max-w-[500px]'>Meet Our Professional Staff</p>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1 py-24 pb-12 gap-6'>
          <div className='border border-black dark:border-white flex flex-col items-center rounded-xl p-6 gap-2 hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] cursor-pointer'>
            <img className='rounded-full object-cover h-[280px] w-auto' src='https://careers.energeek.id/members/dinivannendra.webp' />
            <h1 className='text-xl font-semibold line-clamp-2'>Joakim Karud</h1>
            <p className='italic text-sm opacity-70 font-light'>Design Engineer</p>
          </div>
        </div>
        <div className='flex items-center justify-center pt-12'>
          <Button className='rounded-full text-xl border-2 border-black px-6 py-10' size='lg' variant='outline'>Semua Teams <ArrowUpRight className='w-4 h-4 ml-2' /> </Button>
        </div>
      </div>
    </div>
  )
}
