import React, {ForwardRefExoticComponent} from "react";

export interface InfinityListProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    onIntersect: (unloading: () => void) => unknown;
    loading?: React.ReactElement;

    limit?: number;
    itemNum?: number;

    options?: IntersectionObserverInit;
}

export declare const InfinityList: ForwardRefExoticComponent<InfinityListProps & React.RefAttributes<HTMLDivElement>>;
