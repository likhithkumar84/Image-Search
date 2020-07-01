import React from "react";

const ImageList = (props) => {
  console.log(props.Images);
  const images = props.Images.map((image) => {
    return <img key={image.id} src={image.urls.regular} alt={image.description} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
