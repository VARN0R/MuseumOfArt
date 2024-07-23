import styled from 'styled-components';

interface LoaderProps {
  width: string;
  height: string;
  loaded: boolean;
}

const Loader = styled.div<LoaderProps>`
  width: ${(props) => (props.width ? props.width : '100px')};
  height: ${(props) => (props.height ? props.height : '100px')};
  display: ${(props) => (props.loaded ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  img {
    width: ${(props) => (parseInt(props.width, 10) < 100 ? '20px' : '70px')};
    height: ${(props) => (parseInt(props.width, 10) < 100 ? '20px' : '70px')};
  }
`;

export default Loader;
