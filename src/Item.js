import React from "react";

const item = props => {
  let linksCSS = ["Item--ShareLinks"];
  let saleCSS = "DisplayNone";
  let priceCSS = null;
  let itemName = props.itemName;
  let priceSale = null;
  let shipping = null;
  if (props.showShareOptions) linksCSS.push("DisplayNone");
  if (props.sale < 100) {
    priceSale = (Number(props.price) * Number(props.sale)).toFixed(2);
    saleCSS = "Item--SalePrice";
    priceCSS = "Item--Price_LineThrough";
  }
  if (props.freeShipping) {
    itemName = props.itemName + " | FreeShipping";
    shipping = " FREESHIPING";
  }

  return (
    <div className="Item--Container">
      <div className="Item--ImageContainer">
        <img src={props.image} alt={props.itemName} className="Item--Image" />
        <button className="Item--ColorsButton">MORE COLORS</button>
      </div>
      <div className="Item--InfoContainer">
        <div className={linksCSS.join(" ")}>
          <p>Links</p>
        </div>
        <div className="Item--Info">
          <div className="Item--Name">
            <h4>{itemName}</h4>
          </div>
          <div className="Item--PriceContainer">
            <p>
              <span className={saleCSS}>{priceSale} </span>
              <span className={priceCSS}>{props.price} </span>
              <span className="Item--Shipping">{shipping}</span>
            </p>
          </div>
        </div>
        <div className="Item--ButtonsContainer">
          <button className="Item--Buttons" onClick={props.onUpClickHandler}>
            {props.linksText}
          </button>
          <button className="Item--Buttons" onClick={props.likesHandler}>
            Likes {props.likes}
          </button>
        </div>
      </div>
    </div>
  );
};

export default item;
