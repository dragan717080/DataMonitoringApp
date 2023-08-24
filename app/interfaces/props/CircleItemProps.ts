export default interface CircleItemProps {
  top: string;
  left: string;
  imgAlt: string;
  imgSrc: string;
}

export interface CircleItemComponentProps extends CircleItemProps {
  index: number;
}
