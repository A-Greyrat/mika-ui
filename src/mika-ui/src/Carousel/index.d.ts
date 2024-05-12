import React, {ForwardRefExoticComponent} from "react";

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    items: ReactElement[];

    loop?: boolean;
    autoSwitchByTime?: number;
    direction?: "horizontal" | "vertical";
    initialIndex?: number;

    onSwitch?: (index: number) => void;
    className?: string;
}

export declare const Carousel: ForwardRefExoticComponent<CarouselProps & React.RefAttributes<HTMLDivElement>>;
