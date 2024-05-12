import {ForwardRefExoticComponent, RefAttributes} from "react";

export type {CarouselListProps, CarouselListController} from './CarouselListType';

export declare const useCarouselController: () => CarouselListController;

export declare const CarouselList: ForwardRefExoticComponent<CarouselListProps & RefAttributes<HTMLDivElement>>;
