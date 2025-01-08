"use client"
import React from 'react';

interface IframeEmbedProps {
  src: string;
  height?: string;
}

const IframeEmbed: React.FC<IframeEmbedProps> = ({ src, height = '418px' }) => {
  return (
    <iframe
      className="w-full border-0"
      src={src}
      name="preview-frame"
      data-view="fullScreenPreview"
      allow="geolocation 'self'; autoplay 'self'"
      style={{ height }}>
      </iframe>
  );
};

export default IframeEmbed;
