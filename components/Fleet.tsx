import Image from "next/image";
import { FC } from "react";

interface Machine {
  name: string;
  image: string;
}

const machines: Machine[] = [
  { name: "Асфальтоукладчик Vogel 1900-2", image: "/fleet/vogel-1900-2.webp" },
  { name: "Каток Hamm HD 110", image: "/fleet/hamm-hd-110.webp" },
  { name: "Каток Hamm GRW 15", image: "/fleet/hamm-grw-15.webp" },
  { name: "Мини погрузчик Bobcat S175", image: "/fleet/bobcat-s175.webp" },
  { name: "Газ 53", image: "/fleet/gaz-53.webp" },
  { name: "Автокран КамАЗ 25 тонн", image: "/fleet/kamaz-crane.webp" },
  { name: "Трактор Беларус МУП + метла", image: "/fleet/belarus-mup.webp" },
  { name: "Самосвалы Daf CF 85", image: "/fleet/daf-cf85.webp" },
  { name: "Тралл 13 м на базе МАЗ", image: "/fleet/maz-trall.webp" },
];

const Fleet: FC = () => {
  return (
    <section id="fleet" className="container mx-auto px-4 py-12">
      <div className="mb-10 sm:mb-20 flex flex-col justify-center items-center">
        <h2 className="text-center text-xl font-bold sm:text-4xl">
          Наша спецтехника
        </h2>
        <p className="text-xs sm:text-base mt-4 text-center">
          Предоставляем в аренду
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {machines.map((machine, index) => (
          <div key={index} className="rounded-xl overflow-hidden">
            <div className="relative w-full h-48 sm:h-52 md:h-60">
              <Image
                src={machine.image}
                alt={"Zorro - Укладка асфальта любой сложности в Пушкино"}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className="py-4 text-sm sm:text-base font-medium">
              {machine.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fleet;
