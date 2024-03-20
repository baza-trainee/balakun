import { ptsans } from "@/fonts";

export default function ExperienceCard({
  title,
  description,
  name,
  country,
  position,
}) {
  return (
    <div className="p-6 rounded-[48px] border border-red-900 max-w-[489px] min-h-[400px] flex flex-col gap-2">
      <h4 className={`${ptsans.className} font-bold text-xl leading-[120%]`}>
        {title}
      </h4>
      <p className="flex-1 text-black-700 leading-[140%]">{description}</p>
      <div>
        <p className="mt-2 font-semibold">{name}</p>
        <div className="flex mt-2 gap-x-6 text-black-700">
          <p className="relative after:block after:w-2 after:h-2 after:bg-red-900 after:rounded-full after:absolute after:-right-4 after:top-2">
            {country}
          </p>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
}
