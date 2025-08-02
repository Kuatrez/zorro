"use client";

import { FC } from "react";
import Image from "next/image";

interface MaterialsProps {
  setContactModal: (value: boolean) => void;
}

const materials = [
  { name: "Щебень", image: "/materials/sheben.webp" },
  { name: "Песок", image: "/materials/pesok.webp" },
  { name: "Асфальтная крошка", image: "/materials/kroshka.webp" },
  { name: "Грунт", image: "/materials/grunt.webp" },
];

const Materials: FC<MaterialsProps> = ({ setContactModal }) => {
  return (
    <section
      id="materials"
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg-materials.webp')" }}
    >
      <div className="">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-10 sm:mb-20 flex flex-col justify-center items-center">
            <h2 className="text-center text-xl font-bold sm:text-4xl text-white drop-shadow">
              Сыпучие материалы
            </h2>
            <p className="text-xs sm:text-base mt-4 text-center text-white drop-shadow">
              Доставка по Московской области
            </p>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-8">
            {materials.map((item, index) => (
              <li
                key={index}
                className="backdrop-blur-md rounded-xl overflow-hidden border bg-black/10 border-white/30 flex flex-col"
              >
                <div className="relative w-full h-32 sm:h-60">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2 flex flex-col flex-grow">
                  <p className="text-center text-white font-medium mb-4">
                    {item.name}
                  </p>
                  <button
                    onClick={() => setContactModal(true)}
                    className="mt-auto cursor-pointer bg-primary text-white w-full h-10 sm:h-12 rounded-lg hover:bg-primary/80 transition-colors"
                  >
                    Подробнее
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Materials;
