import BlackBishop from '../../assets/visuals/blackBishop.svg?react';
import BlackKing from '../../assets/visuals/blackKing.svg?react';
import BlackKnight from '../../assets/visuals/blackKnight.svg?react';
import BlackPawn from '../../assets/visuals/blackPawn.svg?react';
import BlackQueen from '../../assets/visuals/blackQueen.svg?react';
import BlackRook from '../../assets/visuals/blackRook.svg?react';
import WhiteBishop from '../../assets/visuals/whiteBishop.svg?react';
import WhiteKing from '../../assets/visuals/whiteKing.svg?react';
import WhiteKnight from '../../assets/visuals/whiteKnight.svg?react';
import WhitePawn from '../../assets/visuals/whitePawn.svg?react';
import WhiteQueen from '../../assets/visuals/whiteQueen.svg?react';
import WhiteRook from '../../assets/visuals/whiteRook.svg?react';

export type PieceProps = {
   piece?: 'king' | 'rook' | 'bishop' | 'queen' | 'knight' | 'pawn';
   color?: 'white' | 'black';
   size?: number;
};

export const Piece = ({ piece, color, size = 64 }: PieceProps) => {
   if (color === 'white') {
      switch (piece) {
         case 'bishop':
            return <WhiteBishop width={size} height={size} />;
         case 'king':
            return <WhiteKing width={size} height={size} />;
         case 'knight':
            return <WhiteKnight width={size} height={size} />;
         case 'pawn':
            return <WhitePawn width={size} height={size} />;
         case 'queen':
            return <WhiteQueen width={size} height={size} />;
         case 'rook':
            return <WhiteRook width={size} height={size} />;
         default:
            return null;
      }
   }
   switch (piece) {
      case 'bishop':
         return <BlackBishop width={size} height={size} />;
      case 'king':
         return <BlackKing width={size} height={size} />;
      case 'knight':
         return <BlackKnight width={size} height={size} />;
      case 'pawn':
         return <BlackPawn width={size} height={size} />;
      case 'queen':
         return <BlackQueen width={size} height={size} />;
      case 'rook':
         return <BlackRook width={size} height={size} />;
      default:
         return null;
   }
};
