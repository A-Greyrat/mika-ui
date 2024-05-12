import React, {ForwardRefExoticComponent} from "react";

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
    showValue?: boolean;
    width?: string;
    height?: string;

    orient: 'horizontal' | 'vertical';
    thumbColor?: string;
    trackColor?: string;
}

export declare const Slider: ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLInputElement>>;
