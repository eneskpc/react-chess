import { IPiece } from './IPiece';

export type ICell = IPiece & {
   team: 'black' | 'white';
   selected: boolean;
};
