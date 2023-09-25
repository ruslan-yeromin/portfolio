import { MouseEventHandler, ReactNode } from "react";

export interface LinkButtonProps {
    href?: string;
    title?: string;
    containerStyle?: string;
    handleClick?: MouseEventHandler<HTMLAnchorElement>;
    icon?: ReactNode;
    url: string;
    external?: boolean;
    children?: ReactNode;
}

export interface ButtonProps {
    title?: string;
    containerStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    icon?: ReactNode;
    children?: ReactNode;
}

export interface SectionHeadingProps {
    title: string;
}