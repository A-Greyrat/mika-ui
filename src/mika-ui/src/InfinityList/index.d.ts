export interface InfinityListProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    onIntersect: (unloading: () => void) => unknown;
    loading?: React.ReactElement;

    limit?: number;
    itemNum?: number;

    options?: IntersectionObserverInit;
}

declare const InfinityList: React.FC<InfinityListProps>;
export default InfinityList;
