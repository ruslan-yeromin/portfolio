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

export interface FloatingButtonProps {
    angle: number;
    delay: number;
    type: 'link' | 'button';
    locale?: string;
    icon?: JSX.Element;
    title?: string;
    onClick?: () => void;
  }
  
  export interface MainButtonProps {
    toggleTheme: () => void;
    theme: string;
  }
  