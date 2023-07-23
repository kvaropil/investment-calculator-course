import styled from 'styled-components';

const StyledHeader = styled.header`
  text-align: center;
  margin: 3rem auto;

  & h1 {
    font-size: 1.5rem;
  }

  & img {
    width: 5rem;
    height: 5rem;
    object-fit: contain;
    background-color: transparent;
  }
`;

export const Header = ({ src, children }) => {
  return (
    <StyledHeader>
      <img src={src} alt='logo' />
      <h1>{children}</h1>
    </StyledHeader>
  );
};
