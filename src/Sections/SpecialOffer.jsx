import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex  justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer images" width={773} height={687} className="object-contain w-full" />
      </div>

      <div className=" flex flex-col flex-1 ">
        <h2 className="font-palanquin capitalize text-4xl lg:max-lg font-bold"><span className="text-coral-red">Special</span>  Offer</h2>
          <p className="mt-4 lg:max-w-lg info-text">Embark on a shopping your journey that redefines your experiences with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets use apart.</p>
          <p className="mt-6 lg:max-w-lg info-text">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button text="Shop now" iconUrl={arrowRight}  />
            <Button text="Learn more" backgroundColor="bg-white" borderColor="border border-slate-gray" textColor="text-slate-gray" />
          </div>
        </div>
    </section>
  )
}

export default SpecialOffer