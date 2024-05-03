export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
    showValue?: boolean;
    width?: string;
    height?: string;

    orient: 'horizontal' | 'vertical';
    thumbColor?: string;
    trackColor?: string;
}

declare const Slider: React.FC<SliderProps>;
export default Slider;
