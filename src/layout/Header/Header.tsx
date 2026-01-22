import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"

const Header = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true); // user scrolled down
      } else {
        setScrolled(false); // user is at top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed duration-200 top-0 w-full h-39.25 z-500 flex items-start justify-center ${!scrolled? "bg-none backdrop-blur-none": "backdrop-blur-[34px] bg-[#B3B3B32B]"}`}>
      <div className="flex w-full max-w-378 px-40 h-full items-center justify-between">
        <Link to="/">
          <img src="/logo.png" alt="logo" />
        </Link>
        <div>
          <ul className="flex items-center gap-11.25">
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
  )
}

export default Header