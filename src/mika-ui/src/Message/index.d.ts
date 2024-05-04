import React from "react";

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    duration?: string;
    remainingTime?: number;
    onDisappear?: () => void;
    style?: React.CSSProperties;
    className?: string;
}

export declare const showMessage: (props: MessageProps) => void;
