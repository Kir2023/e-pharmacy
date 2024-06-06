import IncomeExpenses from "../../components/IncomeExpenses/IncomeExpenses";
import RecentCustomers from "../../components/RecentCustomers/RecentCustomers";
import Statistic from "../../components/Statistic/Statistic";
import { Container } from "../../globalStyles";
import { TablesWrapper } from "./DashboardPage.styled";

const DashboardPage = () => {
  return (
    <Container>
      <Statistic />
      <TablesWrapper>
        <RecentCustomers />
        <IncomeExpenses />
      </TablesWrapper>
    </Container>
  );
};

export default DashboardPage;
