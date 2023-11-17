
const ShoeCard = ({shoesImg,changeBigShoeImage,bigShoeImg}) => {

    const handleClick = ()=>{
        if(bigShoeImg !== shoesImg.bigShoe){
            changeBigShoeImage(shoesImg.bigShoe)
        }
    }

  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === shoesImg.bigShoe ? 'border-coral-red':'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handleClick}>
        <div className="flex justify-center items-center bg-slate-300 bg-center bg-cover sm:w-40 sm:h-40   rounded-xl max-sm:p-4">
            <img src={shoesImg.thumbnail} alt="shoe list" width={137} height={103} />
        </div>

         
    </div>
  )
}

export default ShoeCard