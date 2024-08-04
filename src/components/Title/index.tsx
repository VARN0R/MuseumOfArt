import Container from '@components/Container/styles';
import { TitleStyled } from './styles';

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
