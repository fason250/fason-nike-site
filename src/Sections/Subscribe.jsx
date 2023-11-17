import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center gap-10 max-lg:flex-col" id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:max-w-md  font-bold">Sign Up from <span className="text-coral-red"> Updates</span> & Newsletter </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray sm:rounded-full ">
        <input type="text" placeholder="subscribe@fasonNike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full ">
          <Button text="Sign Up" fullWidth/>
        </div>
      </div>


    </section>
  )
}

export default Subscribe