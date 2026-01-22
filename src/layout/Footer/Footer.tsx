import CIcon from "@/icons/cicon"
import InstagramIcon from "@/icons/instagram"
import LinkedinIcon from "@/icons/linkedin"
import TelegramIcon from "@/icons/telegram"
import YoutubeIcon from "@/icons/youtube"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="border-t border-[#F1F1F1]">
      <div className="container">
        <div className="flex pb-31.5 pt-17.5 px-40 justify-between">
          <div className="flex justify-between gap-41.25">
            <div>
              <span className="text-[24px] uppercase font-semibold text-[#3E3E3E]">Main Menu</span>
              <ul className="flex flex-col gap-3 mt-6.75">
                <li>
                  <Link  className="text-[#A5A5A5] text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="">About Us</Link>
                </li>
                <li>
                  <Link className="text-[#A5A5A5] text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="">Countries</Link>
                </li>
                <li>
                  <Link className="text-[#A5A5A5] text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="">Tours</Link>
                </li>
                <li>
                  <Link className="text-[#A5A5A5] text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="">Contact</Link>
                </li>
                <li>
                  <Link className="text-[#A5A5A5] text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="">Pricing</Link>
                </li>
              </ul>
            </div>
            <div>
              <span className="text-[24px] uppercase font-semibold text-[#3E3E3E]">Countries</span>
              <ul className="flex flex-col gap-3 mt-6.75">
                <li>
                  <Link  className="text-[#A5A5A5] text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="">United Kingdom</Link>
                </li>
                <li>
                  <Link className="text-[#A5A5A5] text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="">Italy</Link>
                </li>
                <li>
                  <Link className="text-[#A5A5A5] text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="">Germany</Link>
                </li>
                <li>
                  <Link className="text-[#A5A5A5] text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="">Latvia</Link>
                </li>
                <li>
                  <Link className="text-[#A5A5A5] text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="">USA</Link>
                </li>
                <li>
                  <Link className="text-[#A5A5A5] text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="">New Zealand</Link>
                </li>
                <li>
                  <Link className="text-[#A5A5A5] text-[20px] font-medium duration-200 hover:underline hover:text-[#3E3E3E]" to="">Australia</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-7">
              <span className="text-[#3E3E3E] text-[24px] font-semibold">Contact</span>
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
      <div className=" bg-[#FAFAFA] h-22.5 w-full flex ">
        <div className="container flex h-full">
          <div className="h-full flex items-center justify-between w-full px-40">
            <div className="flex gap-11">
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
            <span className="text-[#C9C9C9] flex items-center gap-1.25 font-medium text-[20px]">
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