import { BoardList } from '../../component/index';
import React from 'react';

const defaultProps = {};

export interface BoardProps {}

const dummyData: { id: string; type: 'article' | 'notice'; title: string }[] = [
  {
    id: 'board-1',
    type: 'article',
    title: '게시글 테스트 1',
  },
  {
    id: 'board-2',
    type: 'article',
    title: '게시글 테스트 2',
  },
  {
    id: 'board-3',
    type: 'article',
    title: '게시글 테스트 3 필터',
  },
  {
    id: 'board-4',
    type: 'article',
    title: '게시글 테스트 4',
  },
  {
    id: 'board-5',
    type: 'article',
    title: '게시글 테스트 5',
  },
  {
    id: 'board-6',
    type: 'article',
    title: '게시글 테스트 6 필터',
  },
  {
    id: 'board-7',
    type: 'article',
    title: '게시글 테스트 7',
  },
  {
    id: 'board-8',
    type: 'article',
    title: '게시글 테스트 8',
  },
  {
    id: 'board-9',
    type: 'notice',
    title: '게시글 테스트 9',
  },
  {
    id: 'board-10',
    type: 'notice',
    title: '게시글 테스트 10',
  },
  {
    id: 'board-11',
    type: 'notice',
    title: '게시글 테스트 11',
  },
  {
    id: 'board-12',
    type: 'article',
    title: '게시글 테스트 12',
  },
  {
    id: 'board-13',
    type: 'article',
    title: '게시글 테스트 13  필터',
  },
  {
    id: 'board-14',
    type: 'article',
    title: '게시글 테스트 14',
  },
  {
    id: 'board-15',
    type: 'article',
    title: '게시글 테스트 15',
  },
  {
    id: 'board-16',
    type: 'article',
    title: '게시글 테스트 16',
  },
  {
    id: 'board-17',
    type: 'article',
    title: '게시글 테스트 17',
  },
  {
    id: 'board-18',
    type: 'article',
    title: '게시글 테스트 18',
  },
  {
    id: 'board-19',
    type: 'article',
    title: '게시글 테스트 19',
  },
  {
    id: 'board-20',
    type: 'article',
    title: '게시글 테스트 20 필터',
  },
  {
    id: 'board-21',
    type: 'article',
    title: '게시글 테스트 21',
  },
  {
    id: 'board-22',
    type: 'article',
    title: '게시글 테스트 22',
  },
  {
    id: 'board-23',
    type: 'article',
    title: '게시글 테스트 23',
  },
];

export function Board({}: BoardProps) {
  return (
    <div>
      <ul>
        <BoardList data={dummyData} />
      </ul>
    </div>
  );
}

Board.defaultProps = defaultProps;
