import React, { useContext, useLayoutEffect, useState } from 'react';

import { Primitive } from '../primitives/primitives';
import type { ImageLoadingStatus } from '../hooks/useImageLoadingStatus';

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

  return <AvatarContext.Provider value={providerProps}>{children}</AvatarContext.Provider>;
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

    return <Primitive.img {...imageProps}></Primitive.img>;
  }
}
