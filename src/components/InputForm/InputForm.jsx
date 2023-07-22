import styled from 'styled-components';

const StyledForm = styled.form`
  padding: 1rem;
  max-width: 30rem;
  margin: 2rem auto;
  border-radius: 4px;
  background: linear-gradient(180deg, #307e6c, #2b996d);
`;

export const InputForm = ({ children }) => {
  return <StyledForm>{children}</StyledForm>;
};
