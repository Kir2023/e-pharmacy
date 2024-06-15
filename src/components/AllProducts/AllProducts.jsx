/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  deleteProduct,
  addProduct,
  updateProduct,
} from "../../redux/products/productOperations";
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
  EditButton,
  DeleteButton,
  AddProductButton,
} from "./AllProducts.styled";
import Pagination from "../Pagination/Pagination";
import { Notify } from "notiflix";
import TableLoader from "../TableLoader/TableLoader";

const AllProducts = ({ filter }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const productsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(fetchProducts());
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const handleAddProduct = async (newProduct) => {
    try {
      const resultAction = await dispatch(addProduct(newProduct));
      if (addProduct.fulfilled.match(resultAction)) {
        Notify.success("Product added successfully");
      } else {
        Notify.failure("Failed to add product:", resultAction.payload);
      }
    } catch (error) {
      Notify.failure("Error adding product");
    }
    setIsAddModalOpen(false);
  };

  const handleEditProduct = (product) => {
    setEditedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleSaveProduct = async (editedProduct) => {
    try {
      const resultAction = await dispatch(updateProduct(editedProduct));
      if (updateProduct.fulfilled.match(resultAction)) {
        Notify.success("Product updated successfully");
      } else {
        Notify.failure("Failed to update product");
      }
    } catch (error) {
      Notify.failure("Error updating product");
    }
    setIsEditModalOpen(false);
  };

  const handleDeleteProduct = async (id) => {
    try {
      const resultAction = await dispatch(deleteProduct(id));
      if (deleteProduct.fulfilled.match(resultAction)) {
        Notify.success("Product deleted successfully");
      } else {
        Notify.failure("Failed to delete product");
      }
    } catch (error) {
      Notify.failure("Error deleting product");
    }
  };

  const filteredProducts = filter
    ? products.filter(
        (product) =>
          product.name &&
          product.name.toLowerCase().includes(filter.toLowerCase())
      )
    : products;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <TableContainer>
      <AddProductButton onClick={() => setIsAddModalOpen(true)}>
        <div className="circle">+</div>
        Add a new product
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
          {loading ? (
            <TableRow>
              <TableCell colSpan="6" style={{ textAlign: "center" }}>
                <TableLoader />
              </TableCell>
            </TableRow>
          ) : (
            currentProducts.map((product) => (
              <TableRow key={product._id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.suppliers}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <span>
                    <EditButton onClick={() => handleEditProduct(product)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <use href="./sprite.svg#icon-pencil" />
                      </svg>
                    </EditButton>
                    <DeleteButton
                      onClick={() => handleDeleteProduct(product._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <use href="./sprite.svg#icon-trash" />
                      </svg>
                    </DeleteButton>
                  </span>
                </TableCell>
              </TableRow>
            ))
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
          onSave={handleSaveProduct}
        />
      )}
      {filteredProducts.length > productsPerPage && (
        <Pagination
          totalItems={filteredProducts.length}
          itemsPerPage={productsPerPage}
          currentPage={currentPage}
          paginate={paginate}
        />
      )}
    </TableContainer>
  );
};

export default AllProducts;
