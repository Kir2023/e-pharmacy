/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSuppliers,
  addSupplier,
  updateSupplier,
} from "../../redux/suppliers/suppliersOperations";
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
import Pagination from "../Pagination/Pagination";
import { Notify } from "notiflix";
import TableLoader from "../TableLoader/TableLoader";

const AllSuppliers = ({ filter }) => {
  const dispatch = useDispatch();
  const suppliers = useSelector((state) => state.suppliers.items);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const suppliersPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(fetchSuppliers());
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const handleAddSupplier = async (newSupplier) => {
    try {
      await dispatch(addSupplier(newSupplier)).unwrap();
      dispatch(fetchSuppliers());
      Notify.success("Supplier successfully added");
    } catch (error) {
      Notify.failure("Error adding supplier");
    }
  };

  const handleEditSupplier = async (updatedSupplier) => {
    try {
      await dispatch(updateSupplier(updatedSupplier)).unwrap();
      dispatch(fetchSuppliers());
      Notify.success("Supplier successfully edited");
    } catch (error) {
      Notify.failure("Error editing supplier");
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
      <AddButton onClick={openAddModal}>Add a new supplier</AddButton>
      <Table>
        <Caption>All Suppliers</Caption>
        <TableHead>
          <TableRow>
            <TableHeader>Supplier Info</TableHeader>
            <TableHeader>Address</TableHeader>
            <TableHeader>Company</TableHeader>
            <TableHeader>Delivery Date</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Action</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan="7" style={{ textAlign: "center" }}>
                <TableLoader />
              </TableCell>
            </TableRow>
          ) : (
            currentSuppliers.map((supplier) => (
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
            ))
          )}
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
