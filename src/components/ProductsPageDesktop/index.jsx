import React from "react";
import HomeButton5 from "../HomeButton5";
import TextField from "../TextField";
import Button2 from "../Button2";
import CartButton5 from "../CartButton5";
import Left from "../Left";
import Rating from "../Rating";
import "./ProductsPageDesktop.css";

function ProductsPageDesktop(props) {
  const {
    image1,
    desc1,
    price1,
    additional1,
    image2,
    desc2,
    price2,
    additional2,
    image3,
    desc3,
    price3,
    additional3,
    image4,
    desc4,
    price4,
    spanText1,
    spanText2,
    image5,
    desc5,
    price5,
    additional4,
    image6,
    desc6,
    price6,
    additional5,
    image7,
    desc7,
    price7,
    additional6,
    image8,
    desc8,
    price8,
    spanText3,
    spanText4,
    image9,
    desc9,
    price9,
    additional7,
    image10,
    desc10,
    price10,
    additional8,
    image11,
    desc11,
    price11,
    additional9,
    image12,
    desc12,
    price12,
    spanText5,
    spanText6,
    button2Props,
    leftProps,
    rating1Props,
    rating2Props,
    rating3Props,
    rating4Props,
    rating5Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="products-page-desktop screen">
        <div className="navbar-7">
          <HomeButton5 />
          <TextField />
          <Button2 className={button2Props.className} />
          <CartButton5 />
        </div>
        <div className="flex-row-15">
          <Left className={leftProps.className} />
          <div className="flex-row-16">
            <div className="overlap-group-container-3">
              <div className="overlap-group-11">
                <img className="image-17" src={image1} />
                <p className="desc-16 inter-normal-eerie-black-16px">{desc1}</p>
                <div className="price-15 valign-text-middle inter-bold-black-24px">{price1}</div>
                <p className="additional-17 valign-text-middle inter-normal-topaz-14px">{additional1}</p>
                <Rating />
              </div>
              <div className="overlap-group-12">
                <img className="image-17" src={image2} />
                <p className="desc-16 inter-normal-eerie-black-16px">{desc2}</p>
                <div className="price-15 valign-text-middle inter-bold-black-24px">{price2}</div>
                <p className="additional-17 valign-text-middle inter-normal-topaz-14px">{additional2}</p>
                <Rating />
              </div>
              <div className="overlap-group-13">
                <img className="image-17" src={image3} />
                <p className="desc-16 inter-normal-eerie-black-16px">{desc3}</p>
                <div className="price-15 valign-text-middle inter-bold-black-24px">{price3}</div>
                <div className="additional-18 valign-text-middle inter-normal-topaz-14px">{additional3}</div>
                <Rating className={rating1Props.className} />
              </div>
            </div>
            <div className="flex-row-item">
              <div className="overlap-group9">
                <img className="image-19" src={image4} />
                <p className="desc-17 inter-normal-eerie-black-16px">{desc4}</p>
                <div className="price-16 valign-text-middle inter-bold-black-24px">{price4}</div>
                <p className="additional-19 valign-text-middle inter-normal-topaz-14px">
                  <span>
                    <span className="span0-3 inter-normal-topaz-14px">{spanText1}</span>
                    <span className="span1-3 roboto-medium-topaz-14px">{spanText2}</span>
                  </span>
                </p>
                <Rating />
              </div>
              <div className="ecommerce-item-desktop-6">
                <img className="image-18" src={image5} />
                <p className="desc-17 inter-normal-eerie-black-16px">{desc5}</p>
                <div className="price-16 valign-text-middle inter-bold-black-24px">{price5}</div>
                <div className="additional-21 valign-text-middle inter-normal-topaz-14px">{additional4}</div>
                <Rating className={rating2Props.className} />
              </div>
              <div className="overlap-group2-3">
                <img className="image-18" src={image6} />
                <div className="desc-17 inter-normal-eerie-black-16px">{desc6}</div>
                <div className="price-16 valign-text-middle inter-bold-black-24px">{price6}</div>
                <p className="additional-20 valign-text-middle inter-normal-topaz-14px">{additional5}</p>
                <Rating />
              </div>
            </div>
            <div className="overlap-group-container-4">
              <div className="overlap-group-11">
                <img className="image-17" src={image7} />
                <p className="desc-16 inter-normal-eerie-black-16px">{desc7}</p>
                <div className="price-15 valign-text-middle inter-bold-black-24px">{price7}</div>
                <div className="additional-18 valign-text-middle inter-normal-topaz-14px">{additional6}</div>
                <Rating className={rating3Props.className} />
              </div>
              <div className="overlap-group-12">
                <img className="image-17" src={image8} />
                <div className="desc-16 inter-normal-eerie-black-16px">{desc8}</div>
                <div className="price-15 valign-text-middle inter-bold-black-24px">{price8}</div>
                <p className="additional-22 valign-text-middle inter-normal-topaz-14px">
                  <span>
                    <span className="span0-3 inter-normal-topaz-14px">{spanText3}</span>
                    <span className="span1-3 roboto-medium-topaz-14px">{spanText4}</span>
                  </span>
                </p>
                <Rating className={rating4Props.className} />
              </div>
              <div className="overlap-group-13">
                <img className="image-17" src={image9} />
                <p className="desc-16 inter-normal-eerie-black-16px">{desc9}</p>
                <div className="price-15 valign-text-middle inter-bold-black-24px">{price9}</div>
                <p className="additional-17 valign-text-middle inter-normal-topaz-14px">{additional7}</p>
                <Rating />
              </div>
            </div>
            <div className="flex-row-item">
              <div className="overlap-group7-1">
                <img className="image-18" src={image10} />
                <p className="desc-17 inter-normal-eerie-black-16px">{desc10}</p>
                <div className="price-16 valign-text-middle inter-bold-black-24px">{price10}</div>
                <p className="additional-20 valign-text-middle inter-normal-topaz-14px">{additional8}</p>
                <Rating />
              </div>
              <div className="overlap-group4-2">
                <img className="image-18" src={image11} />
                <p className="desc-17 inter-normal-eerie-black-16px">{desc11}</p>
                <div className="price-16 valign-text-middle inter-bold-black-24px">{price11}</div>
                <p className="additional-20 valign-text-middle inter-normal-topaz-14px">{additional9}</p>
                <Rating />
              </div>
              <div className="overlap-group-14">
                <img className="image-18" src={image12} />
                <p className="desc-17 inter-normal-eerie-black-16px">{desc12}</p>
                <div className="price-16 valign-text-middle inter-bold-black-24px">{price12}</div>
                <p className="additional-19 valign-text-middle inter-normal-topaz-14px">
                  <span>
                    <span className="span0-3 inter-normal-topaz-14px">{spanText5}</span>
                    <span className="span1-3 roboto-medium-topaz-14px">{spanText6}</span>
                  </span>
                </p>
                <Rating className={rating5Props.className} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPageDesktop;
