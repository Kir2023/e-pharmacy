/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import AddSupplierModal from "../AddSupplierModal/AddSupplierModal";
import EditSupplierModal from "../EditSupplierModal/EditSupplierModal";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  AddButton,
  TableContainer,
  Caption,
  EditButton,
} from "./AllSuppliers.styled";
import { format } from "date-fns";
import Pagination from "../Pagination/Pagination";

const AllSuppliers = ({ filter }) => {
  const [suppliers, setSuppliers] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const suppliersPerPage = 5;

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const response = await axios.get(
        "https://e-pharmacy-backend-ez9m.onrender.com/api/suppliers"
      );
      const formattedSuppliers = response.data.map((supplier) => ({
        ...supplier,
        date: format(new Date(supplier.date), "MMMM dd, yyyy"),
      }));
      setSuppliers(formattedSuppliers);
    } catch (error) {
      console.error("Error fetching suppliers:", error);
    }
  };

  const handleAddSupplier = async (newSupplier) => {
    try {
      const response = await axios.post(
        "https://e-pharmacy-backend-ez9m.onrender.com/api/suppliers",
        newSupplier
      );
      setSuppliers([...suppliers, response.data]);
      fetchSuppliers();
    } catch (error) {
      console.error("Error adding supplier:", error);
    }
  };

  const handleEditSupplier = async (updatedSupplier) => {
    try {
      const response = await axios.put(
        `https://e-pharmacy-backend-ez9m.onrender.com/api/suppliers/${updatedSupplier._id}`,
        updatedSupplier
      );
      const updatedSuppliers = suppliers.map((supplier) =>
        supplier._id === updatedSupplier._id ? response.data : supplier
      );
      setSuppliers(updatedSuppliers);
      fetchSuppliers();
    } catch (error) {
      console.error("Error editing supplier:", error);
    }
  };

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const openEditModal = (supplier) => {
    setSelectedSupplier(supplier);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => setIsEditModalOpen(false);

  const filteredSuppliers = filter
    ? suppliers.filter(
        (supplier) =>
          supplier.name &&
          supplier.name.toLowerCase().includes(filter.toLowerCase())
      )
    : suppliers;

  const indexOfLastSupplier = currentPage * suppliersPerPage;
  const indexOfFirstSupplier = indexOfLastSupplier - suppliersPerPage;
  const currentSuppliers = filteredSuppliers.slice(
    indexOfFirstSupplier,
    indexOfLastSupplier
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <TableContainer>
      <AddButton onClick={openAddModal}>Add a new suppliers</AddButton>
      <Table>
        <Caption>All Suppliers</Caption>
        <TableHead>
          <TableRow>
            <TableHeader>Suppliers Info</TableHeader>
            <TableHeader>Address</TableHeader>
            <TableHeader>Company</TableHeader>
            <TableHeader>Delivery Date</TableHeader>
            <TableHeader>Ammount</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Action</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentSuppliers.map((supplier) => (
            <TableRow key={supplier._id}>
              <TableCell>{supplier.name}</TableCell>
              <TableCell>{supplier.address}</TableCell>
              <TableCell>{supplier.suppliers}</TableCell>
              <TableCell>{supplier.date}</TableCell>
              <TableCell>{supplier.amount}</TableCell>
              <TableCell type={supplier.status}>
                <span>{supplier.status}</span>
              </TableCell>
              <TableCell>
                <EditButton onClick={() => openEditModal(supplier)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <use href="./sprite.svg#icon-small-pencil" />
                  </svg>
                  Edit
                </EditButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isAddModalOpen && (
        <AddSupplierModal onClose={closeAddModal} onSave={handleAddSupplier} />
      )}
      {isEditModalOpen && (
        <EditSupplierModal
          onClose={closeEditModal}
          supplier={selectedSupplier}
          onSave={handleEditSupplier}
        />
      )}
      {filteredSuppliers.length > suppliersPerPage && (
        <Pagination
          totalItems={filteredSuppliers.length}
          itemsPerPage={suppliersPerPage}
          currentPage={currentPage}
          paginate={paginate}
        />
      )}
    </TableContainer>
  );
};

export default AllSuppliers;
