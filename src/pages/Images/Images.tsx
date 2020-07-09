import React from 'react';

import Gallery from 'react-photo-gallery';
import FadeIn from 'react-fade-in';

const photos = [
  {
    src: 'https://source.unsplash.com/UKu0b_VD5Jo/800x599',
    width: 4,
    height: 3,
  },
  {
    src: 'https://source.unsplash.com/_LLLOJTm8-I/800x599',
    width: 3,
    height: 2,
  },
  {
    src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
    width: 3,
    height: 4,
  },
  {
    src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
    width: 3,
    height: 4,
  },
  {
    src: 'https://source.unsplash.com/-PdP8SYHYIU/800x599',
    width: 6,
    height: 4,
  },

  {
    src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
    width: 3,
    height: 4,
  },

  {
    src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
    width: 4,
    height: 3,
  },
  {
    src: 'https://source.unsplash.com/b0KNao3FbA8/800x799',
    width: 4,
    height: 3,
  },
];

const Images: React.FC = () => {
  return (
    <FadeIn delay={500}>
      <Gallery
        photos={photos}
        direction="column"
        columns={window.innerWidth < 700 ? 1 : 3}
      />
    </FadeIn>
  );
};

export default Images;
