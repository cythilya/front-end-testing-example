import React, { useState, useMemo } from 'react';

const GROUP_A = [
  {
    id: 1,
    name: 'Apple',
  },
  {
    id: 2,
    name: 'Banana',
  },
  {
    id: 3,
    name: 'Orange',
  },
];
const GROUP_B = [
  {
    id: 4,
    name: 'Mango',
  },
  {
    id: 5,
    name: 'Grapes',
  },
];
const GROUP_C = [
  {
    id: 6,
    name: 'Pineapple',
  },
  {
    id: 7,
    name: 'Strawberry',
  },
];

const ItemList = () => {
  const fruitA = GROUP_A;
  const fruitB = GROUP_B;
  const fruitC = GROUP_C;
  const [source, setSource] = useState([...fruitA, ...fruitB]);

  const [searchQuery, setSearchQuery] = useState('');

  // Memoize the filtered list
  const filteredItems = useMemo(() => {
    return source.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [source, searchQuery]); // Dependencies: items and searchQuery

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onClick={(e) => setSearchQuery(e.target.value)}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search items..."
      />
      <button
        onClick={() => {
          setSource([...fruitA, ...fruitB, ...fruitC]);
          // source.push('hello');
        }}
      >
        Add more source
      </button>
      <ul style={{ height: '200px' }}>
        {filteredItems.map((item, index) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
