import ArrowLineDown from "@/icons/arrowlinedown"
import CIcon from "@/icons/cicon"
import InstagramIcon from "@/icons/instagram"
import LinkedinIcon from "@/icons/linkedin"
import TelegramIcon from "@/icons/telegram"
import YoutubeIcon from "@/icons/youtube"
import { useState } from "react"
import { Link } from "react-router-dom"

const Footer = () => {

  const [isActive, setIsActive] = useState< "menu" | "countries" | "contact" | "">("")

  return (
    <div className="border-t  border-[#F1F1F1]">
      <div className="md:container m-auto p-0">
        <div className="flex flex-col md:flex-row flex-wrap md:pb-31.5 pt-17.5 md:px-40 justify-between">
          <div className="flex justify-between lg:w-[50%] flex-col lg:flex-row md:gap-1.25">
            <div className={`bg-[#F3F6FF] overflow-hidden duration-300 md:bg-transparent md:max-h-none w-full ${isActive === "menu" ? "max-h-70": "max-h-15"}`}> 
              <div className="px-5 md:px-0 bg-white mt-1 md:mt-0 h-15 w-full md:h-fit md:w-fit flex items-center justify-between">
                <span className="text-[20px] md:text-[24px] uppercase  font-semibold text-[#3E3E3E]">Main Menu</span>
                <button className="md:hidden" onClick={() => setIsActive(isActive === "menu"? "": "menu")}>
                  <ArrowLineDown className={`stroke-[#171717] duration-200 ${isActive === "menu"? "rotate-180": "rotate-0"}`} />
                </button>
              </div>
              <ul className="flex flex-col px-5 md:px-0 gap-3 py-3.75 md:mt-6.75">
                <li>
                  <Link className="text-[#A5A5A5] text-[16px] md:text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="aboutus">About Us</Link>
                </li>
                <li>
                  <Link className="text-[#A5A5A5] text-[16px] md:text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="countries">Countries</Link>
                </li>
                <li>
                  <Link className="text-[#A5A5A5] text-[16px] md:text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="tours">Tours</Link>
                </li>
                <li>
                  <Link className="text-[#A5A5A5] text-[16px] md:text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className={`bg-[#F3F6FF] overflow-hidden duration-300 md:max-h-none md:bg-transparent w-full ${isActive === "countries" ? "max-h-100": "max-h-15"}`}> 
              <div className="px-5 md:px-0 bg-white mt-1 md:mt-0 h-15 w-full md:h-fit md:w-fit flex items-center justify-between">
                <span className="text-[20px] md:text-[24px] uppercase  font-semibold text-[#3E3E3E]">Countries</span>
                <button className="md:hidden" onClick={() => setIsActive(isActive === "countries"? "": "countries")}>
                  <ArrowLineDown className={`stroke-[#171717] duration-200 ${isActive === "countries"? "rotate-180": "rotate-0"}`} />
                </button>
              </div>
              <ul className="flex flex-col px-5 md:px-0 gap-3 py-3.75 md:mt-6.75">
                <li>
                  <Link  className="text-[#A5A5A5] text-[16px] md:text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="">About Us</Link>
                </li>
                <li>
                  <Link className="text-[#A5A5A5] text-[16px] md:text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="">Countries</Link>
                </li>
                <li>
                  <Link className="text-[#A5A5A5] text-[16px] md:text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="">Tours</Link>
                </li>
                <li>
                  <Link className="text-[#A5A5A5] text-[16px] md:text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="">Contact</Link>
                </li>
                <li>
                  <Link className="text-[#A5A5A5] text-[16px] md:text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="">Pricing</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className={`bg-[#F3F6FF] overflow-hidden duration-300 md:max-h-none md:bg-transparent w-full ${isActive === "contact" ? "max-h-70": "max-h-15"}`}> 
              <div className="px-5 md:px-0 bg-white mt-1 md:mt-0 h-15 w-full md:h-fit md:w-fit flex items-center justify-between">
                <span className="text-[20px] md:text-[24px] uppercase  font-semibold text-[#3E3E3E]">Contact</span>
                <button className="md:hidden" onClick={() => setIsActive(isActive === "contact"? "": "contact")}>
                  <ArrowLineDown className={`stroke-[#171717] duration-200 ${isActive === "contact"? "rotate-180": "rotate-0"}`} />
                </button>
              </div>
              <div className="px-5 md:px-0 py-3.75 flex flex-col gap-2">
                <span className="text-[#3E3E3E] text-[20px] font-medium">+998 77 777 77 77</span>
                <span className="text-[18px] max-w-66 text-[#3E3E3E] font-medium">
                  Turis Consulting Agency
                  Katta Hirmontepa 4B
                  100 000 Tashkent
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#FAFAFA] h-16.25 md:h-22.5 w-full flex ">
        <div className="container flex h-full">
          <div className="h-full flex items-center  justify-center md:justify-between w-full md:px-40">
            <div className="hidden md:flex gap-11">
              <a href="">
                <TelegramIcon />
              </a>
              <a href="">
                <InstagramIcon />
              </a>
              <a href="">
                <YoutubeIcon />
              </a>
              <a href="">
                <LinkedinIcon />
              </a>
            </div>
            <span className="text-[#C9C9C9] flex items-center gap-1.25 font-medium text-[14px] md:text-[20px]">
              <CIcon />
              2025 Travelloop Consulting Agency
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer