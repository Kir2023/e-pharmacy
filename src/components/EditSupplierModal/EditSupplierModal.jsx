/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import {
  Modal,
  ModalContent,
  CloseButton,
  Form,
  Input,
  Button,
  Title,
  ButtonsWrapper,
  DatePickerWrapper,
  SelectWrapper,
} from "./EditSupplierModal.styled";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const statuses = ["Active", "Deactive"];

const EditSupplierModal = ({ onClose, supplier, onSave }) => {
  const [editedSupplier, setEditedSupplier] = useState({
    ...supplier,
    date: supplier.date ? new Date(supplier.date) : null,
    status: supplier.status || "Active",
  });
  const datePickerRef = useRef(null);
  const [selectOpen, setSelectOpen] = useState(false);

  useEffect(() => {
    setEditedSupplier({
      ...supplier,
      date: supplier.date ? new Date(supplier.date) : null,
      status: supplier.status || "Active",
    });
  }, [supplier]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedSupplier({ ...editedSupplier, [name]: value });
  };

  const handleDateChange = (date) => {
    setEditedSupplier({ ...editedSupplier, date });
  };

  const handleCalendarIconClick = () => {
    datePickerRef.current.setOpen(true);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEscapeKeyPress = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKeyPress);
    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedSupplier = {
      ...editedSupplier,
      date: editedSupplier.date ? editedSupplier.date.toISOString() : "",
    };
    onSave(formattedSupplier);
    onClose();
  };

  const handleSelectClick = () => {
    setSelectOpen((prev) => !prev);
  };

  const handleSelectChange = (e) => {
    setEditedSupplier({ ...editedSupplier, status: e.target.value });
  };

  return (
    <Modal onClick={handleOverlayClick}>
      <ModalContent>
        <Title>Edit Supplier</Title>
        <CloseButton onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <use href="./sprite.svg#icon-cross" />
          </svg>
        </CloseButton>
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
          <DatePickerWrapper>
            <ReactDatePicker
              selected={editedSupplier.date}
              onChange={handleDateChange}
              placeholderText="Delivery Date"
              dateFormat="MMMM dd, yyyy"
              className="date-picker-input"
              ref={datePickerRef}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="date-picker-icon"
              onClick={handleCalendarIconClick}
            >
              <use href="./sprite.svg#icon-calendar" />
            </svg>
          </DatePickerWrapper>
          <Input
            type="number"
            name="amount"
            value={editedSupplier.amount}
            onChange={handleChange}
            required
          />
          <SelectWrapper onClick={handleSelectClick}>
            <select
              value={editedSupplier.status}
              onChange={handleSelectChange}
              required
            >
              {statuses.map((stat) => (
                <option key={stat} value={stat}>
                  {stat}
                </option>
              ))}
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <use
                href={`./sprite.svg#icon-chevron-${selectOpen ? "up" : "down"}`}
              />
            </svg>
          </SelectWrapper>
          <ButtonsWrapper>
            <Button type="submit">Save</Button>
            <Button type="button" onClick={onClose}>
              Cancel
            </Button>
          </ButtonsWrapper>
        </Form>
      </ModalContent>
    </Modal>
  );
};

export default EditSupplierModal;
