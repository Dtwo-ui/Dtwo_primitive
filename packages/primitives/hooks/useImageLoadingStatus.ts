import { useLayoutEffect, useState } from 'react';

export type ImageLoadingStatus = 'init' | 'loading' | 'settled' | 'error';

export function useImageLoadingStatus(src?: string): ImageLoadingStatus {
  const [imageLoadingStatus, setImageLoadingStatus] = useState<ImageLoadingStatus>('init');

  useLayoutEffect(() => {
    if (!src) {
      setImageLoadingStatus(() => 'error');
      return;
    }

    let image: HTMLImageElement | null = new window.Image();

    image.onload = () => {
      setImageLoadingStatus('settled');
    };

    image.onerror = () => {
      setImageLoadingStatus('error');
    };

    image.src = src;
    setImageLoadingStatus('loading');

    return () => {
      image = null;
    };
  }, [src]);

  return imageLoadingStatus;
}
