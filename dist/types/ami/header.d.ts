import { HTMLAttributes, ReactNode } from "react";
export interface HeaderProps extends HTMLAttributes<HTMLElement> {
    menuElements?: ReactNode[];
    user: {
        userId: string;
        avatar: string;
        nickname: string;
    };
}
export declare const AmiJamHeader: (props: HeaderProps) => import("react/jsx-runtime").JSX.Element;
