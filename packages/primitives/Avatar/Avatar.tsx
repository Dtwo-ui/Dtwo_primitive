import React, { useContext } from 'react';

import { Primitive } from '../primitives/primitives';

/*------------------------------------------------------------*/

const AvatarContext = React.createContext<any>(null);

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
}

/*------------------------------------------------------------*/
type AvatarImageProps = React.PropsWithoutRef<React.ComponentProps<typeof Primitive.img>>;
function AvatarImage(props: AvatarImageProps) {
  const { src, ...imageProps } = props;
}
const a = 1;
