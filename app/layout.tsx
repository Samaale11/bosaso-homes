import './main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Bosaso Home Solutions',
  description: 'Premium Property Management and Matchmaking',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* We apply the #FDF1D6 cream color to the master body right here */}
      <body className="flex flex-col min-h-screen bg-[#FDF1D6] text-on-surface-variant font-inter antialiased selection:bg-secondary-fixed-dim selection:text-primary-container">
        <Header />
        
        <main className="flex-grow pt-[72px]">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}