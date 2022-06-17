import React from 'react';

import * as S from './UseGridLayout.styled';

import data from '../../data/imageData.json';

export function UseGridLayout() {
  const { imageData } = data;
  return (
    <>
      <S.UseGridLayoutStyle>
        <div className='grid-column'>
          <figure>
            <img src='' alt='' />
          </figure>
        </div>
      </S.UseGridLayoutStyle>
    </>
  );
}
