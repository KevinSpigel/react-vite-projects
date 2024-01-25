import { useEffect, useState } from "react";
import { getRandomImage } from "../services/catsImage";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com/";

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;

    const firstThreeWords = fact.split(" ", 3).join(" ");
    // console.log(firstThreeWords)

    getRandomImage(firstThreeWords).then((_id) => {
      //The image URL parameter doesn't exist
      setImageUrl(_id);
    });
  }, [fact]);

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` };
};
