const DecrementButton = ({ onClick }) => {
  return (
    <button data-test-id="decrement-button" onClick={onClick}>
      -
    </button>
  );
};

export default DecrementButton;