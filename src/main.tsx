import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import {
   FluentProvider,
   webLightTheme,
   Spinner,
} from '@fluentui/react-components';

const App = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root')!).render(
   <FluentProvider theme={webLightTheme}>
      <Suspense fallback={<Spinner />}>
         <App />
      </Suspense>
   </FluentProvider>,
);
