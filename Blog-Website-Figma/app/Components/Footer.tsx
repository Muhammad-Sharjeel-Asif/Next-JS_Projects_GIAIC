import Image from "next/image"
import Facebook from '..//public/fb.png'
import Insta from '..//public/insta.png'
import Twitter from '..//public/Vector.png'
import LinkedIn from '..//public/Linkedin.png'
import Link from "next/link"

export default function Footer() {
  return (
    <div className="pb-4 pt-48">
      <div className="flex justify-center gap-10">
        <Link href='https://www.facebook.com/profile.php?id=100085035428339' target="blank"><Image src={Facebook} height={30} width={30} alt="fb" /></Link>
        <Link href='https://www.instagram.com/m_sharjeel_1435/'><Image src={Insta} height={30} width={30} alt="fb" /></Link>
        <Link href='https://github.com/Muhammad-Sharjeel-Asif'><Image src={Twitter} height={30} width={30} alt="fb" /></Link>
        <Link href='https://www.linkedin.com/in/muhammad-sharjeel-asif-6a08532b9/'><Image src={LinkedIn} height={30} width={30} alt="fb" /></Link>
      </div>
      <p className="text-black text-center text-xl font-semibold py-8">Copyright &copy;2020 All rights reserved</p>
    </div>
  )
}