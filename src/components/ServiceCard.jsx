
const ServiceCard = ({imgURL,label,subtext}) => {
  return (
        <div className="flex-1 w-full px-10 py-10 shadow-3xl sm:min-w-[350px] rounded-[20px]">
            <div className="w-11 h-11 flex justify-center rounded-full items-center bg-coral-red">
                <img src={imgURL} alt={label} />
            </div>
            <h3 className="mt-5 font-palanquin leading-normal font-bold ">{label}</h3>
            <p className="mt-3 break-words tex-lg font-montserrat text-slate-gray">{subtext}</p>
        </div>
  )
}

export default ServiceCard