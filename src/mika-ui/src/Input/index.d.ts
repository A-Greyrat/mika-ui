export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'onSubmit'> {
    type?: 'outline' | 'filled' | 'borderless';
    size?: 'small' | 'medium' | 'large';
    value?: string;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    children?: React.ReactNode;
}

declare const Input: React.FC<InputProps>;
export default Input;
