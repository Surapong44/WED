import React from 'react'
import ProductImg from "../../assets/images/arm-chair-01.jpg"

const ProductCard = () => {
  return (
    <div>
      <div className="product__item">
        <div className="product__img">
          <img src={ProductImg} alt="ProductImg" />
        </div>
        <h3 className="product__name">Modern Armchair</h3>
        <span>Chair</span>
        <div className="product__card-bottom">
          <span className="price">
            $299
          </span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard