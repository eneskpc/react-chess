import { useObservableEagerState } from 'observable-hooks';
import { useCallback } from 'react';
import { board$ } from '../../store';
import { IPosition } from '../../store/IPosition';
import { ICell } from '../../store/ICell';
import { IBoard } from '../../store/IBoard';
import { IRow } from '../../store/IRow';

export const useOnSelected = () => {
   const board = useObservableEagerState(board$);

   return useCallback(
      ({ row, cell }: IPosition, team?: ICell['team']) => {
         if (!team) {
            return;
         }
         const cloneBoard = Object.keys(board).reduce((allBoard, rowKey) => {
            const rowTKey = rowKey as keyof IBoard;
            return {
               ...allBoard,
               [rowKey]: Object.keys(board[rowTKey]).reduce(
                  (allRow, cellKey) => {
                     const cellTKey = cellKey as unknown as keyof IRow;
                     return {
                        ...allRow,
                        [cellKey]: !board[rowTKey][cellTKey]
                           ? null
                           : {
                                ...board[rowTKey][cellTKey],
                                selected:
                                   row === rowTKey && cell === cellTKey
                                      ? !(
                                           board[rowTKey][cellTKey]?.selected ??
                                           false
                                        )
                                      : false,
                             },
                     } as IRow;
                  },
                  {},
               ),
            };
         }, {} as IBoard);
         board$.next(cloneBoard);
      },
      [board],
   );
};
