/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalContent,
  CloseButton,
  Form,
  Input,
  Button,
  Title,
} from "./AddProductModal.styled";

const categories = [
  "Medicine",
  "Head",
  "Hand",
  "Dental Care",
  "Skin Care",
  "Eye Care",
  "Vitamins & Supplements",
  "Orthopedic Products",
  "Baby Care",
];

const AddProductModal = ({ isOpen, onClose, onAddProduct }) => {
  const [productInfo, setProductInfo] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [stock, setStock] = useState("");
  const [suppliers, setSuppliers] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      name: productInfo,
      category,
      stock,
      suppliers,
      price,
    };

    try {
      const response = await axios.post(
        "https://e-pharmacy-backend-ez9m.onrender.com/api/products",
        newProduct
      );
      const addedProduct = response.data;
      console.log("Added product:", addedProduct);
      onAddProduct(addedProduct);
      onClose();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && isOpen) {
      onClose();
    }
  };

  return (
    isOpen && (
      <Modal onClick={handleOverlayClick}>
        <ModalContent>
          <Title>Add a new product</Title>
          <CloseButton onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <use href="./sprite.svg#icon-cross" />
            </svg>
          </CloseButton>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              value={productInfo}
              onChange={(e) => setProductInfo(e.target.value)}
              placeholder="Product Info"
              required
            />
            <Input
              as="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </Input>
            <Input
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
            <Input
              type="text"
              value={suppliers}
              onChange={(e) => setSuppliers(e.target.value)}
              required
            />
            <Input
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <Button type="submit">Add</Button>
            <Button type="button" onClick={onClose}>
              Cancel
            </Button>
          </Form>
        </ModalContent>
      </Modal>
    )
  );
};

export default AddProductModal;
