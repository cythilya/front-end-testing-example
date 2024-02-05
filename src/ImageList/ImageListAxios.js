import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageItem from './ImageItem';

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setImages(response.data.products);
      } catch (error) {
        throw error;
      }
    }
    fetchData();
  }, []);

  const renderImages = () => {
    return images.map(({ id, title, images }) => {
      return <ImageItem key={id} title={title} image={images[0]} />;
    });
  };

  return (
    <>
      {images.length !== 0 ? (
        renderImages()
      ) : (
        <div data-test-id="no-data-prompt">No data to display.</div>
      )}
    </>
  );
};

export default ImageList;
