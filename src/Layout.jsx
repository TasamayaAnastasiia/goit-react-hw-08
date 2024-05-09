import { Suspense } from 'react';
import { AppBar } from './components/AppBar/AppBar';

export const Layout = ({ children }) => {
  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};