import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="relative group max-w-sm w-full rounded-3xl border border-gray-200 bg-white backdrop-blur-md p-8 shadow-md transition-all duration-500 hover:shadow-lg hover:scale-[1.02] animate-fade-in-up">

      {/* Avatar */}
      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
        <img
          src={imgURL}
          alt="customer"
          className="w-24 h-24 rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Text Content */}
      <div className="mt-16 text-center px-2">
        <p className="text-gray-700 font-montserrat leading-relaxed text-base italic">
          “{feedback}”
        </p>

        <div className="mt-4 flex justify-center items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={star}
                alt="star"
                width={20}
                height={20}
                className="object-contain"
              />
            ))}
          </div>
          <span className="text-slate-600 text-sm font-medium">({rating})</span>
        </div>

        <h3 className="mt-3 text-xl font-bold font-palanquin text-gray-900 tracking-wide">
          {customerName}
        </h3>
      </div>
    </div>
  );
};

export default ReviewCard;
