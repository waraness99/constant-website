import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false }); // avoid hydration failed
import { SlideShowButton } from "./slideshow-button";
import { Image } from "utils/common-types";

interface SlideShowProps {
  currentSlide: Image;
  goToPreviousSlide: () => void;
  goToNextSlide: () => void;
  hasOnlyOneSlide: boolean;
}

export const SlideShow = ({ currentSlide, goToPreviousSlide, goToNextSlide, hasOnlyOneSlide }: SlideShowProps) => {
  const { id, url } = currentSlide;

  return (
    <div className="relative aspect-video flex flex-row">
      {!hasOnlyOneSlide && (
        <>
          {<SlideShowButton direction="left" onClick={goToPreviousSlide} />}
          {<SlideShowButton direction="right" onClick={goToNextSlide} />}
        </>
      )}

      {id === "youtube" ? (
        <ReactPlayer url={url} width="100%" height="100%" controls light />
      ) : (
        <img src={url} alt="" className="w-full rounded-lg" />
      )}
    </div>
  );
};
