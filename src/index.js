import { createRoot } from 'react-dom/client';
import AppRouter from './AppRouter';

const root = document.getElementById('root');

if (root !== null) {
  createRoot(root).render(<AppRouter />);
}
