import Navbar from "../navbar/NavBar";
import { ContentContainerStyled, LayoutContainerStyled } from "./LayoutStyles";

function Layout({ children }) {
  return (
    <LayoutContainerStyled>
      <Navbar />
      <ContentContainerStyled>{children}</ContentContainerStyled>
    </LayoutContainerStyled>
  );
}

export default Layout;
