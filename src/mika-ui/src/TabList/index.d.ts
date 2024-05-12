import React, {ForwardRefExoticComponent} from "react";

export type TabListProps = {
    items: string[];
    activeIndex: number;
    onChange: (index: number) => void;
    className?: string;
    width?: string;
    type?: 'horizontal' | 'vertical';
    style?: React.CSSProperties;
};

export declare const TabList: ForwardRefExoticComponent<TabListProps & React.RefAttributes<HTMLDivElement>>;
