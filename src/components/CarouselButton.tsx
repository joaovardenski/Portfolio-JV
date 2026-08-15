import type { ReactNode } from "react";

type CarouselButtonProps = {
  icon: ReactNode;
  onClick: () => void;
  label: string;
};

const CarouselButton = ({ icon, onClick, label }: CarouselButtonProps) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="
      w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center
      hover:bg-indigo-600 hover:text-white cursor-pointer transition-all duration-300
    "
  >
    {icon}
  </button>
);

export default CarouselButton;
