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
    <div className=" bg-white p-4 2xl:p-6 rounded-[6px] border-2 border-[#ECEEF6] ">
      <div className="flex justify-between">
        <h1 className="font-bold text-[#343434] text-[12px]  2xl:text-[16px] tracking-[1%]" >{title}</h1>
        <div className="flex rounded-full py-[3px] px-[4px] gap-[3px] items-center"  style={{ backgroundColor: bgColor }}>
          <img src={icon} alt="Trade Signal" />
          <p className="text-[12px]" style={{ color: color }}>{percentage}.0%</p>
        </div>
      </div>
      <h1 className="font-extrabold  text-[#232323] md:text-[14px] lg:text-[18px] xl:text-[28px]">{number}</h1>
      <p className="text-[#949494] text-sm tracking-[1%]">{description}</p>
    </div>
  );
}
