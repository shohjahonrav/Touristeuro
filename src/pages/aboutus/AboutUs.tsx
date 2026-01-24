import Services from "@/components/Services"

const AboutUs = () => {
  return (
    <div>
      <section>
        <div className="h-dvh">
          <img src="/aboutus.jpg" className="w-full h-full object-cover" alt="" />
        </div>
      </section>
      <section className="container">
        <div className="md:px-40 pt-7.5 md:pt-20 pb-12.5 md:pb-25 flex flex-col gap-3.75 md:gap-7.5">
          <span className="text-[24px] md:text-[48px] text-[#373737] font-medium">About Us</span>
          <p className="text-[20px] text-[#373737]">We are a passionate tour company dedicated to creating smooth, inspiring, and unforgettable travel experiences. Our goal is to make every journey stress-free by offering carefully planned tours, personalized service, and reliable support from start to finish. We work with trusted partners worldwide to ensure high standards of comfort, safety, and quality, whether you are traveling for leisure, culture, or adventure. We believe travel is more than visiting new destinations—it is about discovering new cultures, gaining fresh perspectives, and creating lasting memories. No matter if you travel alone, with family, or in a group, we are here to guide you at every step and turn your travel plans into meaningful experiences.</p>
        </div>
      </section>
      <section className="bg-[#F3F6FF]">
        <Services />
      </section>
      <section className="container">
        <div className="md:px-40 pt-12.5 md:pt-25 pb-12.5 md:pb-31.25">
          <span className="text-[24px] md:text-[48px] text-[#373737] font-medium">Team</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6.5 md:mt-13">
            <div className="h-116">
              <img src="/team1.jpg" className="w-full object-cover rounded-3xl h-full" alt="team" />
            </div>
            <div className="h-116">
              <img src="/team2.jpg" className="w-full object-cover rounded-3xl h-full" alt="team" />
            </div>
            <div className="h-116">
              <img src="/team3.jpg" className="w-full object-cover rounded-3xl h-full" alt="team" />
            </div>  
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs