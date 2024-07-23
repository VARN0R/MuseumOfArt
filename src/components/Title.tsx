import styled from 'styled-components';
import Container from './Container';

const TitleStyled = styled.div`
  font-weight: 700;
  font-size: 64px;
  text-align: center;
  color: #393939;
  width: 690px;
  margin: 120px auto 0 auto;
  span {
    color: #f17900;
  }

  @media (max-width: 768px) {
    margin-top: 60px;
    font-size: 32px;
    width: 100%;
  }
`;

const Title = () => {
  return (
    <Container>
      <TitleStyled>
        Let's Find Some <span>Art</span> Here!
      </TitleStyled>
    </Container>
  );
};

export default Title;
