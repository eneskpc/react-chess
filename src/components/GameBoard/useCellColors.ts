import { useMemo } from 'react';
import { IBoard } from '../../store/IBoard';

export const useCellColors = (board: IBoard) => {
   return useMemo(() => {
      return Object.keys(board).reduce((all, letter, index) => {
         return {
            ...all,
            ...Object.keys(board[letter as keyof IBoard]).reduce(
               (allLN, lineNumber, subIndex) => {
                  return {
                     ...allLN,
                     [letter + lineNumber]:
                        index % 2 === 0
                           ? subIndex % 2 === 0
                              ? 'white'
                              : 'black'
                           : subIndex % 2 === 0
                             ? 'black'
                             : 'white',
                  };
               },
               {},
            ),
         };
      }, {});
   }, []);
};
