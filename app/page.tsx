import Header from"./Header/Header";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-8 bg-fuchsia-200">
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
