
interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: string;
    height?: string;
    style?: React.CSSProperties;

    type: 'box' | 'avatar' | 'text';
    borderRadius?: string;
    loading?: boolean;
}

declare const Skeleton: React.FC<SkeletonProps>;
export default Skeleton;
