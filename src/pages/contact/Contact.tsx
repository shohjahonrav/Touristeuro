import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
  return (
    <div className="h-dvh relative">
      <img src="/assistancebg.jpg" className="w-full h-full object-cover" alt="" />
      <div className="absolute top-1/2 rounded-3xl left-1/2 -translate-y-1/2 border -translate-x-1/2 bg-[#B3B3B32B] p-7.5 border-white/37 backdrop-blur-[34px]">
        <span className="text-[32px] font-medium text-white">Get More Info</span>
        <p className="text-[16px] text-white max-w-93.75">Our team would love to here from you. Write your message to us!</p>
        <div className="flex flex-col gap-3.75 w-full">
          <div className="grid grid-cols-2 gap-5.25">
            <div>
              <label htmlFor="name" className="text-white text-[14px] font-medium">Name</label>
              <Input id="name" className="h-13.25 max-w-56.5 w-full rounded-3xl" />
            </div>
            <div>
              <label htmlFor="number" className="text-white text-[14px] font-medium">Name</label>
              <Input id="number" className="h-13.25 max-w-56.5 w-full rounded-3xl" />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="message" className="text-white text-[14px] font-medium">Message</label>
            <Textarea id="number" className="h-13.25 min-h-25.75 w-full rounded-3xl" />
          </div>
        </div>
        <Button className="w-full h-14.75 rounded-[10px] text-white text-[24px] font-medium mt-6.25 bg-[#2196F3] hover:bg-blue-500">
          Send now
        </Button>
      </div>
    </div>
  )
}

export default Contact