const ElementList = () => {
  return (
    <>
      <div data-test-id="visible-element" style={{ display: 'block' }}>
        這是顯示的元素
      </div>
      <div data-test-id="invisible-element" style={{ display: 'none' }}>
        這是隱藏的元素
      </div>
    </>
  );
};

export default ElementList;
