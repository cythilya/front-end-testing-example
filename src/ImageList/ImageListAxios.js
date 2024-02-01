import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageItem from './ImageItem';

const ImageList = (data) => {
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
