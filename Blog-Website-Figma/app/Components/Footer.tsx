import Image from "next/image"
import Facebook from '..//public/fb.png'
import Insta from '..//public/insta.png'
import Twitter from '..//public/Vector.png'
import LinkedIn from '..//public/Linkedin.png'

export default function Footer() {
  return (
    <div className="pb-4 pt-48">
      <div className="flex justify-center gap-10">
        <Image src={Facebook} height={30} width={30} alt="fb" />
        <Image src={Insta} height={30} width={30} alt="fb" />
        <Image src={Twitter} height={30} width={30} alt="fb" />
        <Image src={LinkedIn} height={30} width={30} alt="fb" />
      </div>
      <p className="text-black text-center text-xl font-semibold py-8">Copyright &copy;2020 All rights reserved</p>
    </div>
  )
}