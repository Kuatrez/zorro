import Image from "next/image";
import Link from "next/link";
import { IoCall } from "react-icons/io5";
import { RiTelegram2Fill, RiWhatsappFill } from "react-icons/ri";
import { FC } from "react";

const Contacts: FC = () => {
  return (
    <section
      id="contacts"
      className="bg-cover bg-center bg-no-repeat py-12"
      style={{ backgroundImage: "url('/bg-materials.webp')" }}
    >
      <div className="container mx-auto px-4 max-w-xl">
        <div className="mb-10 sm:mb-20 flex flex-col justify-center items-center">
          <h2 className="text-center text-xl font-bold sm:text-4xl text-white drop-shadow">
            Связаться с нами
          </h2>
          <p className="text-xs sm:text-base mt-4 text-center text-white drop-shadow">
            Бесплатная консультация
          </p>
        </div>

        <div className="flex flex-col gap-4 bg-white rounded-xl p-4">
          <div>
            <h3 className="text-center font-semibold text-lg mb-4">
              Обратный звонок
            </h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex items-center h-12 rounded-xl pl-2 border border-black/10 w-full bg-primary/10">
                <Image
                  src="/russia.svg"
                  width={48}
                  height={24}
                  alt="Russia"
                  className="w-8 rounded-sm"
                />
                <span className="text-text ml-3">+7</span>
                <input
                  type="tel"
                  name="phone"
                  className="outline-none ml-2 w-full"
                  placeholder="XXX XXX XX XX"
                  inputMode="numeric"
                  minLength={13}
                  maxLength={13}
                  required
                />
              </div>
              <button className="bg-primary h-12 w-full sm:w-96 rounded-xl text-white hover:bg-primary/80 transition">
                Отправить
              </button>
            </div>
            <p className="text-[10px] sm:text-xs text-center mt-3 text-gray-500">
              Нажимая кнопку, вы соглашаетесь на{" "}
              <Link
                href="/agreement"
                target="_blank"
                className="underline hover:opacity-70"
              >
                обработку персональных данных
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href="tel:+79265003902"
              className="flex justify-center items-center gap-2 text-black bg-black/5 rounded-xl w-full h-12 hover:opacity-70"
            >
              <IoCall className="text-xl" />
              +7 (926) 500-39-02
            </Link>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="https://t.me/your_username"
                target="_blank"
                className="flex justify-center items-center gap-2 bg-sky-500 text-white rounded-xl h-12 hover:bg-sky-600"
              >
                <RiTelegram2Fill className="text-2xl" />
                Telegram
              </Link>
              <Link
                href="https://wa.me/79265003902"
                target="_blank"
                className="flex justify-center items-center gap-2 bg-green-500 text-white rounded-xl h-12 hover:bg-green-600"
              >
                <RiWhatsappFill className="text-2xl" />
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
