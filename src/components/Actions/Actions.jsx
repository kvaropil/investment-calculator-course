import styled from 'styled-components';

const StyledActionsDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Actions = ({ children }) => {
  return <StyledActionsDiv>{children}</StyledActionsDiv>;
};
