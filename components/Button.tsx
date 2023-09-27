// LinkButton.tsx
import { ButtonProps } from '@/types';  // Импорт из вашего файла types
import React from 'react';

const LinkButton = ({ 
  title, 
  icon, 
  containerStyle, 
  handleClick,
  children
}: ButtonProps) => {
  const content = (
    <span className="flex justify-center items-center gap-2 2xl:text-2xl">
      {title}
      {icon && <span>{icon}</span>}
    </span>
  );

  return (
    <button
        className={`rounded-full ${containerStyle}`}
    >
        {children || content}
    </button>
  );
};

export default LinkButton;
