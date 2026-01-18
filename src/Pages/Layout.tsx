import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import '@/index.css'


const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>

      <Footer />
    </>
  );
};

export default Layout;
