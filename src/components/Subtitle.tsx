import styled from 'styled-components';
import Container from './Container';
import SubtitleProps from '../types/SubtitleProps';

const SubtitleStyled = styled.div`
  margin: 120px auto 0 auto;
`;

const TopTextStyled = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #e0a449;
  text-align: center;
`;

const UnderTextStyled = styled.div`
  font-weight: 400;
  font-size: 32px;
  color: #393939;
  text-align: center;
`;

const Subtitle: React.FC<SubtitleProps> = (props) => {
  const { topText, underText } = props;

  return (
    <Container>
      <SubtitleStyled>
        <TopTextStyled>{topText}</TopTextStyled>
        <UnderTextStyled>{underText}</UnderTextStyled>
      </SubtitleStyled>
    </Container>
  );
};

export default Subtitle;
