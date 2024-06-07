/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
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
} from "./EditProductModal.styled";

const EditProductModal = ({ isOpen, onClose, product, onSave }) => {
  const [editedProduct, setEditedProduct] = useState({
    name: "",
    category: "",
    stock: 0,
    suppliers: "",
    price: 0,
  });

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
                name="name"
                value={editedProduct.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Category</Label>
              <Input
                type="text"
                name="category"
                value={editedProduct.category}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Stock</Label>
              <Input
                type="number"
                name="stock"
                value={editedProduct.stock}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Suppliers</Label>
              <Input
                type="text"
                name="suppliers"
                value={editedProduct.suppliers}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Price</Label>
              <Input
                type="number"
                name="price"
                step="0.01"
                value={editedProduct.price}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <Button type="submit">Save</Button>
            <Button type="button" onClick={onClose}>
              Cancel
            </Button>
          </Form>
        </ModalContent>
      </Modal>
    )
  );
};

export default EditProductModal;
