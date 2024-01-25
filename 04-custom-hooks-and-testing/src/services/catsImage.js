export const getRandomImage = async ({ firstThreeWords }) => {
  const res = await fetch(
    `https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red&json=true`
  );
  const data = await res.json();

  //The image URL parameter doesn't exist
  //console.log(data)

  const { _id } = data;
  return _id;
};
