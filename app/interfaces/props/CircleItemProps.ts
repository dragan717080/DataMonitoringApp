export default interface CircleItemProps {
  imgAlt: string;
  imgSrc: string;
  title: string;
  content: string;
}

export interface CircleItemComponentProps extends CircleItemProps {
  index: number;
}
