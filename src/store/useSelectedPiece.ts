import { useObservableEagerState } from 'observable-hooks';
import { board$ } from '.';
import { useMemo } from 'react';
import { IBoard } from './IBoard';
import { IRow } from './IRow';
import { ICellDetail } from './ICellDetail';

export const useSelectedPiece = () => {
   const board = useObservableEagerState(board$);

   return useMemo(() => {
      for (const rowKey in board) {
         if (Object.prototype.hasOwnProperty.call(board, rowKey)) {
            const row = board[rowKey as keyof IBoard];
            for (const cellKey in row) {
               if (Object.prototype.hasOwnProperty.call(row, cellKey)) {
                  const cell = row[cellKey as unknown as keyof IRow];
                  if (cell?.selected) {
                     return {
                        ...cell,
                        cell: Number(cellKey),
                        row: rowKey,
                     } as ICellDetail;
                  }
               }
            }
         }
      }
      return null;
   }, [board]);
};
