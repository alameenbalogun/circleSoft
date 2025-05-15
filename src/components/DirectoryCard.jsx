import { FaEnvelope } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import Image from "next/image";

export default function DirectoryCard({ name, role, email, phone, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md py-4 px-3 flex flex-col items-center text-center">
      <div className="w-20 h-20 mb-1 relative">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h2 className="font-semibold text-lg">{name}</h2>
      <p className="text-sm text-gray-600">{role}</p>

      <hr className="my-3 w-[70%] h-[1px] mx-auto border-none block !bg-gray-300" />

      <div className="mt-2 text-sm text-gray-500 space-y-2">
        <a
          href={`mailto:${email}`}
      className="flex items-center gap-2 justify-center !text-gray-400 !hover:text-gray-400 !hover:no-underline cursor-pointer"
        >
          <FaEnvelope className="text-gray-400" />
          <span>{email}</span>
        </a>
        <a
          href={`tel:${phone}`}
          className="flex items-center gap-2 justify-center !text-gray-400 !hover:text-gray-400 !hover:no-underline cursor-pointer"
        >
          <BsTelephone className="text-gray-400" />
          <span>{phone}</span>
        </a>
      </div>
    </div>
  );
}
