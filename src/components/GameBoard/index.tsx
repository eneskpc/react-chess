import { useObservableEagerState } from 'observable-hooks';
import { board$ } from '../../store';
import { Cell } from '../Cell';
import { IBoard } from '../../store/IBoard';
import { IRow } from '../../store/IRow';
import { useGameBoardStyles } from './useGameBoardStyles';
import { useCellColors } from './useCellColors';
import { useOnSelected } from './useOnSelected';
import { useSelectedPiece } from '../../store/useSelectedPiece';

export const GameBoard = () => {
   const board = useObservableEagerState(board$);
   const cellColors = useCellColors(board);
   const styles = useGameBoardStyles();
   const selectedPiece = useSelectedPiece();
   const onSelected = useOnSelected();

   return (
      <div className={styles.container}>
         <div className={styles.titleContainer}>
            <div className={styles.rowTitle}></div>
            {Object.keys(board.a).map((lineNumber) => (
               <div key={lineNumber} className={styles.rowTitle}>
                  {lineNumber}
               </div>
            ))}
         </div>
         {Object.keys(board).map((letter) => {
            const typedLetter = letter as keyof IBoard;
            const currentLetter = board[typedLetter];
            return (
               <div key={letter} className={styles.row}>
                  <div className={styles.rowTitle}>{letter}</div>
                  {Object.keys(currentLetter).map((lineNumber) => {
                     const typedLine = lineNumber as unknown as keyof IRow;
                     const cell = board[typedLetter][typedLine];
                     const piece = cell?.code;
                     const team = cell?.team;
                     const selected = cell?.selected;
                     const possible =
                        selectedPiece?.checkMove(selectedPiece, {
                           row: typedLetter,
                           cell: typedLine,
                        }) ?? false;
                     const cellCode = `${letter}${lineNumber}`;
                     const cellTCode = cellCode as keyof typeof cellColors;
                     const cellColorKey = cellColors[cellTCode];

                     return (
                        <Cell
                           key={letter + lineNumber}
                           color={cellColorKey}
                           piece={piece}
                           pieceColor={team}
                           selected={selected}
                           playable={possible}
                           onSelected={() =>
                              onSelected(
                                 {
                                    row: letter as keyof IBoard,
                                    cell: lineNumber as unknown as keyof IRow,
                                 },
                                 team,
                              )
                           }
                        />
                     );
                  })}
               </div>
            );
         })}
      </div>
   );
};
