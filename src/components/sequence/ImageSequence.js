import React, { forwardRef } from "react";
import { Skeleton } from "./Skeleton";
import MainSqArray from "./ImageArray";

const ImageSequence = forwardRef(({ progress }, ref) => {
  const newImages = MainSqArray();

  let index = Math.round(progress * 1 * (newImages.length - 1));

  if (newImages[index][1] !== undefined) {
    if (newImages[index][1] === "loading") {
      return <Skeleton width="100%" height="100%" />;
    } else {
      return newImages.map((item, i) => (
        <span
          ref={ref}
          key={i}
          className="h-full w-full bg-cover bg-center"
          style={{
            display: i !== index ? "none" : "block",
            backgroundImage: `url('${item[0] ? item[0].src : null}')`,
          }}
        />
      ));
    }
  }
});

export default ImageSequence;
