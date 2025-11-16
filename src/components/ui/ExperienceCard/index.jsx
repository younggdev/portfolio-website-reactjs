import { formatDate } from "../../../services/about-service";

function ExperienceCard({ item }) {
  return (
    <div className="border-2 border-gray bg-bg rounded-lg p-5 flex max-sm:flex-col gap-5 items-center my-5">
      <img
        src={item.image_url}
        alt="logo instansi"
        className="w-20 rounded-xl"
      />
      <div>
        <h3>{item.name}</h3>
        <div className="flex max-md:flex-col gap-3 max-md:gap-1 text-sm text-gray my-2">
          <p className="text-stone-200">{item.position}</p>
          <span className="max-md:hidden">&bull;</span>
          <p className="max-md:text-xs">{item.type}</p>
          <span className="max-md:hidden">&bull;</span>
          <p className="max-md:text-xs">{item.place}</p>
        </div>
        <p className="text-sm text-stone-300">
          {formatDate(item.start_date)} - {formatDate(item.end_date)}
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;
