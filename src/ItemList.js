import React, { useState, useMemo } from 'react';

const ItemList = ({ items }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  // Memoize the filtered list
  //   const filteredItems = useMemo(() => {
  //     console.log(`Filtering items...${searchQuery}`);
  //     return items.filter((item) =>
  //       item.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //   }, [items, searchQuery]); // Dependencies: items and searchQuery

  const getFilteredItems = () => {
    console.log('Filtering items...');
    return items.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={searchQuery}
        onClick={(e) => setSearchQuery(e.target.value)}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search items..."
      />
      <button
        onClick={() => {
          setSearchQuery('g');
          const result = getFilteredItems();
          setFilteredItems(result);
        }}
      >
        Search
      </button>
    </div>
  );
};

// Example usage
const App = () => {
  const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

  return <ItemList items={items} />;
};

export default App;
