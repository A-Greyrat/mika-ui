import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: string | React.ReactNode;
    styleType?: 'primary' | 'default' | 'text' | 'link';
    size?: 'small' | 'medium' | 'large';
    // customClickEffect?: string | ((e: HTMLButtonElement) => unknown);
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => unknown;
}

declare const Button: React.FC<ButtonProps>;
export default Button;
