export default function Header() {
  return (
    <div className="sticky top-0 w-screen grid grid-cols-[auto_1fr_auto] items-center gap-28 p-3 !px-10 bg-white shadow-sm z-20">
      <div className="flex gap-1 items-center">
        <div className="flex justify-center items-center">
          <img src="./logo-1.svg" alt="Side Logo" className="" />
          <img src="./logo.svg" alt="Center Logo" className="-ml-[18px]" />
        </div>

        <h3 className="text-xl font-sans">
          Circle <span className="font-bold">Soft</span>
        </h3>
      </div>

      <div className="relative items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border  border-white rounded-md px-10 py-2 w-full focus:outline-none focus:ring-2 focus:ring-white"
        />
        <img
          src="/search.svg"
          alt="Search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-70"
        />
      </div>

      <div>
        <img src="/notification.svg" alt="Notificarion" width={20} />
      </div>
    </div>
  );
}
