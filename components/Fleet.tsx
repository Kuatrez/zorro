import Image from "next/image";
import { FC } from "react";

interface Machine {
  name: string;
  image: string;
}

interface FleetProps {
  setContactModal: (value: boolean) => void;
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

const Fleet: FC<FleetProps> = ({ setContactModal }) => {
  return (
    <section id="fleet" className="container mx-auto px-4 py-12">
      <div className="mb-10 sm:mb-20 flex flex-col justify-center items-center">
        <h2 className="text-center text-xl font-bold sm:text-4xl">
          Наша спецтехника
        </h2>
        <p className="sm:text-base mt-4 text-center">Предоставляем в аренду</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
        {machines.map((machine, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden bg-primary/10 p-2 sm:p-4"
          >
            <div className="relative w-full h-48 sm:h-52 md:h-60">
              <Image
                src={machine.image}
                alt={"Zorro - Укладка асфальта любой сложности в Пушкино"}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="text-sm sm:text-base font-medium h-16 flex justify-start items-center">
              {machine.name}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => setContactModal(true)}
          className="bg-primary h-12 sm:h-12 px-4 sm:text-xl rounded-xl text-white w-full sm:w-lg cursor-pointer hover:bg-primary/80 mt-4 sm:mt-6"
        >
          Подробнее
        </button>
      </div>
    </section>
  );
};

export default Fleet;
