import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/layout/Navigation";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import GlobalStyle from "./components/styles/GlobalStyle";
import Footer from "./components/layout/Footer";
import { Wrapper } from "./components/layout/Wrapper";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Navigation />
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
