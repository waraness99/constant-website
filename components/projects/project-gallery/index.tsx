import React from "react";
import { SlideShow } from "./components/slideshow";
import { SlideThumbnails } from "./components/slide-thumbnails";
import { getThumbnailUrlFromId, getVideoUrlFromId } from "utils/youtube";

import { Image } from "utils/common-types";

interface ProjectGalleryProps {
  gallery: Image[];
  youtubeVideoId?: string;
}

export const ProjectGallery = ({ gallery, youtubeVideoId }: ProjectGalleryProps) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const parsedGallery = [...gallery];
  if (youtubeVideoId) {
    const youtubeThumbnail = getThumbnailUrlFromId(youtubeVideoId);
    parsedGallery.unshift({ id: "youtube", url: youtubeThumbnail });
  }

  const getCurrentSlide = () => {
    if (parsedGallery[currentSlideIndex].id === "youtube" && youtubeVideoId) {
      return { id: "youtube", url: getVideoUrlFromId(youtubeVideoId) };
    }
    return { ...parsedGallery[currentSlideIndex] };
  };

  const goToPreviousSlide = () => {
    const previousSlideIndex = currentSlideIndex - 1;
    if (previousSlideIndex < 0) {
      setCurrentSlideIndex(parsedGallery.length - 1);
    } else {
      setCurrentSlideIndex(previousSlideIndex);
    }
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex > parsedGallery.length - 1) {
      setCurrentSlideIndex(0);
    } else {
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  return (
    <>
      <div className="space-y-4">
        <SlideShow
          currentSlide={getCurrentSlide()}
          goToPreviousSlide={goToPreviousSlide}
          goToNextSlide={goToNextSlide}
          hasOnlyOneSlide={parsedGallery.length === 1}
        />

        {parsedGallery.length > 1 && (
          <SlideThumbnails thumbnails={parsedGallery} currentSlide={currentSlideIndex} goToSlide={goToSlide} />
        )}
      </div>
    </>
  );
};
