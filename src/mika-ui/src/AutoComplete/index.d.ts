export interface AutoCompleteProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onSubmit'> {
    type?: 'outline' | 'filled' | 'borderless';
    size?: 'small' | 'medium' | 'large';

    onSubmit?: (item: string) => void;
    dataSrc: string[];
    onValueChange?: (keyword: string) => Promise<unknown>;
    children?: ReactNode;

    onOptionClick?: (item: string) => void;
    onOptionKeyDown?: (item: string) => void;
}

declare const AutoComplete: React.FC<AutoCompleteProps>;
export default AutoComplete;
