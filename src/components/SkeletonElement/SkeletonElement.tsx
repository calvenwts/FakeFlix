import "./skeletonElement.scss";

interface Props {
  type: string;
}

const SkeletonElement = ({ type }: Props) => (
  <div className={`Skeleton ${type}`} />
);

export default SkeletonElement;
