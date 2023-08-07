import React, { useEffect, useState } from "react";
import LayoutMaster from "../layouts/LayoutMaster";
import { useParams } from "react-router-dom";
import CategoryModel from "../models/CategoryModel";
import ProductItem from "../components/products/ProductItem";

function Category(props) {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  useEffect(() => {
    CategoryModel.find(id).then((res) => {
      setCategory(res.data);
    });

    CategoryModel.getProducts(id)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, [id]);
  return (
    <div className="flex-fill pl-3">
      <h6>{category.name}</h6>
      <small className="text-body">
        {products.map((product, key) => (
          <ProductItem key={key} product={product} />
        ))}
      </small>
    </div>
  );
}

export default Category;
