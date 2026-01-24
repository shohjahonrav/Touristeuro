import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Arrow from "@/icons/arrow"
import SearchIcon from "@/icons/searchIcon"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



const cards = [
  {id: 1, activity_name: "Amazonka", country: "Brazil", img_url: "/amazonka.jpg"},
  {id: 2, activity_name: "surfing", country: "australia", img_url: "/surfing.jpg"},
  {id: 3, activity_name: "sahara", country: "morocco", img_url: "/sahara.jpg"},
  {id: 4, activity_name: "camping", country: "canada", img_url: "/camping.jpg"},
  {id: 5, activity_name: "pro biking", country: "poland", img_url: "/biking.jpg"},
  {id: 6, activity_name: "mountain climbing", country: "USA", img_url: "/climbing.jpg"}
]

const Tours = () => {
  return (
    <div>
      <section>
        <div className="h-dvh w-full overflow-clip">
          <Carousel className="relative h-screen w-screen">
            <CarouselContent>
              {
                cards.map(card => (
                  <CarouselItem className="relative w-sceen h-full ">
                    <img src={card.img_url} className="w-screen h-screen object-cover" alt="" />
                    <div className="md: container absolute flex justify-between bottom-10 md:bottom-18.25 w-full md:px-0 left-1/2 -translate-x-1/2">
                      <span className="text-white uppercase text-[48px] md:text-[128px] ml-5 md:ml-36 font-medium">{card.activity_name}</span>
                    </div>
                  </CarouselItem>
                ))
              }
            </CarouselContent>
              <div className=" absolute z-500 bottom-20  md:bottom-35 md:w-10 right-20 md:right-50 flex items-center">
                <CarouselPrevious className="border-white border bg-transparent stroke-white text-white w-9.5 h-9.5 md:h-12.5 md:w-12.5" />
                <CarouselNext className="border-white border bg-transparent stroke-white text-white w-9.5 h-9.5 md:h-12.5 md:w-12.5"/>
              </div>
          </Carousel>
        </div>
      </section>
      <section className="container">
        <div className="py-7.5 md:pt-20 md:px-20 lg:px-40 md:pb-25 flex flex-col gap-7.5 md:gap-20">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
            {
              cards.map((card) => (
                <div key={card.id} className="max-h-125 h-125 relative w-full">
                  <img src={card.img_url} className="w-full h-full object-cover rounded-3xl" alt="card" />
                  <div className="absolute bottom-0 left-0 w-full flex justify-center flex-col items-center pb-10">
                    <span className="text-white text-[24px] md:text-[32px] uppercase">{card.activity_name}</span>            
                    <span className="text-white text-[12px] md:text-[14px] uppercase border-b-2 border-white">{card.country}</span>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="mt-2.5 flex items-center justify-center">
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

export default Tours