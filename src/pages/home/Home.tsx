import Assistance from "@/components/Assistance"
import Destinations from "@/components/Destinations"
import Hero from "@/components/Hero"
import NewListings from "@/components/NewListings"
import Services from "@/components/Services"
import TravelAbout from "@/components/TravelAbout"

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>  
      <section className="container">
        <Destinations />
      </section>
      <section>
        <TravelAbout />
      </section>
      <section className="container">
        <NewListings />
      </section>
      <section className="bg-[#F3F6FF]">
        <Services />
      </section>
      <section>
        <Assistance />
      </section>
    </div>
  )
}

export default Home