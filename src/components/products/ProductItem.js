import React from "react";
import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/action";

function ProductItem({ product }) {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const image = "http://127.0.0.1:8000/";

  const handleAddToCart = () => {
    // Chuẩn bị thông tin sản phẩm cần thêm vào giỏ hàng
    let item = {
      product_id: product.id,
      quantity: 1, // Số lượng sản phẩm mặc định là 1 (bạn có thể thay đổi nếu muốn)
      product: product,
    };
    if(product.id === cart.product) {
      product.quantity += 1;
      }else{
      // Gửi thông tin sản phẩm đến Redux store thông qua action addToCart
      dispatch(addToCart(item));
    }
  };

  return (
    <>
      <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
          <img className="img-fluid w-100" src={image + product.image} alt="" />
          <div className="product-action">
            <button onClick={handleAddToCart} className="btn btn-outline-dark btn-square" href="">
              <i className="fa fa-shopping-cart" />
            </button>
            <Link
              to={"/detail/" + product.id}
              className="btn btn-outline-dark btn-square"
            >
              <i className="fa fa-search" />
            </Link>
          </div>
        </div>
        <div className="text-center py-4">
          <a className="h6 text-decoration-none text-truncate" href="">
            {product.name}
          </a>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>
              <NumericFormat
                value={product.price}
                allowLeadingZeros
                thousandSeparator="."
                decimalSeparator=","
                displayType="text"
              />{" "}
                VND
            </h5>
            <h6 className="text-muted ml-2">
              <del>$123.00</del>
            </h6>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small>(99)</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
