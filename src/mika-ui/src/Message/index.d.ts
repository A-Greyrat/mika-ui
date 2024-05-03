export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    duration?: string;
    remainingTime?: number;
    onDisappear?: () => void;
    style?: React.CSSProperties;
    className?: string;
}

declare const showMessage: (props: MessageProps) => void;
export default showMessage;
