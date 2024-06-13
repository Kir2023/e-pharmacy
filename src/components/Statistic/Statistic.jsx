import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StatisticWrapper,
  StatisticItem,
  StatisticLabel,
  StatisticValue,
} from "./Statistic.styled";
import sprite from "../../../public/sprite.svg";
import { fetchDashboard } from "../../redux/dashboard/dashboardOperations";

const Statistic = () => {
  const dispatch = useDispatch();
  const { totalProducts, totalSuppliers, totalCustomers } = useSelector(
    (state) => state.dashboard
  );

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

  return (
    <StatisticWrapper>
      <StatisticItem>
        <StatisticLabel>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <use href={`${sprite}#icon-coins`} />
          </svg>
          All products
        </StatisticLabel>
        <StatisticValue>{totalProducts}</StatisticValue>
      </StatisticItem>
      <StatisticItem>
        <StatisticLabel>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <use href={`${sprite}#icon-users`} />
          </svg>
          All suppliers
        </StatisticLabel>
        <StatisticValue>{totalSuppliers}</StatisticValue>
      </StatisticItem>
      <StatisticItem>
        <StatisticLabel>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <use href={`${sprite}#icon-users`} />
          </svg>
          All customers
        </StatisticLabel>
        <StatisticValue>{totalCustomers}</StatisticValue>
      </StatisticItem>
    </StatisticWrapper>
  );
};

export default Statistic;
