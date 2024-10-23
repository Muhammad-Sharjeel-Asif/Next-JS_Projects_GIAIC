import Link from "next/link"
import Card from "./Card"

export default function CardSection() {
  return (
    <div className="bg-[#f4e2e2] pb-16">
        <div className="flex py-5 text-xl font-bold justify-between mx-36">
          <h2 className="text-black">Recent Post</h2>
          <Link href="" className="text-[#ec8484]">View all</Link>
        </div>
        <div className="flex justify-center gap-10">
          <Card />
          <Card />
        </div>
      </div>
  )
}
