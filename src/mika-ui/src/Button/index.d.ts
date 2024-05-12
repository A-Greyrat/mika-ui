import React, {ForwardRefExoticComponent} from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: string | React.ReactNode;
    styleType?: 'primary' | 'default' | 'text' | 'link';
    size?: 'small' | 'medium' | 'large';
    // customClickEffect?: string | ((e: HTMLButtonElement) => unknown);
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => unknown;
}

export declare const Button: ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
