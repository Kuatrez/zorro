import Link from "next/link";
import { FC } from "react";

interface FooterProps {
  setContactModal: (value: boolean) => void;
}

const Footer: FC<FooterProps> = ({ setContactModal }) => {
  return (
    <footer className="bg-black/10">
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center">
          <p className="text-xs text-center max-w-sm">
            Все права защищены. Использование фотографий, перепечатка и
            цитирование материалов сайта - только с разрешение автора
          </p>
        </div>
        <Link
          href={"https://t.me/kuatrez"}
          target="_blank"
          className="flex flex-col justify-center items-center text-center mt-4 hover:cursor-pointer hover:opacity-50"
        >
          <p className="text-xs text-primary">РАЗРАБОТАЛ</p>
          <p className="font-black">KUATREZ</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
