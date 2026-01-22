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
    <div className="relative max-h-dvh">
        <img src="/homebg.jpg" className="object-cover object-top max-h-dvh w-full" alt="" />
        <div className="absolute container flex flex-col gap-8.25 bottom-32.75 left-40 max-w-202.75">
          <h1 className="text-[80px] font-sfprodispay font-medium text-white max-w-136">Next Step Destination</h1>
          <div className="border border-white/37 p-5 rounded-[100px] bg-[#B3B3B32B] backdrop-blur-[34px] w-fit">
            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="shadow-none flex items-center gap-3.25 border-0 bg-transparent hover:bg-transparent" variant="outline">
                    <Global />
                    <span className="flex flex-col items-start text-white text-wrap">
                      <span className="text-[16px]">Location</span>
                      <span className="text-[14px] font-300">Norway</span>
                    </span>
                    <ArrowLineDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
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

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="shadow-none flex items-center gap-3.25 border-0 bg-transparent hover:bg-transparent" variant="outline">
                    <Telescope />
                    <span className="flex flex-col items-start text-white text-wrap">
                      <span className="text-[16px]">Activities</span>
                      <span className="font-300 text-[14px]">hiking</span>
                    </span>
                    <ArrowLineDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
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

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="shadow-none flex items-center gap-3.25 border-0 bg-transparent hover:bg-transparent" variant="outline">
                    <WatchIcon />
                    <span className="flex flex-col items-start text-white text-wrap">
                      <span className="text-[16px]">Duration</span>
                      <span className="text-[14px] font-300">A week</span>
                    </span>
                    <ArrowLineDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
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
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="shadow-none flex items-center gap-3.25 border-0 bg-transparent hover:bg-transparent" variant="outline">
                    <PeopleIcon />
                    <span className="flex flex-col items-start text-white text-wrap">
                      <span>Traveller</span>
                      <span>02</span>
                    </span>
                    <ArrowLineDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
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

              <Button className="w-31 h-12.5 ml-7.5 rounded-[50px] bg-[#2196F3] hover:bg-blue-400 text-[20px] text-white">
                Search
              </Button>        
            </div>
          </div>
          <div className="flex items-center gap-6.25">
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