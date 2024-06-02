// const CustomersDataPage = () => {
//   return (
//     <div>CustomersDataPage</div>
//   )
// }

// export default CustomersDataPage

import { useState, useEffect } from "react";
import axios from "axios";

const CustomersDataPage = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://e-pharmacy-backend-ez9m.onrender.com/api/customers"
        );
        setCustomers(response.data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchData(); 
  }, []);

  return (
    <div>
      <h1>Customers Data</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer._id}>
            {customer.name} - {customer.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomersDataPage;
