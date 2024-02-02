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
    return images.map(({ id, title, images }) => (
      <ImageItem key={id} title={title} image={images[0]} />
    ));
  };

  const renderNoDataPrompt = () => {
    return <div data-test-id="no-data-prompt">No data to display.</div>;
  };

  return <>{!!images.length ? renderImages() : renderNoDataPrompt()}</>;
};

export default ImageList;
