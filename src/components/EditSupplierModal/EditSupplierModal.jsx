/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  CloseButton,
  Form,
  Input,
  Button,
  Title,
} from "./EditSupplierModal.styled";
import { format } from "date-fns";

const EditSupplierModal = ({ onClose, supplier, onSave }) => {
  const [editedSupplier, setEditedSupplier] = useState(supplier);

  useEffect(() => {
    setEditedSupplier(supplier);
  }, [supplier]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedSupplier({ ...editedSupplier, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedSupplier);
    onClose();
    e.preventDefault();
    const formattedSupplier = {
      ...editedSupplier,
      date: new Date(editedSupplier.date).toISOString().substring(0, 10),
    };
    onSave(formattedSupplier);
    onClose();
  };

  useEffect(() => {
    setEditedSupplier({
      ...supplier,
      date: format(new Date(supplier.date), "MMMM dd, yyyy"),
    });
  }, [supplier]);

  return (
    <Modal>
      <ModalContent>
        <Title>Edit supplier</Title>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={editedSupplier.name}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="address"
            value={editedSupplier.address}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="suppliers"
            value={editedSupplier.suppliers}
            onChange={handleChange}
            required
          />
          <Input
            type="date"
            name="date"
            value={editedSupplier.date}
            onChange={handleChange}
            required
          />
          <Input
            type="number"
            name="amount"
            value={editedSupplier.amount}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="status"
            value={editedSupplier.status}
            onChange={handleChange}
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

export default EditSupplierModal;
