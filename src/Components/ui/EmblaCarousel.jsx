import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [AutoScroll()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src="../../assets/pexels-ash-craig-122861-376464.jpg" alt="" />
        </div>
        <div className="embla__slide">
          <img src="../../assets/pexels-ash-craig-122861-376464.jpg" alt="" />
        </div>
        <div className="embla__slide">
          <img src="../../assets/pexels-ash-craig-122861-376464.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
