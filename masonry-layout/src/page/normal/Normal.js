import React from 'react';
import * as S from './Normal.styled';
import data from '../../data/imageData.json';

export function Normal() {
  const { imageData } = data;

  return (
    <S.Container>
      <div>
        {imageData.map((item) => (
          <figure key={item.id}>
            <img src={item.imgUrl} alt='' />
          </figure>
        ))}
      </div>
    </S.Container>
  );
}
