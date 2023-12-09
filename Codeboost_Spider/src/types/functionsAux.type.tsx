export interface TypeRenderComponentStyle {
  asElement: keyof JSX.IntrinsicElements;
  asStyle: string | (() => string);
  children?: React.ReactNode;
}
