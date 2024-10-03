import React, { useEffect, useState } from 'react';
import Item from './Item';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await new Promise((resolve) =>
        setTimeout(() => {
          resolve([
            { id: 1, titulo: 'Tesla', descricao: 'Tesla Roadster (0 a 100 km/h em 1,1 segundo)', estoque: 18, endereco_img: '/tesla.png' },
          ]);
        }, 2000)
      );
      setItems(response);
    };

    fetchItems();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;