import Image from 'next/image';
import MyPic from './download.jpg'


const HeroSection = () => {
  return (
    <div className='flex justify-around bg-blue-200 min-h-screen'>
        <div className='flex flex-col gap-5 mt-20'>
            <h1 className="text-5xl font-extrabold">Hi, I'm Muhammad Sharjeel</h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ex qui, provident fugiat placeat</p>

            <section className=' flex gap-3'>
            <button className='bg-blue-600 p-3 text-xl font-bold rounded-2xl'>View Resume</button>
            <button className='bg-blue-600 p-3 text-xl font-bold rounded-2xl'>Hire Me</button>
            </section>
        </div>
        <div className=''>
            <Image src={MyPic} alt='My-imag' width={350} height={350} className='rounded-md'></Image>
        </div>

    </div>
  )
}

export default HeroSection