import "../App.css";
import { useCatImage } from "../hooks/useCatImage";

// eslint-disable-next-line react/prop-types
export const CatImage = ({ fact }) => {
  const { imageUrl } = useCatImage({ fact });

  return (
    <>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`The image URL doesn't exist as a parameter. The image ID is: ${imageUrl}`}
        />
      )}
    </>
  );
};
