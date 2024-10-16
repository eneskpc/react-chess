import { makeStyles, shorthands } from '@fluentui/react-components';

export const useCellStyles = makeStyles({
   cell: {
      ...shorthands.border('none'),
      width: '100px',
      height: '100px',
      position: 'relative',
      '&.white': {
         backgroundColor: '#fff',
      },
      '&.black': {
         backgroundColor: '#B7C0D8',
      },
      ':hover': {
         backgroundColor: '#7B61FF',
         opacity: 0.75,
         ':active': {
            backgroundColor: '#7B61FF',
            opacity: 1,
         },
      },
      '&.selected': {
         backgroundColor: '#7B61FF',
         opacity: 1,
      },
   },
   piece: {
      zIndex: 3,
   },
   possiblyPoint: {
      position: 'absolute',
      top: '25px',
      left: '25px',
      width: '50px',
      height: '50px',
      backgroundColor: '#7B61FF',
      ...shorthands.borderRadius('100%'),
   },
});
