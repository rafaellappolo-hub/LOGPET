import Header from './components/Header';
import Hero from './components/Hero';
import Rescues from './components/Rescues';
import Donations from './components/Donations';
import Blog from './components/Blog';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Rescues />
        <Donations />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}