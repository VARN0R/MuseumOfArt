import SubtitleProps from '@/types/subtitleProps';

import Container from '@components/Container/styles';
import { SubtitleStyled, TopTextStyled, UnderTextStyled } from './styles';

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
