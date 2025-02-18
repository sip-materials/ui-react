import { HTMLAttributes } from "react";
export interface LogoProps extends HTMLAttributes<HTMLImageElement> {
    size: 'sm' | 'md' | 'lg';
}
export declare const AmiJamLogo: {
    (props: LogoProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        size: string;
    };
};
