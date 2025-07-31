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
    <section id="materials" className="bg-primary/10">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-10 sm:mb-20 flex flex-col justify-center items-center">
          <h2 className="text-center text-xl font-bold sm:text-4xl">
            Сыпучие материалы
          </h2>
          <p className="text-xs sm:text-base mt-4 text-center">
            Доставка по Московской области
          </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-8">
          {materials.map((item, index) => (
            <li
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-black/10 flex flex-col"
            >
              <div className="relative w-full h-24 sm:h-60">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <p className="text-center font-medium mb-4">{item.name}</p>
                <button
                  onClick={() => setContactModal(true)}
                  className="mt-auto cursor-pointer bg-primary text-white w-full h-10 sm:h-12 rounded-xl hover:bg-primary/80 transition-colors"
                >
                  Подробнее
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Materials;
