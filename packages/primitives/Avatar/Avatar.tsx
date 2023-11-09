import React, { useContext, useLayoutEffect, useState, useRef } from 'react';

import { Primitive } from '../primitives/primitives';
import type { ImageLoadingStatus } from '../hooks/useImageLoadingStatus';
import { useImageLoadingStatus } from '../hooks/useImageLoadingStatus';

type AvatarContextValue = {
  imageLoadingStatus?: ImageLoadingStatus;
  updateImageLoadingStatus?(status: ImageLoadingStatus): void;
};

/*------------------------------------------------------------*/

const AvatarContext = React.createContext<AvatarContextValue>({
  imageLoadingStatus: 'init',
});

const Provider = <T extends object | null>(props: T & { children: React.ReactNode }) => {
  const { children, ...providerProps } = props;
  const [imageLoadingStatus, setImageLoadingStatus] = useState<ImageLoadingStatus>('init');

  const updateImageLoadingStatus = (status: ImageLoadingStatus) => {
    setImageLoadingStatus(status);
  };

  return (
    <AvatarContext.Provider
      value={{
        ...providerProps,
        imageLoadingStatus,
        updateImageLoadingStatus,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
};

/*------------------------------------------------------------*/

type AvatarProps = React.PropsWithoutRef<React.ComponentProps<typeof Primitive.span>>;
function Avatar(props: AvatarProps) {
  const { children, ...avatarProps } = props;

  return (
    <Provider>
      <Primitive.span {...avatarProps}>{props.children}</Primitive.span>
    </Provider>
  );

  /*------------------------------------------------------------*/
  type AvatarImageProps = React.PropsWithoutRef<React.ComponentProps<typeof Primitive.img>>;
  function AvatarImage(props: AvatarImageProps) {
    const { src, ...imageProps } = props;
    const { updateImageLoadingStatus } = useContext(AvatarContext);

    const imageLoadingStatus = useImageLoadingStatus(src);

    useLayoutEffect(() => {
      if (updateImageLoadingStatus) {
        updateImageLoadingStatus(imageLoadingStatus);
      }
    }, [imageLoadingStatus]);

    return imageLoadingStatus === 'settled' ? <Primitive.img {...imageProps} /> : null;
  }
}
