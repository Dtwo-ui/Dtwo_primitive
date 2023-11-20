import React from 'react';

const nodes = [
  'a',
  'button',
  'div',
  'form',
  'h1',
  'h2',
  'h3',
  'img',
  'input',
  'label',
  'li',
  'nav',
  'ol',
  'p',
  'span',
  'svg',
  'ul',
] as const;

type PrimitivesType = {
  [T in (typeof nodes)[number]]: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.ComponentProps<T>>
  >;
};

type ComponentPropsWithoutRef<T extends React.ElementType> = React.PropsWithoutRef<
  React.ComponentProps<T>
>;

export const Primitive = nodes.reduce((components, htmlElement) => {
  const Node = React.forwardRef((props: ComponentPropsWithoutRef<typeof htmlElement>, ref: any) => {
    const Component: any = htmlElement;

    return (
      <Component {...props} ref={ref}>
        {props.children}
      </Component>
    );
  });

  return { ...components, [htmlElement]: Node };
}, {} as PrimitivesType);
