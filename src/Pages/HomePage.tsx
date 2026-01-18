// import Header from "@/components/Header/Header";
import { Container } from "@chakra-ui/react";
import Landing from "@/components/Landing/Landing";
// import Footer from "@/components/Footer/Footer";
const HomePage = () => {
  return (
    <>
      {/* Header */}
      {/* <Header /> */}
      <Container
        padding={{
          base: "0 10px",
          sm: "0 30px",
          md: "0 60px",
          lg: "0 60px",
          xl: "0 80px",
        }}
      >
        <Landing />
      </Container>
      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
