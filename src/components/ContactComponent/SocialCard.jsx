export default function SocialCard({
  title,
  desc,
  gradientColor,
  bgColor,
  borderColor,
  text,
  link,
}) {
  return (
    <div
      className={`relative max-md:col-span-1 bg-gradient-to-b ${gradientColor} py-5 px-6 rounded-sm`}
    >
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs py-4">{desc}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`py-2 px-4 ${bgColor} inline-block max-md:block max-md:mr-18 rounded-sm text-sm text-black hover:scale-105 transition-all duration-200`}
        >
          <div className="flex gap-2 items-center justify-center">
            <p className="text-sm capitalize">Go to {text}</p>
            <i className="ri-arrow-right-up-fill"></i>
          </div>
        </a>
      </div>
      <div
        className={`px-0.5 border-4 ${borderColor} rounded-xl absolute bottom-5 right-5`}
      >
        <i className={`ri-${text}-fill text-4xl text-white`}></i>
      </div>
    </div>
  );
}
