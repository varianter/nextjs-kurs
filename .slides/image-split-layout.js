import React from 'react';
import { Image } from 'mdx-deck';

export default function SplitImage({
  img,
  isRight,
  style,
  isThird,
  children,
  imgStyle,
}) {
  const content = (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: isThird ? 2 : 1,
        padding: '1rem',
        ...style,
      }}
    >
      {children}
    </div>
  );
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'stretch',
        width: '100%',
        height: '100%',
      }}
    >
      {isRight && content}
      <Image
        src={img}
        style={{
          flex: 1,
          ...imgStyle,
        }}
      />
      {!isRight && content}
    </div>
  );
}
