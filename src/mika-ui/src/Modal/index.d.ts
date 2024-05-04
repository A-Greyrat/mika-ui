import React from "react";

export type ModalController = {
    // 仅执行关闭动画，不执行onClose
    close: () => void;
}

export type ModalProps = {
    visible: boolean;

    title?: React.ReactNode | string;
    content?: React.ReactNode | string;
    footer?: React.ReactNode | 'none' | 'ok cancel close' | 'ok cancel' | 'ok close' | 'ok' | 'cancel' | 'close';
    className?: string;
    style?: React.CSSProperties;
    onOk?: () => unknown;
    onCancel?: () => unknown;
    onClose?: () => unknown;
    closeOnClickMask?: boolean;
    showMask?: boolean;
    closeIcon?: boolean | React.ReactNode;
    modalController?: ModalController;
    position?: "top" | "center" | "bottom";
}

declare const Modal: React.FC<ModalProps>;
export default Modal;

export declare const showModal: (props: Omit<Omit<ModalProps, "visible">, "onClose"> & { onClose?: () => unknown }) => void;
export declare const useModal: () => ModalController;

