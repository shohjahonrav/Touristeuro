import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Arrow from "@/icons/arrow"
import SearchIcon from "@/icons/searchIcon"
import Location from "@/icons/location"


const cards = [
  {id: 1, city: "California", country: "USA", image_url: "/image1.jpg"},
  {id: 2, city: "Alaska", country: "Norway", image_url: "/homebg.jpg"},
  {id: 3, city: "Seoul", country: "Korea", image_url: "/image2.png"},
  {id: 4, city: "California", country: "USA", image_url: "/image1.jpg"},
  {id: 1, city: "California", country: "USA", image_url: "/image1.jpg"},
  {id: 2, city: "Alaska", country: "Norway", image_url: "/homebg.jpg"},
  {id: 3, city: "Seoul", country: "Korea", image_url: "/image2.png"},
  {id: 4, city: "California", country: "USA", image_url: "/image1.jpg"},
]

const Countries = () => {
  return (
    <div>
      <section>
        <div className="h-dvh relative">
          <img src="/countriesbg.jpg" className="w-full h-full object-cover" alt="" />
          <div className="container absolute flex justify-between bottom-18.25 left-1/2 -translate-x-1/2">
            <span className="text-white uppercase text-[128px] ml-36 font-medium">Norway</span>
            <div className="flex items-center gap-7.5">
              <Button disabled className="border border-white rounded-full w-12.5 h-12.5 bg-transparent">
                <Arrow className="stroke-white scale-160" />
              </Button>
              <Button className="border border-white rotate-180 rounded-full w-12.5 h-12.5 bg-transparent">
                <Arrow className="stroke-white scale-160" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 px-40 pb-25">
        <div className="">
          <div className="bg-[#F3F6FF] p-8.5 flex items-center gap-3.75 rounded-3xl">
            <div className="w-full relative">
              <Input placeholder="Search by Country name or city" className="bg-[#DDDDDD33] text-[16px] pl-11 h-12.5 border-[#FFD6EA]" />
              <span className="absolute left-3.75 top-1/2 -translate-y-1/2">
                <SearchIcon />
              </span>
            </div>
            <Button className="h-12.5 px-[64.5px] bg-[#2196F3] rounded-[10px] text-[20px] hover:bg-blue-600">Search</Button>
          </div>
        </div>
        <div>
          <div className="grid mt-20 grid-cols-4 gap-5">
            {
              cards.map((card) => (
                <div>
                  <img src={card.image_url} className="bg-red-400 object-cover h-50 w-full rounded-3xl" alt="" />
                  <div className="mt-3.75">
                    <span className="text-[24px] font-medium">{card.city}</span>
                    <span className="flex items-center gap-0.75 text-[#C7C7C7] text-[16px]">
                      <Location />
                      {card.country}
                    </span>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="mt-25 flex items-center justify-center">
            <div className="flex items-center gap-10">
              <Button className="w-12.5 h-12.5 rounded-full shadow-lg shadow-[#0000001F] bg-white hover:bg-gray-300/20">
                <Arrow className="stroke-black scale-150" />
              </Button>
              <div className="flex items-center gap-8.75">
                <Button className="text-[#2196F3] w-fit p-1 hover:bg-transparent bg-transparent text-[32px]">1</Button>
                <Button className="text-[#373737] w-fit p-1 hover:bg-transparent bg-transparent text-[32px]">2</Button>
                <Button className="text-[#373737] w-fit p-1 hover:bg-transparent bg-transparent text-[32px]">3</Button>
                <span className="text-[32px] text-[#373737]">...</span>
                <Button className="text-[#373737] w-fit p-1 hover:bg-transparent bg-transparent text-[32px]">7</Button>
              </div>
              <Button className="w-12.5 h-12.5 rounded-full shadow-lg shadow-[#0000001F] bg-[#2196F3] hover:bg-blue-500">
                <Arrow className="stroke-white rotate-180 scale-150" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Countries