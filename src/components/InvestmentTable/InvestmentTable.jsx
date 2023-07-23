import styled from 'styled-components';
import { InvestmentList } from './InvestmentList/InvestmentList';

const StyledTable = styled.table`
  max-width: 50rem;
  margin: 2rem auto;
  padding: 1rem;
  table-layout: fixed;
  border-spacing: 1rem;
  text-align: right;
`;

const StyledHead = styled.thead`
  font-size: 0.7rem;
  color: #83e6c0;
`;

const StyledBody = styled.tbody`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 0.85rem;
  color: #c2e9e0;
`;

export const InvestmentTable = ({ investments }) => {
  if (!investments.length) {
    return (
      <StyledTable>
        <StyledBody>
          <td>No data available.</td>
        </StyledBody>
      </StyledTable>
    );
  } else {
    return (
      <StyledTable>
        <StyledHead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </StyledHead>
        <StyledBody>
          <InvestmentList investments={investments} />
        </StyledBody>
      </StyledTable>
    );
  }
};
