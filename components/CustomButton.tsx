'use client';

import { CustomButtonProps } from '@/types';
import React from 'react';

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  containerStyle,
  handleClick,
  icon,
  url,
  external = false
}) => {
  
  const content = (
    <span className={`flex justify-center items-center gap-2`}>
      {title}
      {icon && <span>{icon}</span>}
    </span>
  );

  // Если предоставлен URL, рендерим кнопку как ссылку
  if (url) {
    return (
      <a
        href={url}
        target={external ? "_blank" : "_self"}
        rel="noreferrer"
        className={`custom-btn rounded-full ${containerStyle}`}
      >
        {content}
      </a>
    );
  }

  // В противном случае рендерим как обычную кнопку
  return (
    <button
      type="button"
      className={`custom-btn rounded-full  ${containerStyle}`}
      onClick={handleClick}
    >
      {content}
    </button>
  );
}

export default CustomButton;
