import React from 'react';

const defaultProps = {};

export interface BoardListProps {
  data: { id: string; type: 'article' | 'notice'; title: string }[];
}

export function BoardList({ data }: BoardListProps) {
  return (
    <>
      {data.map((item, index) => {
        <li className="">
          <span>index</span>
        </li>;
      })}
    </>
  );
}

BoardList.defaultProps = defaultProps;
