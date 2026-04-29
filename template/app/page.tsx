import About from "@/Ui/About";
import Feedback from "@/Ui/Reviews";
import Hero from "@/Ui/Hero";
import { Menu } from "@/Ui/Menu";
import { Location } from "@/Ui/Location";
import { Container } from "@av-digital/components";
import { Header } from "@/components/Header";
import Galery from "@/Ui/Galery";
import Footer from "@/Ui/Footer";
import { ThemeProvider } from "@/components/Context/themeContext";

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <main className="flex flex-col dark:bg-(--bg)">
          <Header />
          <Hero />
          <Container size="xl">
            <About />
            <Menu />
            <Galery />
            <Feedback />
            <Location />
            <Footer />
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
}
