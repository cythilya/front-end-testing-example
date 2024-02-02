import { useState } from 'react';
import ImageItem from './ImageItem';

const ImageList = (data) => {
  const [images, setImages] = useState(data.products);

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
