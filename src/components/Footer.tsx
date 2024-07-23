import styled from 'styled-components';
import Container from './Container';
import logoFooter from '../assets/img/logoFooter.svg';
import logoFooterCompany from '../assets/img/logoFooterCompany.svg';

const FooterStyled = styled.footer`
  height: 127px;
  padding: 32px 0;
  background: #fff;
  margin-top: 120px;
  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  width: 206px;
  height: 63px;
`;

const LogoCompany = styled.div`
  width: 164px;
  height: 59px;
`;

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
