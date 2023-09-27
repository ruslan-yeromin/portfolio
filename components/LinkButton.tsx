// LinkButton.tsx
import { LinkButtonProps } from '@/types';  // Импорт из вашего файла types
import Link from 'next/link';
import React from 'react';

const LinkButton = ({ 
  title, 
  url,
  icon, 
  external = false, 
  containerStyle, 
  handleClick,
  children
}: LinkButtonProps) => {
  const content = (
    <span className="flex justify-center items-center gap-2 2xl:text-2xl">
      {title}
      {icon && <span>{icon}</span>}
    </span>
  );

  return (
    <Link href={url} passHref
        target={external ? '_blank' : '_self'}
        rel="noreferrer"
        className={`custom-btn px-6 md:px-10 py-3 rounded-full 2xl:text-2xl ${containerStyle}`}
        onClick={handleClick}
    >
        {children || content}

    </Link>
  );
};

export default LinkButton;
