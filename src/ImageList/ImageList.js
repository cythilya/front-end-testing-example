import { useEffect, useState } from 'react';
import ImageItem from './ImageItem';

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dummyjson.com/products');

      const data = await response.json();
      setImages(data.products);
    }
    fetchData();
  }, []);

  return (
    <>
      {!images.length && (
        <div data-test-id="no-data-prompt">No data to display.</div>
      )}
      {images.map(({ id, title, images }) => (
        <ImageItem key={id} title={title} image={images[0]} />
      ))}
    </>
  );
};

export default ImageList;
