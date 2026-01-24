import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"

const Header = () => {

  const [scrolled, setScrolled] = useState(false);

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true); 
      } else {
        setScrolled(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div className={`md:hidden absolute z-1000 top-5  px-5 flex items-center justify-between w-full ${isCollapsed? "hidden": "block"}`}>
        <Link className="md:hidden" to="/">
            <img src="/logo.png" alt="logo" />
        </Link>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-white">
          <MenuIcon />
        </button>
      </div>
      <div className={`fixed opacity-0 duration-200 ${isCollapsed? "opacity-100 bg-white/24 md:bg-transparent backdrop-blur-[34px]": "opacity-0"} md:pointer-events-auto md:opacity-100 md:duration-200 top-0 w-full md:h-39.25 z-500 flex items-start justify-center ${!scrolled? "md:bg-none md:backdrop-blur-none": "md:backdrop-blur-[34px] md:bg-[#B3B3B32B]"}`}>
        <div className="flex w-full relative pt-5 md:pt-0 px-5 md:px-40 md:bg-transparent md:backdrop-blur-none  h-full items-center justify-between">
          <button onClick={() => setIsCollapsed(!isCollapsed)} className="absolute md:hidden top-7 right-5 text-white">
            <MenuIcon />
          </button>
          <Link className="hidden md:block" to="/">
            <img src="/logo.png" alt="logo" />
          </Link>
          <div className="py-15 w-full md:w-fit">
            <ul className="flex items-center flex-col md:flex-row gap-7 md:gap-11.25">
              <li>
                <NavLink to="aboutus" className={`text-[18px] text-white ${({ isActive }: { isActive: any}) => isActive? "border-b-4 border-[#2196F3]": ""}`}>About us</NavLink>
              </li>
              <li>
                <NavLink to="countries" className={`text-[18px] text-white ${({ isActive }: { isActive: any}) => isActive? "border-b-4 border-[#2196F3]": ""}`}>Countries</NavLink>
              </li>
              <li>
                <NavLink to="tours" className={`text-[18px] text-white ${({ isActive }: { isActive: any}) => isActive? "border-b-4 border-[#2196F3]": ""}`}>Tours</NavLink>
              </li>
              <li>
                <NavLink to="contact" className={`text-[18px] text-white ${({ isActive }: { isActive: any}) => isActive? "border-b-4 border-[#2196F3]": ""}`}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header