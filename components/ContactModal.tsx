import Image from "next/image";
import Link from "next/link";
import { IoClose, IoCall } from "react-icons/io5";
import { RiTelegram2Fill, RiWhatsappFill } from "react-icons/ri";
import { FC } from "react";

interface ContactModalProps {
  setContactModal: (value: boolean) => void;
}

const ContactModal: FC<ContactModalProps> = ({ setContactModal }) => {
  return (
    <section className="fixed w-screen h-screen left-0 top-0 flex justify-center items-center bg-black/50 z-50 p-4">
      <div className="flex flex-col justify-center items-center bg-white rounded-xl max-w-md w-full mb-20">
        <div className="p-4 flex justify-between items-center w-full border-b border-black/10">
          <p>Способ связи</p>
          <button onClick={() => setContactModal(false)}>
            <IoClose className="text-2xl cursor-pointer hover:opacity-50" />
          </button>
        </div>
        <div className="p-4 w-full border-b border-black/10">
          <h2 className="text-center font-bold my-4 mb-8">
            Заказать обратный звонок
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center h-12 rounded-xl bg-primary/10 pl-2 outline-none border border-black/10 w-full">
              <Image
                src="/russia.svg"
                height={300}
                width={900}
                alt="SEO"
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
            <button className="bg-primary h-12 w-full sm:w-72 rounded-xl text-white cursor-pointer hover:bg-primary/80">
              Отправить
            </button>
          </div>
          <div className="flex justify-center items-center">
            <Link
              href="/agreement"
              className="hover:opacity-50 cursor-pointer text-[8px] sm:text-[11px] text-center mt-4 underline"
              target="_blank"
            >
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </Link>
          </div>
        </div>
        <div className="w-full p-4 flex flex-col gap-4">
          <Link
            href="/"
            className="flex justify-center items-center gap-2 text-black bg-black/10 rounded-xl w-full h-12 hover:opacity-50"
          >
            <IoCall className="text-xl" />
            +7 (926) 500-39-02
          </Link>
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/"
              className="flex justify-center items-center gap-2 bg-sky-500 text-white rounded-xl w-full h-12 hover:bg-sky-500/80"
            >
              <RiTelegram2Fill className="text-2xl" />
              Telegram
            </Link>
            <Link
              href="/"
              className="flex justify-center items-center gap-2 bg-green-500 text-white rounded-xl w-full h-12 hover:bg-green-500/80"
            >
              <RiWhatsappFill className="text-2xl" />
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactModal;
