import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { FC } from "react";
import Image from "next/image";

interface HeroProps {
  setContactModal: (value: boolean) => void;
}

const Hero: FC<HeroProps> = ({ setContactModal }) => {
  return (
    <>
      <Image
        src="/bg.webp"
        alt="Zorro - Укладка асфальта любой сложности в Пушкино"
        fill
        sizes="(max-width: 768px) 100vw, 100vw"
        priority
        quality={100}
        className="fixed -z-10 w-full h-full object-cover"
      />

      <section className="p-4 container mx-auto pt-40 flex flex-col justify-center items-center bg-cover bg-center">
        <p className="border rounded-full w-fit px-4 py-1 text-xs sm:text-xl">
          От частного двора до крупных дорожных объектов
        </p>
        <h1 className="text-2xl sm:text-6xl font-bold text-center max-w-4xl my-4 sm:my-6">
          Укладка асфальта любой сложности в Пушкино
        </h1>
        <p className="text-center text-base sm:text-xl">
          Современное оборудование и квалифицированные специалисты
        </p>
        <button
          onClick={() => setContactModal(true)}
          className="bg-primary h-12 sm:h-12 px-4 sm:text-xl rounded-xl text-white w-full sm:w-lg cursor-pointer hover:bg-primary/80 mt-4 sm:mt-6"
        >
          Расчитать стоимость
        </button>
        <Link
          href="https://yandex.ru/maps/-/CHfp54jm"
          target="_blank"
          className="text-sm md:text-base flex items-center justify-center gap-2 mt-6 hover:opacity-50"
        >
          <FaStar className="text-yellow-500" />
          <p className="flex items-center gap-2">
            5,0 <span className="text-desc">87 оценок</span>
          </p>
          <svg
            width="28"
            height="16"
            viewBox="0 0 28 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.593 14.635c.886-.949 3.343-2.48 6.016-.147-1.435 1.592-3.899 2.131-6.016.147z"
              fill="#FC0"
            ></path>
            <path
              d="M19.593 14.635c.886-.949 3.343-2.48 6.016-.147-1.435 1.592-3.899 2.131-6.016.147z"
              fill="url(#8f1e9b14c7a52c4f48c9b529ec8272e8__a)"
            ></path>
            <path
              d="M22.52 12.129c.723-2.305 3.107-3.077 5.027-1.928-.509 1.999-2.89 3.238-5.027 1.928z"
              fill="#FC0"
            ></path>
            <path
              d="M22.52 12.129c.723-2.305 3.107-3.077 5.027-1.928-.509 1.999-2.89 3.238-5.027 1.928z"
              fill="url(#8f1e9b14c7a52c4f48c9b529ec8272e8__b)"
            ></path>
            <path
              d="M24.33 9.17c-.306-2.703 1.432-4.177 3.552-4.044.49 2.38-1.294 4.147-3.551 4.044z"
              fill="#FC0"
            ></path>
            <path
              d="M24.33 9.17c-.306-2.703 1.432-4.177 3.552-4.044.49 2.38-1.294 4.147-3.551 4.044z"
              fill="url(#8f1e9b14c7a52c4f48c9b529ec8272e8__c)"
            ></path>
            <path
              d="M24.476 5.666c-1.525-2.12-1.229-3.942.89-5.467 1.526 2.119 1.23 3.941-.89 5.467z"
              fill="#FC0"
            ></path>
            <path
              d="M24.476 5.666c-1.525-2.12-1.229-3.942.89-5.467 1.526 2.119 1.23 3.941-.89 5.467z"
              fill="url(#8f1e9b14c7a52c4f48c9b529ec8272e8__d)"
            ></path>
            <path
              d="M8.407 14.635c-.886-.949-3.343-2.48-6.016-.147 1.435 1.592 3.899 2.131 6.016.147z"
              fill="#FC0"
            ></path>
            <path
              d="M8.407 14.635c-.886-.949-3.343-2.48-6.016-.147 1.435 1.592 3.899 2.131 6.016.147z"
              fill="url(#8f1e9b14c7a52c4f48c9b529ec8272e8__e)"
            ></path>
            <path
              d="M5.48 12.129C4.756 9.824 2.372 9.052.452 10.2c.509 1.999 2.89 3.238 5.026 1.928z"
              fill="#FC0"
            ></path>
            <path
              d="M5.48 12.129C4.756 9.824 2.372 9.052.452 10.2c.509 1.999 2.89 3.238 5.026 1.928z"
              fill="url(#8f1e9b14c7a52c4f48c9b529ec8272e8__f)"
            ></path>
            <path
              d="M3.67 9.17C3.975 6.467 2.237 4.993.117 5.126c-.49 2.38 1.294 4.147 3.551 4.044z"
              fill="#FC0"
            ></path>
            <path
              d="M3.67 9.17C3.975 6.467 2.237 4.993.117 5.126c-.49 2.38 1.294 4.147 3.551 4.044z"
              fill="url(#8f1e9b14c7a52c4f48c9b529ec8272e8__g)"
            ></path>
            <path
              d="M3.524 5.666c1.525-2.12 1.229-3.942-.89-5.467-1.526 2.119-1.23 3.941.89 5.467z"
              fill="#FC0"
            ></path>
            <path
              d="M3.524 5.666c1.525-2.12 1.229-3.942-.89-5.467-1.526 2.119-1.23 3.941.89 5.467z"
              fill="url(#8f1e9b14c7a52c4f48c9b529ec8272e8__h)"
            ></path>
            <path
              d="M14 .667a6.001 6.001 0 0 0-4.244 10.24c1.086 1.087 3.644 2.66 3.796 4.311.022.247.202.449.448.449s.426-.202.448-.449c.152-1.651 2.707-3.22 3.793-4.307A6.001 6.001 0 0 0 14 .667z"
              fill="url(#8f1e9b14c7a52c4f48c9b529ec8272e8__i)"
            ></path>
            <path
              d="M14 8.72a2.053 2.053 0 1 1 0-4.106 2.053 2.053 0 0 1 0 4.105z"
              fill="#fff"
            ></path>
            <defs>
              <linearGradient
                id="8f1e9b14c7a52c4f48c9b529ec8272e8__a"
                x1="25.59"
                y1="14.697"
                x2="19.587"
                y2="14.925"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FC0"></stop>
                <stop offset="1" stopColor="#FE9B21"></stop>
              </linearGradient>
              <linearGradient
                id="8f1e9b14c7a52c4f48c9b529ec8272e8__b"
                x1="27.541"
                y1="10.207"
                x2="22.634"
                y2="12.445"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FC0"></stop>
                <stop offset="1" stopColor="#FE9B21"></stop>
              </linearGradient>
              <linearGradient
                id="8f1e9b14c7a52c4f48c9b529ec8272e8__c"
                x1="27.809"
                y1="5.072"
                x2="24.649"
                y2="9.444"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FC0"></stop>
                <stop offset="1" stopColor="#FE9B21"></stop>
              </linearGradient>
              <linearGradient
                id="8f1e9b14c7a52c4f48c9b529ec8272e8__d"
                x1="25.319"
                y1=".198"
                x2="24.87"
                y2="5.73"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FC0"></stop>
                <stop offset="1" stopColor="#FE9B21"></stop>
              </linearGradient>
              <linearGradient
                id="8f1e9b14c7a52c4f48c9b529ec8272e8__e"
                x1="2.41"
                y1="14.697"
                x2="8.413"
                y2="14.925"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FC0"></stop>
                <stop offset="1" stopColor="#FE9B21"></stop>
              </linearGradient>
              <linearGradient
                id="8f1e9b14c7a52c4f48c9b529ec8272e8__f"
                x1=".459"
                y1="10.207"
                x2="5.366"
                y2="12.445"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FC0"></stop>
                <stop offset="1" stopColor="#FE9B21"></stop>
              </linearGradient>
              <linearGradient
                id="8f1e9b14c7a52c4f48c9b529ec8272e8__g"
                x1=".191"
                y1="5.072"
                x2="3.351"
                y2="9.444"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FC0"></stop>
                <stop offset="1" stopColor="#FE9B21"></stop>
              </linearGradient>
              <linearGradient
                id="8f1e9b14c7a52c4f48c9b529ec8272e8__h"
                x1="2.681"
                y1=".198"
                x2="3.13"
                y2="5.73"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FC0"></stop>
                <stop offset="1" stopColor="#FE9B21"></stop>
              </linearGradient>
              <linearGradient
                id="8f1e9b14c7a52c4f48c9b529ec8272e8__i"
                x1="14"
                y1=".667"
                x2="14"
                y2="15.667"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF6122"></stop>
                <stop offset="1" stopColor="#F22411"></stop>
              </linearGradient>
            </defs>
          </svg>
        </Link>
      </section>
    </>
  );
};

export default Hero;
