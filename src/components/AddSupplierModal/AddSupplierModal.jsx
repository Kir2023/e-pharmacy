/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Modal,
  ModalContent,
  CloseButton,
  Form,
  Input,
  DatePickerWrapper,
  Button,
  Title,
  ButtonsWrapper,
  SelectWrapper,
} from "./AddSupplierModal.styled";

const statuses = ["Active", "Deactive"];

const AddSupplierModal = ({ onClose, onSave }) => {
  const [newSupplier, setNewSupplier] = useState({
    name: "",
    address: "",
    suppliers: "",
    date: null,
    amount: "",
    status: "Active",
  });
  const datePickerRef = useRef(null);
  const modalRef = useRef(null);
  const [selectOpen, setSelectOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSupplier({ ...newSupplier, [name]: value });
  };

  const handleDateChange = (date) => {
    setNewSupplier({ ...newSupplier, date });
  };

  const handleCalendarIconClick = () => {
    datePickerRef.current.setOpen(true);
  };

  const handleOverlayClick = (e) => {
    if (e.target === modalRef.current) {
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
      ...newSupplier,
      date: newSupplier.date ? newSupplier.date.toISOString() : "",
      status: newSupplier.status, // Используем статус из состояния newSupplier
    };
    onSave(formattedSupplier);
    onClose();
  };

  const handleSelectChange = (e) => {
    setNewSupplier({ ...newSupplier, status: e.target.value });
  };

  const handleSelectClick = () => {
    setSelectOpen((prev) => !prev);
  };

  return (
    <Modal ref={modalRef} onClick={handleOverlayClick}>
      <ModalContent>
        <Title>Add Supplier</Title>
        <CloseButton onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <use href="./sprite.svg#icon-cross" />
          </svg>
        </CloseButton>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={newSupplier.name}
            onChange={handleChange}
            placeholder="Name"
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
          <DatePickerWrapper>
            <DatePicker
              selected={newSupplier.date}
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
            type="text"
            name="amount"
            value={newSupplier.amount}
            onChange={handleChange}
            placeholder="Amount"
            required
          />
          <SelectWrapper onClick={handleSelectClick}>
            <select
              value={newSupplier.status}
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

export default AddSupplierModal;
