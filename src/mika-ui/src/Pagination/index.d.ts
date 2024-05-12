import React, {ForwardRefExoticComponent} from "react";

export type PaginationCustomButtonProps = {
    onClick: () => void;
    disabled: boolean;
    children?: React.ReactNode;
};
export interface PaginationProps {
    initIndex?: number;
    pageNum: number;
    maxDisplayNumber?: number;
    onChange: (page: number) => void;
    fastJumpSize?: number;
    customBtn?: (props: PaginationCustomButtonProps) => React.ReactElement;
    customControlBtn?: React.FC<PaginationCustomButtonProps>;

    className?: string;
    style?: React.CSSProperties;
}

export declare const Pagination: ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLDivElement>>;
