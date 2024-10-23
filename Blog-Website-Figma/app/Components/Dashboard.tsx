import Image from "next/image"
import Link from "next/link"
import Image1 from "../public/Rectangle 30.png"
import Image2 from "../public/Rectangle 32.png"
import Image3 from "../public/Rectangle 34.png"

export default function Dashboard() {
  return (
    <div className="pt-14 px-36">
      <h2 className="text-black text-xl font-bold">Featured works</h2>
      {/* Image-1 */}
      <div className="flex justify-between gap-8 py-20">
        <div>
          <Image src={Image1} width={365} height={365} alt="Image-1"></Image>
        </div>

        <div>
          <h3 className="text-black text-3xl font-bold">Designing Dashboards</h3>
          <div className="flex gap-10 py-5">
            <button className="text-white bg-[#ec8484] rounded-xl px-6">2020</button><Link href='' className="text-[#585b6d]">Dashboard</Link>
          </div>
          <p className="text-[#21243D] text-lg">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consiquat duis enim velit mollit. Exertication veniam consequat sunt nostrud amet.</p>
        </div>
      </div>

      {/* Image-1 */}
      <div className="flex justify-between gap-8 py-8">
        <div>
          <Image src={Image2} width={365} height={365} alt="Image-1"></Image>
        </div>

        <div>
          <h3 className="text-black text-3xl font-bold">Designing Dashboards</h3>
          <div className="flex gap-10 py-5">
            <button className="text-white bg-[#ec8484] rounded-xl px-6">2020</button><Link href='' className="text-[#585b6d]">Dashboard</Link>
          </div>
          <p className="text-[#21243D] text-lg">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consiquat duis enim velit mollit. Exertication veniam consequat sunt nostrud amet.</p>
        </div>
      </div>

      {/* Image-1 */}
      <div className="flex justify-between gap-8 py-20">
        <div>
          <Image src={Image3} width={365} height={365} alt="Image-1"></Image>
        </div>

        <div>
          <h3 className="text-black text-3xl font-bold">Designing Dashboards</h3>
          <div className="flex gap-10 py-5">
            <button className="text-white bg-[#ec8484] rounded-xl px-6">2020</button><Link href='' className="text-[#585b6d]">Dashboard</Link>
          </div>
          <p className="text-[#21243D] text-lg">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consiquat duis enim velit mollit. Exertication veniam consequat sunt nostrud amet.</p>
        </div>
      </div>
    </div>
  )
}
