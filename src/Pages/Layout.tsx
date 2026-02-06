import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Container } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import '@/index.css'


const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Container>
            <Outlet />
          </Container>
        </PageTransition>
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default Layout;
