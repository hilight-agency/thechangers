import React, { forwardRef } from 'react';
import { Skeleton } from './Skeleton';

const ImageSequence = forwardRef(({ progress, array, className }, ref) => {
  let index = Math.round(progress * 1 * (array.length - 1));

  if (array[index][1] !== undefined) {
    if (array[index][1] === 'loading') {
      return <Skeleton width='100%' height='100%' />;
    } else {
      return array.map((item, i) => (
        <span
          ref={ref}
          key={i}
          className={className || 'h-full w-full bg-cover bg-center bg-no-repeat'}
          style={{
            display: i !== index ? 'none' : 'block',
            backgroundImage: `url('${item[0] ? item[0].src : null}')`,
          }}
        />
      ));
    }
  }
});

export default ImageSequence;
