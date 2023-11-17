import Button from "../components/Button"
import arrowRight from '../assets/icons/arrow-right.svg'
import { statistics } from "../constants"
import { bigShoe1} from "../assets/images"
import { shoes } from "../constants"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"


const Hero = () => {
  const [bigShoeImg,setBigShoeImg] = useState(bigShoe1)

  return (
    <section id="home" className="w-full p-2 flex xl:flex-row justify-center flex-col min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"><span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span><br /><span className="text-coral-red inline-block mt-3">Nike</span> Shoes</h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button text="Show now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {
            statistics.map((statistic)=>(
              <div key={statistic.label}>
                <p className="text-4xl font-palanquin font-bold">{statistic.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray ">{statistic.label}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center">
        <img 
        src={bigShoeImg} 
        alt="big shoes hero" 
        width={610} 
        height={500} 
        className="object-contain relative z-9"
        />
        <div className="flex sm:gap-6  absolute -bottom-[5%] max-sm:px-6">
          {shoes.map((shoe)=>(
            <div key={shoe}>
              <ShoeCard shoesImg={shoe} changeBigShoeImage={(shoe)=>{setBigShoeImg(shoe)}} bigShoeImg={bigShoeImg}/>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero