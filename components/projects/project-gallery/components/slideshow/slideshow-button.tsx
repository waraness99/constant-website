import { IoArrowBack, IoArrowForward } from "react-icons/io5";

interface SlideShowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const iconClasses = "text-xl text-white group-hover:text-black";

export const SlideShowButton = ({ onClick, direction }: SlideShowButtonProps) => (
  <div
    className={`group absolute ${
      direction === "left" ? "left-0" : "right-0"
    } top-1/2 transform -translate-y-1/2 p-3 rounded-full mx-4 bg-white-20 hover:bg-white`}
    onClick={onClick}
  >
    {direction === "left" ? <IoArrowBack className={iconClasses} /> : <IoArrowForward className={iconClasses} />}
  </div>
);
