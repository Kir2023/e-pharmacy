import IncomeExpenses from "../../components/IncomeExpenses/IncomeExpenses";
import RecentCustomers from "../../components/RecentCustomers/RecentCustomers";
import Statistic from "../../components/Statistic/Statistic";
import { Container } from "../../globalStyles";

const DashboardPage = () => {
  return (
    <Container>
      <Statistic />
      <RecentCustomers/>
      <IncomeExpenses />
    </Container>
  );
};

export default DashboardPage;
