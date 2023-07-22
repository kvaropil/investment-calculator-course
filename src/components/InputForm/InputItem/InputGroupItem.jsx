import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 0.5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #76c0ae;
  border-radius: 0.25rem;
  background-color: transparent;
  color: #c2e9e0;
  font-size: 1rem;
`;

export const InputGroupItem = ({ label }) => {
  return (
    <p>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type='number'
        data-test-id={`data-test-${label.split(' ')[0]}-input`}
      />
    </p>
  );
};
