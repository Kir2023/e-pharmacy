/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Modal,
  ModalContent,
  CloseButton,
  Form,
  Input,
  Button,
  Title,
  ButtonsWrapper,
  SelectWrapper,
} from "./EditProductModal.styled";

const categories = [
  "Medicine",
  "Head",
  "Hand",
  "Heart",
  "Leg",
  "Dental Care",
  "Skin Care",
  "Eye Care",
  "Vitamins & Supplements",
  "Orthopedic Products",
  "Baby Care",
];

const EditProductModal = ({ isOpen, onClose, product, onSave }) => {
  const [editedProduct, setEditedProduct] = useState({
    name: "",
    category: "",
    stock: 0,
    suppliers: "",
    price: 0,
  });
  const [selectOpen, setSelectOpen] = useState(false);

  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://e-pharmacy-backend-ez9m.onrender.com/api/products/${editedProduct._id}`,
        editedProduct
      );
      console.log("Product updated successfully:", response.data);
      onSave(editedProduct);
      onClose();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && isOpen) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, isOpen]);

  const handleSelectClick = () => {
    setSelectOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("select")) {
        setSelectOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    isOpen && (
      <Modal onClick={handleOverlayClick}>
        <ModalContent>
          <Title>Edit product</Title>
          <CloseButton onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <use href="./sprite.svg#icon-cross" />
            </svg>
          </CloseButton>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              value={editedProduct.name}
              onChange={handleChange}
              required
            />
            <SelectWrapper onClick={handleSelectClick}>
              <select
                name="category"
                value={editedProduct.category}
                onChange={handleChange}
                required
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <use
                  href={`./sprite.svg#icon-chevron-${
                    selectOpen ? "up" : "down"
                  }`}
                />
              </svg>
            </SelectWrapper>
            <Input
              type="number"
              name="stock"
              value={editedProduct.stock}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="suppliers"
              value={editedProduct.suppliers}
              onChange={handleChange}
              required
            />
            <Input
              type="number"
              name="price"
              step="0.01"
              value={editedProduct.price}
              onChange={handleChange}
              required
            />
            <ButtonsWrapper>
              <Button type="submit">Save</Button>
              <Button type="button" onClick={onClose}>
                Cancel
              </Button>
            </ButtonsWrapper>
          </Form>
        </ModalContent>
      </Modal>
    )
  );
};

export default EditProductModal;
