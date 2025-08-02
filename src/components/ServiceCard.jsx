const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full p-8 rounded-2xl shadow-lg bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up border border-gray-100">
      
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center bg-coral-blue rounded-full shadow-md">
        <img src={imgURL} alt={label} width={28} height={28} />
      </div>

      {/* Label */}
      <h3 className="mt-6 text-2xl font-bold font-palanquin text-gray-800">
        {label}
      </h3>

      {/* Subtext */}
      <p className="mt-3 text-base text-slate-600 font-montserrat leading-relaxed">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
