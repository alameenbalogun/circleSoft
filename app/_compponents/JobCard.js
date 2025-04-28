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
    <div className=" bg-white p-6">
      <div className="flex justify-between">
        <h1 className="font-bold text-[#343434]  text-[12px]" >{title}</h1>
        <div className="flex rounded-full  gap-1 items-center"  style={{ backgroundColor: bgColor }}>
          <img src={icon} alt="Trade Signal" />
          <p className="text-[12px]" style={{ color: color }}>{percentage}%</p>
        </div>
      </div>
      <h1 className="font-extrabold mt-2 text-[#232323]">{number}</h1>
      <p className="text-[#949494] mt-1">{description}</p>
    </div>
  );
}
