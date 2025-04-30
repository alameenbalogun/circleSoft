export default function JobCard({
  title,
  percentage,
  number,
  description,
  icon,
  color = "#0B8A00",
  bgColor = "#23C10A26",
}) {
  return (
    <div className=" bg-white p-4 xl:p-6 rounded shadow-md flex flex-col items-stretch justify-between !h-20 md:!h-28 lg:!h-32 xl:!h-40 ">
      <div className="flex justify-between">
        <h1 className="font-bold text-[#343434] text-[12px] xl:text-base tracking-[1%]">
          {title}
        </h1>
        <div
          className="flex rounded-full py-[3px] px-[4px] gap-[3px] items-center"
          style={{ backgroundColor: bgColor }}
        >
          <img src={icon} alt="Trade Signal" />
          <p className="text-[12px]" style={{ color: color }}>
            {percentage}.0%
          </p>
        </div>
      </div>
      <h1 className="font-extrabold  text-[#232323] text-sm lg:text-lg xl:!text-4xl">
        {number}
      </h1>
      <p className="text-[#949494] text-sm tracking-[1%]">{description}</p>
    </div>
  );
}
