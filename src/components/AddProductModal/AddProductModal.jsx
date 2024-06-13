/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/products/productOperations";
import {
  Modal,
  ModalContent,
  CloseButton,
  Form,
  Input,
  SelectWrapper,
  ButtonsWrapper,
  Button,
  Title,
} from "./AddProductModal.styled";
import { Notify } from "notiflix";

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

const AddProductModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [productInfo, setProductInfo] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [stock, setStock] = useState("");
  const [suppliers, setSuppliers] = useState("");
  const [price, setPrice] = useState("");
  const [selectOpen, setSelectOpen] = useState(false);

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
      const resultAction = await dispatch(addProduct(newProduct));
      if (addProduct.fulfilled.match(resultAction)) {
        Notify.success("Product added successfully");
        onClose();
      } else {
        Notify.failure("Failed to add product");
      }
    } catch (error) {
      Notify.failure("Error adding product");
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
  }, [isOpen]);

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
            <SelectWrapper onClick={handleSelectClick}>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
              step="1"
              min="1"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              placeholder="Stock"
              required
            />
            <Input
              type="text"
              value={suppliers}
              onChange={(e) => setSuppliers(e.target.value)}
              placeholder="Suppliers"
              required
            />
            <Input
              type="number"
              step="0.01"
              min="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              required
            />
            <ButtonsWrapper>
              <Button type="submit">Add</Button>
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

export default AddProductModal;
