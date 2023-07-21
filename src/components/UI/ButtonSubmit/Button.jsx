import styled from 'styled-components';

const StyledButton = styled.button.attrs((props) => ({
  primary: props.primary || false,
}))`
  /* background: linear-gradient(180deg, #1f584b, #17493d); */
  background: ${(props) => (props.primary ? '#17493d' : 'transparent')};
  padding: ${(props) => (props.primary ? '0.5rem 1rem' : '')};

  border: none;
  border-radius: 0.25rem;
  color: #c2e9e0;
  cursor: pointer;
  font-family: 'Roboto Condensed', sans-serif;

  &:hover {
    /* background: linear-gradient(180deg, #1b5346, #113c32); */
    background: ${(props) => (props.primary ? '#1b5346' : 'transparent')};
    color: ${(props) => (props.primary ? '#c2e9e0' : '#91e1d0')};
  }
`;

export const Button = ({ typeParam, children, primary }) => {
  return (
    <StyledButton type={typeParam} primary={primary}>
      {children}
    </StyledButton>
  );
};
