"use client";
import { FaEnvelope } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import Image from "next/image";
import PageLayout from "@/src/components/PageLayout";

export default function Page() {
  const cardData = [
    {
      name: "Angeline Beier",
      role: "Finance Manager",
      email: "angeline@gmail.com",
      phone: "0978412176",
      image: "/gavano.svg",
    },
    {
      name: "Alfredo George",
      role: "HR Manager",
      email: "george@gmail.com",
      phone: "089318298493",
      image: "/gavano.svg",
    },
    {
      name: "Davis Levin",
      role: "IT Helpdesk",
      email: "davis@gmail.com",
      phone: "089318298493",
      image: "/gavano.svg",
    },
    {
      name: "Carla Workman",
      role: "IT Manager",
      email: "carla@gmail.com",
      phone: "089318298493",
      image: "/gavano.svg",
    },
    {
      name: "Rayna Calzoni",
      role: "HR Specialist",
      email: "rayna@gmail.com",
      phone: "089318298493",
      image: "/gavano.svg",
    },
    {
      name: "Miracle Geidt",
      role: "Finance Specialist",
      email: "miracle@gmail.com",
      phone: "089318298493",
      image: "/gavano.svg",
    },
    {
      name: "Haylie Herwitz",
      role: "Account Manager",
      email: "haylie@gmail.com",
      phone: "089318298493",
      image: "/gavano.svg",
    },
    {
      name: "Omar Calzoni",
      role: "Admin Manager",
      email: "omar@gmail.com",
      phone: "089318298493",
      image: "/gavano.svg",
    },
    {
      name: "Omar Lipshutz",
      role: "Account Executive",
      email: "omar2@gmail.com",
      phone: "089318298493",
      image: "/gavano.svg",
    },
    {
      name: "Kierra Levin",
      role: "Account Executive",
      email: "kierra@gmail.com",
      phone: "089318298493",
      image: "/gavano.svg",
    },
    {
      name: "Roger Saris",
      role: "Account Executive",
      email: "roger@gmail.com",
      phone: "089318298493",
      image: "/gavano.svg",
    },
    {
      name: "Phillip Press",
      role: "HR Specialist",
      email: "phillip@gmail.com",
      phone: "089318298493",
      image: "/gavano.svg",
    },
  ];

  return (
    <PageLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-1">Directory</h1>
        <p className="text-sm text-gray-500 mb-6">This is director board</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 mb-3 relative">
                <Image
                  src={card.image}
                  alt={card.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>

              <h2 className="font-semibold text-lg">{card.name}</h2>
              <p className="text-sm text-gray-600">{card.role}</p>

              <hr className="my-3 w-[70%] h-[2px] bg-gray-300 mx-auto border-0" />

              <div className="mt-2 text-sm text-gray-500 space-y-1">
                <p className="flex text-black items-center gap-2 justify-center">
                  <FaEnvelope className="text-gray-400" />
                  {card.email}
                </p>
                <p className="flex text-black items-center gap-2 justify-center">
                  <BsTelephone className="text-gray-400" />
                  {card.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
