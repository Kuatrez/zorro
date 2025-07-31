import { FC } from "react";

interface HeaderProps {
  setContactModal: (value: boolean) => void;
}

const Header: FC<HeaderProps> = ({ setContactModal }) => {
  return (
    <header className="fixed w-full z-20 bg-white">
      <div className="p-4 container mx-auto flex justify-between items-center">
        <p>ZORRO.SU</p>
        <button
          onClick={() => setContactModal(true)}
          className="bg-primary h-10 w-32 rounded-xl text-white cursor-pointer hover:bg-primary/80"
        >
          Связаться
        </button>
      </div>
    </header>
  );
};

export default Header;
