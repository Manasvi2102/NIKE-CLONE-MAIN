import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price }) => {
  return <>
    <div className="bg-gray/20 backdrop-blur-md rounded-2xl shadow-lg p-4 transition hover:shadow-xl hover:scale-[1.05] hover:bg-white/90">
      <div className=" bg-gradient-to-l from-teal-100 to-slate-300 rounded">
        <img src={imgURL} alt={name} className='w-[280px] h-[280px] object-contain' fil />
      </div>
      <div className="mt-8 flex flex-col justify-start gap-0.5">
        <div className="flex items-center gap-2">
          <img src={star} alt="rating" width={24} height={24} />
          <p className=" font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
        </div>
        <h3 className="mt-1 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
        <p className="mt-1 font-semibold font-montserrat text-coral-blue text-2xl leading-normal">{price}</p>
      </div>
    </div>
  </>
}

export default PopularProductCard