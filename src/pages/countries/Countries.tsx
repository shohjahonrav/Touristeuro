import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Arrow from "@/icons/arrow"
import SearchIcon from "@/icons/searchIcon"
import Location from "@/icons/location"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const cards = [
  {id: 1, city: "California", country: "USA", image_url: "/california.jpg"},
  {id: 2, city: "Oslo", country: "Norway", image_url: "/oslo.jpg"},
  {id: 3, city: "Seoul", country: "South Korea", image_url: "/seoul.png"},
  {id: 4, city: "Osaka", country: "Japan", image_url: "/osaka.jpg"},
]


const Countries = () => {
  return (
    <div>
      <section>
        <div className="h-dvh relative">
          <div className="h-dvh w-full overflow-clip">
            <Carousel className="relative h-screen w-screen">
              <CarouselContent>
                {
                  cards.map(card => (
                    <CarouselItem className="relative w-sceen h-full ">
                      <img src={card.image_url} className="w-screen h-screen object-cover" alt="" />
                      <div className="md: container absolute flex justify-between bottom-10 md:bottom-18.25 w-full md:px-0 left-1/2 -translate-x-1/2">
                        <span className="text-white uppercase text-[48px] md:text-[128px] ml-5 md:ml-36 font-medium">{card.country}</span>
                      </div>
                    </CarouselItem>
                  ))
                }
              </CarouselContent>
                <div className=" absolute z-500 bottom-20  md:bottom-35 md:w-10 right-25 md:right-50 flex items-center">
                  <CarouselPrevious className="border-white border bg-transparent stroke-white text-white w-9.5 h-9.5 md:h-12.5 md:w-12.5" />
                  <CarouselNext className="border-white border bg-transparent stroke-white text-white w-9.5 h-9.5 md:h-12.5 md:w-12.5"/>
                </div>
            </Carousel>
          </div>
          
        </div>
      </section>
      <section className="lg:pt-20 px-5 py-7.5 md:px-20 lg:px-40 pb-25">
        <div className="">
          <div className="bg-[#F3F6FF] p-3.75 md:p-8.5 flex items-center gap-3.75 rounded-3xl">
            <div className="w-full relative">
              <Input placeholder="Search by Country name or city" className="bg-[#DDDDDD33] text-[16px] md:pl-11 h-9 md:h-12.5 border-[#FFD6EA]" />
              <span className="absolute hidden md:block left-3.75 top-1/2 -translate-y-1/2">
                <SearchIcon className="stroke-[#94969A]" />
              </span>
            </div>  
            <Button className="h-9 w-9 md:w-fit lg:w-47.5 md:h-12.5 bg-[#2196F3] rounded-[10px] text-[20px] hover:bg-blue-600">
              <SearchIcon className="stroke-white md:hidden" />
              <span className="hidden md:block">
                Search
              </span>
            </Button>
          </div>
        </div>
        <div>
          <div className="grid mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
            <div className="flex items-center gap-5 md:gap-10">
              <Button className="w-9.5 h-9.5 md:w-12.5 md:h-12.5 rounded-full shadow-lg shadow-[#0000001F] bg-white hover:bg-gray-300/20">
                <Arrow className="stroke-black scale-150" />
              </Button>
              <div className="flex items-center gap-6 md:gap-8.75">
                <Button className="text-[#2196F3] w-fit p-1 hover:bg-transparent bg-transparent text-[16px] md:text-[32px]">1</Button>
                <Button className="text-[#373737] w-fit p-1 hover:bg-transparent bg-transparent text-[16px] md:text-[32px]">2</Button>
                <Button className="text-[#373737] w-fit p-1 hover:bg-transparent bg-transparent text-[16px] md:text-[32px]">3</Button>
                <span className="tet-[16px] md:text-[32px] text-[#373737]">...</span>
                <Button className="text-[#373737] w-fit p-1 hover:bg-transparent bg-transparent text-[16px] md:text-[32px]">7</Button>
              </div>
              <Button className="w-9.5 h-9.5 md:w-12.5 md:h-12.5 rounded-full shadow-lg shadow-[#0000001F] bg-[#2196F3] hover:bg-blue-500">
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