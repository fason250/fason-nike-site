import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex  items-center justify-between text-center max-lg:flex-col w-full max-container">
      <div className=" flex flex-col flex-1 ">
        <h2 className="font-palanquin capitalize text-4xl lg:max-lg font-bold">We Provide You <span className="text-coral-red">Super</span> <span className="text-coral-red">Quality</span> Shoes</h2>
          <p className="mt-4 lg:max-w-lg info-text">Ensuring Premium comfort and style, Our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance</p>
          <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
          <div className="mt-11">
            <Button text="View Details"  />
          </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoes 8" width={570} height={522} className="object-contain"/>
      </div>
      
    </section>
  )
}

export default SuperQuality