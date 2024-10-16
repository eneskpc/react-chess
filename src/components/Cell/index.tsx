import { CompoundButton, mergeClasses } from '@fluentui/react-components';
import { useCellStyles } from './useCellStyles';
import { Piece, PieceProps } from '../Piece';

export type CellProps = {
   piece?: PieceProps['piece'];
   color?: PieceProps['color'];
   pieceColor?: 'white' | 'black';
   selected?: boolean;
   playable?: boolean;
   onSelected?: () => void;
};

export const Cell = ({
   piece,
   color,
   pieceColor,
   selected,
   onSelected,
   playable = false,
}: CellProps) => {
   const styles = useCellStyles();

   return (
      <CompoundButton
         className={mergeClasses(styles.cell, color, selected && 'selected')}
         shape="square"
         onClick={onSelected}
      >
         {piece && (
            <div className={styles.piece}>
               <Piece color={pieceColor ?? 'black'} piece={piece} size={64} />
            </div>
         )}
         {playable && <div className={styles.possiblyPoint}></div>}
      </CompoundButton>
   );
};
