import { ICellDetail } from './ICellDetail';
import { IPosition } from './IPosition';

export type IPiece = {
   code: 'king' | 'rook' | 'bishop' | 'queen' | 'knight' | 'pawn';
   checkMove: (currentPosition: ICellDetail, nextPosition: IPosition) => boolean;
};
