import React from "react";

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    items: ReactElement[];

    loop?: boolean;
    autoSwitchByTime?: number;
    direction?: "horizontal" | "vertical";
    initialIndex?: number;

    onSwitch?: (index: number) => void;
    className?: string;
}

export declare const Carousel: React.FC<CarouselProps>;
