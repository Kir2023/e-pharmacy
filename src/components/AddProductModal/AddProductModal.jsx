/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalContent,
  CloseButton,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
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
      onAddProduct(addedProduct); // Вызываем обратный вызов с новым продуктом
      onClose();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    isOpen && (
      <Modal>
        <ModalContent>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Product Info</Label>
              <Input
                type="text"
                value={productInfo}
                onChange={(e) => setProductInfo(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Category</Label>
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
            </FormGroup>
            <FormGroup>
              <Label>Stock</Label>
              <Input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Suppliers</Label>
              <Input
                type="text"
                value={suppliers}
                onChange={(e) => setSuppliers(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Price</Label>
              <Input
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </FormGroup>
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
