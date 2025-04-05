import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navigation/Navbar';
import { Footer } from '@/components/Footer';

export function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-14"> {/* Reduced padding-top */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
