import React, { useEffect, useState } from "react";
import axios from "axios";
import Phase3BrandImage from "./Phase3BrandImage";
import "../css/Phase3.css";

const Phase3 = () => {
  const [brands, setBrands] = useState([]);
  const [BrandItems, setBrandItems] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  const fetchBrands = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/v1/product_brand`);
      const arrayOfBrands = data.data;
      setBrands(arrayOfBrands);
      setBrandItems(arrayOfBrands.map((brand) => ({ product_image: brand.product_image, product_name: brand.product_brand_name })));
    } catch (error) {
      console.log('Error while fetching brands: ' + error);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let productsToDisplay = [];

      if (screenWidth < 992 && screenWidth >= 768) {
        productsToDisplay = BrandItems.slice(0, 6);
      } else if (screenWidth < 768 && screenWidth >= 416) {
        productsToDisplay = BrandItems.slice(0, 4);
      } else if (screenWidth < 416) {
        productsToDisplay = BrandItems.slice(0, 3);
      } else {
        productsToDisplay = BrandItems;
      }

      setDisplayedProducts(productsToDisplay);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [BrandItems]);

  return (
    <div className="brand-container">
      <div className="ph3-container">
        <h2>India's Most Popular Brands</h2>
        <h5 className="brand-small-text mb-3">That’s what you get when you choose</h5>
        <h2>SHAPIER</h2>
        <button className="explore-button mt-4">Explore Now</button>
      </div>

      <div className="ph3-image-row">
        {displayedProducts.map((item, index) => (
          <Phase3BrandImage key={index} imgSrc={item.product_image} />
        ))}
      </div>
    </div>
  );
};


export default Phase3;
