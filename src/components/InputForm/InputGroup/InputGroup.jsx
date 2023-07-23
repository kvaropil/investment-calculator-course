import styled from 'styled-components';
import { InputGroupItem } from '../InputItem/InputGroupItem';

const StyledInputGroupDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;
`;

const RowWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;

// Utility function to chunk an array into smaller arrays
const chunkArray = (arr, size) => {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  return chunkedArr;
};

export const InputGroup = ({ labels, onInputChange, formState }) => {
  // Divide the labels array into chunks of two items each
  const chunkedLabels = chunkArray(labels, 2);

  return (
    <StyledInputGroupDiv>
      {chunkedLabels.map((rowLabels, rowIndex) => (
        <RowWrapper key={rowIndex}>
          {rowLabels.map((label, index) => (
            <InputGroupItem
              label={label}
              key={index}
              value={formState[label]}
              onInputChange={onInputChange}
            />
          ))}
        </RowWrapper>
      ))}
    </StyledInputGroupDiv>
  );
};
