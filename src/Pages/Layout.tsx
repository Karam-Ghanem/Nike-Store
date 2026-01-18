import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Container
        // padding={{
        //   base: "0 10px",
        //   sm: "0 30px",
        //   md: "0 60px",
        //   lg: "0 60px",
        //   xl: "0 10px",
        // }}
      >
        <Outlet />
      </Container>

      <Footer />
    </>
  );
};

export default Layout;
