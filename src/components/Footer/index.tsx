import images from '@assets/images';
import Container from '@components/Container/styles';

import { FooterContent, FooterStyled, Logo, LogoCompany } from './styles';

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <FooterContent>
          <Logo>
            <img src={images.logoFooter} alt="logo footer" />
          </Logo>

          <LogoCompany>
            <img src={images.logoFooterCompany} alt="logo footer company" />
          </LogoCompany>
        </FooterContent>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
