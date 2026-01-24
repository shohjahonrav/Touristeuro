const carts = [
  {id: 1, title: "Portfolio Diagnostics", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
  {id: 2, title: "Building new Portfolio", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
  {id: 3, title: "Tour Planning", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
  {id: 4, title: "Visa Application", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
]

const Services = () => {
  return (
    <div className="container">
      <div className="py-15 md:py-25.5 md:px-36">
        <span className="text-[#2196F3] text-[28px]  md:text-[48px] font-medium">Services</span>
        <div className="mt-7.5 md:mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {
            carts.map((cart, index) => (
              <div className="bg-white h-88.75 rounded-3xl flex flex-col justify-between p-6.25">
                <div className="flex flex-col gap-4.5">
                  <span className="text-[32px] text-[#B7CFE2]">{cart.title}</span>
                  <p className="text-[18px] text-[#C2C2C2]">{cart.body}</p>
                </div>
                <div className="flex justify-end">
                  <span className="font-semibold text-[40px] text-[#B7CFE2]">{index < 10? `0${index+1}`: index+1}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Services