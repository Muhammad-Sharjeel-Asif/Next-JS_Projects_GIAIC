import Image from 'next/image'
import profile from '..//public/profile.png'
import Link from 'next/link'


export default function HeroSection() {
  return (
    <div className="flex justify-around py-28">
        <div className="text-[#21243D] font-sans ">
          <h1 className="text-5xl font-bold mt-2">Hi, I am John, <br /> Creative Technologist</h1>
          <p className="my-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br /> sint. Velit officia consiquat duis enim velit mollit. Exertication veniam <br /> consequat sunt nostrud amet.</p>
          <Link href='https://hackathon-milestones1-2-theta.vercel.app/' target='blank' download="My_Resume.pdf"><button className="bg-[#ec8484] px-6 py-3 mt-4 text-white rounded-sm shadow-[0.5px_4px_4px_gray]">Download Resume</button></Link>
        </div>
        <div >
          <Image src={profile} width={300} height={300} alt="Image" className="shadow-left-black mr-12 rounded-full bg-#e2dbdb shadow-[-8px_8px_1px_#e2dbdb] bg-#e2dbdb"/>
        </div>
      </div>
  )
}
// #e2dbdb