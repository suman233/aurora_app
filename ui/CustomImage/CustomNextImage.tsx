import assest from "@/json/assest";
import Image, { ImageProps } from "next/image";
import React, { useEffect, useState } from "react";

const CustomNextImage = (props: ImageProps) => {
  const { src, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(assest.noimage);
      }}
    />
  );
};

export default CustomNextImage;
