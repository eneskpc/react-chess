import { IBoard } from './IBoard';
import { IRow } from './IRow';

export type IPosition = {
   row: keyof IBoard;
   cell: keyof IRow;
};
