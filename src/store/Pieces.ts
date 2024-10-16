import { board$, boardRows } from '.';
import { ICellDetail } from './ICellDetail';
import { IPiece } from './IPiece';

export const Rook = {
   code: 'rook',
   checkMove: (currentPosition, nextPosition) => {
      return true;
   },
} as IPiece;

export const Bishop = {
   code: 'bishop',
   checkMove: (currentPosition, nextPosition) => {
      return true;
   },
} as IPiece;

export const King = {
   code: 'king',
   checkMove: (currentPosition, nextPosition) => {
      return true;
   },
} as IPiece;

export const Knight = {
   code: 'knight',
   checkMove: (currentPosition, nextPosition) => {
      return true;
   },
} as IPiece;

export const Pawn = {
   code: 'pawn',
   checkMove: (currentPosition, nextPosition) => {
      let factors = [];
      if (currentPosition.team === 'black') {
         factors = currentPosition.cell === 7 ? [-2, -1] : [-1];
      } else {
         factors = currentPosition.cell === 2 ? [2, 1] : [1];
      }

      // baslangic pozisyonunda max 2 diger pozisyonlarda 1 adim ileri gidilebilir
      const sameRowCondition =
         currentPosition.row === nextPosition.row &&
         factors.some(
            (factor) =>
               Number(currentPosition.cell + factor) ===
               Number(nextPosition.cell),
         );

      if (currentPosition.team === 'black') {
         factors = [-1];
      } else {
         factors = [1];
      }

      const opponentTeam = currentPosition.team === 'black' ? 'white' : 'black';
      let leftRowIndex = boardRows.indexOf(currentPosition.row) - 1;
      let rightRowIndex = boardRows.indexOf(currentPosition.row) + 1;

      if (leftRowIndex === -2) {
         leftRowIndex = -1;
      }

      if (rightRowIndex === 0) {
         rightRowIndex = -1;
      }

      // sag veya sol sutunda karsi takımdan bir tas varsa oynanabilir
      const capturePieceCondition =
         ((leftRowIndex !== -1 &&
            leftRowIndex !== boardRows.length &&
            nextPosition.row === boardRows[leftRowIndex]) ||
            (rightRowIndex !== -1 &&
               rightRowIndex !== boardRows.length &&
               nextPosition.row === boardRows[rightRowIndex])) &&
         board$.getValue()[nextPosition.row][nextPosition.cell]?.team ===
            opponentTeam &&
         factors.some(
            (factor) =>
               Number(currentPosition.cell + factor) ===
               Number(nextPosition.cell),
         );

      // ileri gidebilir mi veya tas yiyebilir mi
      return sameRowCondition || capturePieceCondition;
   },
} as IPiece;

export const Queen = {
   code: 'queen',
   checkMove: (currentPosition, nextPosition) => {
      return true;
   },
} as IPiece;
