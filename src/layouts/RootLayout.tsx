import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navigation/Navbar';
import { Footer } from '@/components/Footer';

export function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 sm:pt-20"> {/* Added padding-top to account for fixed navbar */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
