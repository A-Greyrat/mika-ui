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

declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
