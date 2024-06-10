/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Modal,
  ModalContent,
  CloseButton,
  Form,
  Input,
  Button,
  Title,
} from "./AddSupplierModal.styled";
import { format } from "date-fns";

const AddSupplierModal = ({ onClose, onSave }) => {
  const [newSupplier, setNewSupplier] = useState({
    name: "",
    address: "",
    suppliers: "",
    date: "",
    amount: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSupplier({ ...newSupplier, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedSupplier = {
      ...newSupplier,
      date: format(new Date(newSupplier.date), "MMMM dd, yyyy"),
    };
    onSave(formattedSupplier);
    onClose();
  };

  return (
    <Modal>
      <ModalContent>
        <Title>Add a new supplier</Title>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={newSupplier.name}
            onChange={handleChange}
            placeholder="Suppliers Info"
            required
          />
          <Input
            type="text"
            name="address"
            value={newSupplier.address}
            onChange={handleChange}
            placeholder="Address"
            required
          />
          <Input
            type="text"
            name="suppliers"
            value={newSupplier.suppliers}
            onChange={handleChange}
            placeholder="Company"
            required
          />
          <Input
            type="date"
            name="date"
            value={newSupplier.date}
            onChange={handleChange}
            placeholder="Delivery Date"
            required
          />
          <Input
            type="number"
            name="amount"
            value={newSupplier.amount}
            onChange={handleChange}
            placeholder="Amount"
            required
          />
          <Input
            type="text"
            name="status"
            value={newSupplier.status}
            onChange={handleChange}
            placeholder="Status"
            required
          />
          <Button type="submit">Save</Button>
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
        </Form>
      </ModalContent>
    </Modal>
  );
};

export default AddSupplierModal;
