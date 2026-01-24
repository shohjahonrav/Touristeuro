import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import Global from "@/icons/global"
import ArrowLineDown from "@/icons/arrowlinedown"
import Telescope from "@/icons/telescope"
import WatchIcon from "@/icons/watch"
import PeopleIcon from "@/icons/people"
import Arrow from "@/icons/arrow"


const Hero = () => {
  return (
    <div className="relative h-dvh">
        <img src="/homebg.jpg" className="object-cover object-top h-full w-full" alt="" />
        <div className="absolute flex max-w-200 md:max-w-none w-full px-5 flex-col gap-5 md:gap-8.25 bottom-12.5 md:bottom-32.75 md:left-10 lg:left-40 md:w-fit">
          <h1 className="text-[48px] md:text-[80px] font-sfprodispay font-medium text-white max-w-59.25 md:max-w-136">Next Step Destination</h1>
          <div className="border border-white/37 p-5 md:p-0 rounded-3xl md:rounded-[100px] bg-[#B3B3B32B] backdrop-blur-[34px] w-full md:w-fit">
            <div className="flex items-center gap-3.75  w-full p-6.25 flex-col md:flex-row">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="shadow-none w-full md:w-fit justify-between flex items-center gap-3.25 border-0 bg-transparent hover:bg-transparent" variant="outline">
                    <div className="flex items-center gap-3.25">
                      <Global />
                      <span className="flex flex-col items-start text-white text-wrap">
                        <span className="text-[16px]">Location</span>
                        <span className="text-[14px] font-300">Norway</span>
                      </span>
                    </div>
                    <ArrowLineDown className="stroke-white" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-70">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <hr  className="w-full border-white/37"/>
            
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="shadow-none flex items-center justify-between md:w-fit w-full gap-3.25 border-0 bg-transparent hover:bg-transparent" variant="outline">
                    <div className="flex gap-3.25 items-center">
                      <Telescope />
                      <span className="flex flex-col items-start text-white text-wrap">
                        <span className="text-[16px]">Activities</span>
                        <span className="font-300 text-[14px]">hiking</span>
                      </span>
                    </div>
                    <ArrowLineDown className="stroke-white" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-70">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <hr  className="w-full border-white/37"/>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="shadow-none flex w-full md:w-fit justify-between items-center gap-3.25 border-0 bg-transparent hover:bg-transparent" variant="outline">
                    <div className="flex gap-3.25 items-center">
                      <WatchIcon />
                      <span className="flex flex-col items-start text-white text-wrap">
                        <span className="text-[16px]">Duration</span>
                        <span className="text-[14px] font-300">A week</span>
                      </span>
                    </div>
                    <ArrowLineDown className="stroke-white" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-70">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <hr  className="w-full border-white/37"/>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="shadow-none flex items-center w-full md:w-fit justify-between gap-3.25 border-0 bg-transparent hover:bg-transparent" variant="outline">
                    <div className="flex gap-3.25 items-center">
                      <PeopleIcon />
                      <span className="flex flex-col items-start text-white text-wrap">
                        <span>Traveller</span>
                        <span>02</span>
                      </span>
                    </div>
                    <ArrowLineDown className="stroke-white" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-70">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button className="w-full md:w-31 h-12.5 md:ml-7.5 mt-2.5 rounded-[50px] bg-[#2196F3] hover:bg-blue-400 text-[20px] text-white">
                Search
              </Button>        
            </div>
          </div>
          <div className="md:flex items-center gap-6.25 hidden">
            <Button className="flex items-center text-[20px] font-medium gap-2.5 bg-transparent px-5 py-2.5 border border-white rounded-[30px] hover:bg-white/20 duration-200">
              Tour Guide 
              <Arrow className="stroke-white rotate-180 scale-130" />
            </Button>
            <Button className="flex items-center text-[20px] font-medium gap-2.5 bg-transparent px-5 py-2.5 border border-white rounded-[30px] hover:bg-white/20 duration-200">
              Travel Packages
              <Arrow className="stroke-white rotate-180 scale-130" />
            </Button>
            <Button className="flex items-center text-[20px] font-medium gap-2.5 bg-transparent px-5 py-2.5 border border-white rounded-[30px] hover:bg-white/20 duration-200">
              Transportation
              <Arrow className="stroke-white rotate-180 scale-130" />
            </Button>
          </div>
        </div>
      </div>


  )
}

export default Hero