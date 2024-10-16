import { BehaviorSubject } from 'rxjs';
import { IBoard } from './IBoard';
import { Rook, Pawn, Knight, Bishop, King, Queen } from './Pieces';
import { ICell } from './ICell';

export const initialData = {
   a: {
      '1': { ...Rook, team: 'white', selected: false },
      '2': { ...Pawn, team: 'white', selected: false },
      '3': null,
      '4': null,
      '5': null,
      '6': null,
      '7': { ...Pawn, team: 'black', selected: false },
      '8': { ...Rook, team: 'black', selected: false },
   },
   b: {
      '1': { ...Knight, team: 'white', selected: false },
      '2': { ...Pawn, team: 'white', selected: false },
      '3': { ...Pawn, team: 'black', selected: false },
      '4': null,
      '5': null,
      '6': null,
      '7': { ...Pawn, team: 'black', selected: false },
      '8': { ...Knight, team: 'black', selected: false },
   },
   c: {
      '1': { ...Bishop, team: 'white', selected: false },
      '2': { ...Pawn, team: 'white', selected: false },
      '3': null,
      '4': null,
      '5': null,
      '6': null,
      '7': { ...Pawn, team: 'black', selected: false },
      '8': { ...Bishop, team: 'black', selected: false },
   },
   d: {
      '1': { ...Queen, team: 'white', selected: false },
      '2': { ...Pawn, team: 'white', selected: false },
      '3': null,
      '4': null,
      '5': null,
      '6': null,
      '7': { ...Pawn, team: 'black', selected: false },
      '8': { ...Queen, team: 'black', selected: false },
   },
   e: {
      '1': { ...King, team: 'white', selected: false },
      '2': { ...Pawn, team: 'white', selected: false },
      '3': null,
      '4': null,
      '5': null,
      '6': null,
      '7': { ...Pawn, team: 'black', selected: false },
      '8': { ...King, team: 'black', selected: false },
   },
   f: {
      '1': { ...Bishop, team: 'white', selected: false },
      '2': { ...Pawn, team: 'white', selected: false },
      '3': null,
      '4': null,
      '5': null,
      '6': null,
      '7': { ...Pawn, team: 'black', selected: false },
      '8': { ...Bishop, team: 'black', selected: false },
   },
   g: {
      '1': { ...Knight, team: 'white', selected: false },
      '2': { ...Pawn, team: 'white', selected: false },
      '3': null,
      '4': null,
      '5': null,
      '6': null,
      '7': { ...Pawn, team: 'black', selected: false },
      '8': { ...Knight, team: 'black', selected: false },
   },
   h: {
      '1': { ...Rook, team: 'white', selected: false },
      '2': { ...Pawn, team: 'white', selected: false },
      '3': null,
      '4': null,
      '5': null,
      '6': null,
      '7': { ...Pawn, team: 'black', selected: false },
      '8': { ...Rook, team: 'black', selected: false },
   },
} as IBoard;

export const boardRows = Object.keys(initialData).map((r) => r as keyof IBoard);
export const boardCells = Object.keys(initialData.a).map(
   (c) => c as unknown as ICell,
);

export const board$ = new BehaviorSubject<IBoard>(initialData);
