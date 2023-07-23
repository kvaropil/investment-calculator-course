export const InvestmentListItem = ({ investment }) => {
  return (
    <tr>
      <td>{investment.year}</td>
      <td>{investment.totalSavings}</td>
      <td>{investment.interestYear}</td>
      <td>{investment.interestTotal}</td>
      <td>{investment.investedCapital}</td>
    </tr>
  );
};
