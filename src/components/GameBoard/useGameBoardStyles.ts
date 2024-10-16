import { makeStyles } from '@fluentui/react-components';

export const useGameBoardStyles = makeStyles({
   container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
   },
   row: {
      display: 'flex',
      flexDirection: 'column-reverse',
   },
   titleContainer: {
      display: 'flex',
      flexDirection: 'column-reverse',
   },
   rowTitle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100px',
      height: '100px',
   },
});
