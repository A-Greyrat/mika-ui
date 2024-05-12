import React, {ForwardRefExoticComponent} from "react";

export type DropdownProps = {
    children: React.ReactNode;
    menu: React.ReactNode;
    paddingTrigger?: number;
    direction?: "up" | "down";
    type?: "hover" | "click";
    className?: string;
    position?: "left" | "right" | "center";
    callback?: () => void;
}

export declare const Dropdown: ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLDivElement>>;
