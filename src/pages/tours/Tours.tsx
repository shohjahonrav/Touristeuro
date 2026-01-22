import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Arrow from "@/icons/arrow"
import SearchIcon from "@/icons/searchIcon"

const cards = [
  {id: 1, activity_name: "Amazonka", country: "Brazil", img_url: "/image1.jpg"},
  {id: 2, activity_name: "surfing", country: "australia", img_url: "/image2.png"},
  {id: 3, activity_name: "sahara", country: "morocco", img_url: "/homebg.jpg"},
  {id: 4, activity_name: "camping", country: "canada", img_url: "/image1.jpg"},
  {id: 5, activity_name: "pro biking", country: "poland", img_url: "/image2.png"},
  {id: 6, activity_name: "mountain climbing", country: "USA", img_url: "/homebg.jpg"}
]

const Tours = () => {
  return (
    <div>
      <section>
        <div className="h-dvh relative">
          <img src="/surfing.jpg" className="w-full h-full object-cover object-center" alt="" />
          <div className="container absolute flex justify-between bottom-18.25 left-1/2 -translate-x-1/2">
            <span className="text-white uppercase text-[128px] ml-36 font-medium">Surfing</span>
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
      <section className="container">
        <div className="pt-20 px-40 pb-25 flex flex-col gap-20">
          <div className="bg-[#F3F6FF] p-8.5 flex items-center gap-3.75 rounded-3xl">
            <div className="w-full relative">
              <Input placeholder="Search by Country name or city" className="bg-[#DDDDDD33] text-[16px] pl-11 h-12.5 border-[#FFD6EA]" />
              <span className="absolute left-3.75 top-1/2 -translate-y-1/2">
                <SearchIcon />
              </span>
            </div>
            <Button className="h-12.5 px-[64.5px] bg-[#2196F3] rounded-[10px] text-[20px] hover:bg-blue-600">Search</Button>
          </div>
          <div className="grid grid-cols-3  gap-5">
            {
              cards.map((card) => (
                <div key={card.id} className="max-h-125 h-125 relative w-full">
                  <img src={card.img_url} className="w-full h-full object-cover rounded-3xl" alt="card" />
                  <div className="absolute bottom-0 left-0 w-full flex justify-center flex-col items-center pb-10">
                    <span className="text-white text-[32px] uppercase">{card.activity_name}</span>            
                    <span className="text-white text-[14px] uppercase border-b-2 border-white">{card.country}</span>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="mt-2.5 flex items-center justify-center">
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

export default Tours