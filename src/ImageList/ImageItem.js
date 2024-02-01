const ImageItem = ({ title, image }) => {
  return (
    <div data-test-id="image-item">
      <img alt={title} data-test-id="image-item-src" src={image} />
      <p data-test-id="image-item-title">{title}</p>
    </div>
  );
};

export default ImageItem;
