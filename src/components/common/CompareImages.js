import React from "react";
import ReactCompareImage from "react-compare-image";

function CompareImages({ images }) {
  return (
    <ReactCompareImage
      leftImage={images[0]}
      rightImage={images[1]}
      hover
      aspectRatio="wider"
      handleSize={10}
    />
  );
}

export default CompareImages;
