export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    items: ReactElement[];

    loop?: boolean;
    autoSwitchByTime?: number;
    direction?: "horizontal" | "vertical";
    initialIndex?: number;

    onSwitch?: (index: number) => void;
    className?: string;
}

declare const Carousel: React.FC<CarouselProps>;
export default Carousel;
