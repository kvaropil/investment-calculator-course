import { InvestmentListItem } from '../InvestmentListItem/InvestmentListItem';

export const InvestmentList = ({ investments }) => {
  return investments.map((investment, i) => {
    return <InvestmentListItem investment={investment} key={i} />;
  });
};
