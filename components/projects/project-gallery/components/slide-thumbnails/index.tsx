import { Image } from "utils/common-types";

interface SlideThumbnailsProps {
  thumbnails: Image[];
  currentSlide: number;
  goToSlide: (index: number) => void;
}

export const SlideThumbnails = ({ thumbnails, currentSlide, goToSlide }: SlideThumbnailsProps) => (
  <div className="p-2 flex flex-nowrap space-x-4 overflow-x-auto scrollbar-hide">
    {thumbnails.map(({ url, id }, index) => (
      <img
        key={id}
        src={url}
        alt=""
        className={`h-24 rounded ${currentSlide === index && "outline outline-2 outline-offset-4"}`}
        onClick={() => goToSlide(index)}
        tabIndex={0}
      />
    ))}
  </div>
);
