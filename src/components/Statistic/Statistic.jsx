import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import {
  StatisticWrapper,
  StatisticItem,
  StatisticLabel,
  StatisticValue,
} from "./Statistic.styled";
import sprite from "../../../public/sprite.svg";

const Statistic = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://e-pharmacy-backend-ez9m.onrender.com/api/dashboard"
        );
        setData(response.data);
        console.log(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <StatisticWrapper>
      <StatisticItem>
        <StatisticLabel>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <use href={`${sprite}#icon-coins`} />
          </svg>
          All products
        </StatisticLabel>
        <StatisticValue>{data.totalProducts}</StatisticValue>
      </StatisticItem>
      <StatisticItem>
        <StatisticLabel>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <use href={`${sprite}#icon-users`} />
          </svg>
          All suppliers
        </StatisticLabel>
        <StatisticValue>{data.totalSuppliers}</StatisticValue>
      </StatisticItem>
      <StatisticItem>
        <StatisticLabel>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <use href={`${sprite}#icon-users`} />
          </svg>
          All customers
        </StatisticLabel>
        <StatisticValue>{data.totalCustomers}</StatisticValue>
      </StatisticItem>
    </StatisticWrapper>
  );
};

export default Statistic;
