import { MouseEventHandler, ReactNode } from "react";

export interface CustomButtonProps {
    title?: string;
    containerStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    icon?: ReactNode;
    url?: string;
    external?: boolean;
}

export interface SectionHeadingProps {
    title: string;
}