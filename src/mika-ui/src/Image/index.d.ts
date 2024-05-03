export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
    src?: string | null;

    width?: number | string;
    height?: number | string;
    alt?: string;

    loading?: React.ReactElement;
    error?: React.ReactElement | string;
    lazy?: boolean;
    // TODO: Add support for preview
    preview?: boolean;

    onLoaded?: () => unknown;
    onError?: () => unknown;

    occupyStyle?: React.CSSProperties;
}

declare const Image: React.FC<ImageProps>;
export default Image;
