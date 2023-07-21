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

export const Header = ({ src, text }) => {
  return (
    <StyledHeader>
      <img src={src} alt='logo' />
      <h1>{text}</h1>
    </StyledHeader>
  );
};
