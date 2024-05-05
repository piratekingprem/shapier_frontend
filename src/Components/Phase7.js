import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Phase7.css";
import axios from 'axios'
export default function Phase7({ filepath, heading }) {
  console.log(filepath);
  useEffect(() => {
    // Add event listener to prevent focus outline on click
    const handleFocus = () => {
      document.addEventListener("mousedown", (event) => {
        if (event.target.classList.contains("product-link")) {
          event.target.blur(); // Remove focus
        }
      });
    };

    handleFocus();

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleFocus);
    };
  }, []);

  return (
    <>
      <div className="Tradning_product_page">
        <div className="d-flex" style={{justifyContent: "center"}}>
          <h3 className="heading_name_tranding_product">{heading}</h3>
        
        </div>
        <div
          className="container Trending_product_container"
          style={{ borderRadius: "15px 15px 0 0" }}
        >
          {filepath.map((product) => (
              <div className="tranding_page_Card">
                <img
                  className="trending_product_img"
                  src={product.image}
                  alt={product.name}
                />
                <p className="tranding_page_product_name">
                  {product.name.length > 50
                    ? `${product.name.slice(0, 5)}...`
                    : product.name}
                </p>
                <div className="price_section">
                  <div className="tranding_product_text_box_2">
                    <p className="tranding_page_product_price">Price</p>
                    <p className="tranding_page_product_price">Rs.380</p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </>
  );
}
