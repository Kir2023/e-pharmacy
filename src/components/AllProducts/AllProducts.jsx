/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import AddProductModal from "../AddProductModal/AddProductModal";
import EditProductModal from "../EditProductModal/EditProductModal";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
  Caption,
  Button,
  AddProductButton,
} from "./AllProducts.styled";

const AllProducts = ({ filter }) => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://e-pharmacy-backend-ez9m.onrender.com/api/products"
        );
        console.log("Fetched products:", response.data);
        if (Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
  };

  const handleEditProduct = (product) => {
    setEditedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(
        `https://e-pharmacy-backend-ez9m.onrender.com/api/products/${id}`
      );
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const filteredProducts = filter
    ? products.filter(
        (product) =>
          product.name &&
          product.name.toLowerCase().includes(filter.toLowerCase())
      )
    : products;

  return (
    <TableContainer>
      <AddProductButton onClick={() => setIsAddModalOpen(true)}>
        + Add a new product
      </AddProductButton>
      <Table>
        <Caption>All Products</Caption>
        <TableHead>
          <TableRow>
            <TableHeader>Product Info</TableHeader>
            <TableHeader>Category</TableHeader>
            <TableHeader>Stock</TableHeader>
            <TableHeader>Suppliers</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Action</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <TableRow key={product._id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.suppliers}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEditProduct(product)}>
                    Edit
                  </Button>
                  <Button onClick={() => handleDeleteProduct(product._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="6">No products available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {isAddModalOpen && (
        <AddProductModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAddProduct={handleAddProduct}
        />
      )}
      {isEditModalOpen && (
        <EditProductModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          product={editedProduct}
          onSave={(editedProduct) => {
            axios
              .put(
                `https://e-pharmacy-backend-ez9m.onrender.com/api/products/${editedProduct._id}`,
                editedProduct
              )
              .then((response) => {
                console.log("Product updated successfully:", response.data);
                setProducts(
                  products.map((product) =>
                    product._id === editedProduct._id ? editedProduct : product
                  )
                );
              })
              .catch((error) => {
                console.error("Error updating product:", error);
              })
              .finally(() => {
                setIsEditModalOpen(false);
              });
          }}
        />
      )}
    </TableContainer>
  );
};

export default AllProducts;
