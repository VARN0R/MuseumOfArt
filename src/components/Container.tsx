import styled from 'styled-components';

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 960px;
  }

  @media (max-width: 992px) {
    max-width: 720px;
  }

  @media (max-width: 768px) {
    max-width: 540px;
  }

  @media (max-width: 576px) {
    max-width: 100%;
    padding: 0 8px;
  }
`;

export default Container;
