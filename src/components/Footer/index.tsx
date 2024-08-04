import logoFooter from '@assets/img/logoFooter.svg';
import logoFooterCompany from '@assets/img/logoFooterCompany.svg';

import Container from '@components/Container/styles';
import { FooterContent, FooterStyled, Logo, LogoCompany } from './styles';

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <FooterContent>
          <Logo>
            <img src={logoFooter} alt="logo footer" />
          </Logo>

          <LogoCompany>
            <img src={logoFooterCompany} alt="logo footer company" />
          </LogoCompany>
        </FooterContent>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
