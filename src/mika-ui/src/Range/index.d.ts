export interface RangeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    value: number;
    orient?: 'horizontal' | 'vertical';
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    width?: string;
    height?: string;
    thumbSize?: number;
    thumbColor?: string;
    trackColor?: string;
    className?: string;
}

declare const Range: React.FC<RangeProps>;
export default Range;
