export default function DropdownSelect({ options = [], className = "" }) {
  return (
    <div className={`max-w-sm ${className}`}>
      <select id="offices" className="border border-gray-300 rounded-lg ">
        <option>{options}</option>
      </select>
    </div>
  );
}
