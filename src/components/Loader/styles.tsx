import LoaderProps from '@/types/loaderProps';
import styled from 'styled-components';

const getImgSize = (width?: string) => {
  const parsedWidth = width ? parseInt(width, 10) : 100;
  return parsedWidth < 100 ? '20px' : '70px';
};

const Loader = styled.div<LoaderProps>`
  width: ${(props) => (props.width ? props.width : '100px')};
  height: ${(props) => (props.height ? props.height : '100px')};
  display: ${(props) => (props.loaded ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  img {
    width: ${(props) => getImgSize(props.width)};
    height: ${(props) => getImgSize(props.width)};
  }

  @media (max-width: 1200px) {
    width: ${(props) => (props.width === '497px' ? '350px' : props.width)};
    height: ${(props) => (props.width === '497px' ? '570px' : props.height)};
  }

  @media (max-width: 992px) {
    width: ${(props) => (props.width === '497px' ? '100%' : props.width)};
    height: ${(props) => (props.width === '497px' ? '570px' : props.height)};
  }
`;

export default Loader;
