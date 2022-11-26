import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import { useState } from "react";
import CategoryCard from './CategoryCard';
import Modal from '../Modal/Modal';

const CategoryItems = () => {
  const {details} = useLoaderData();
  const [items, setItems] = useState(null);
    
  return (
    <>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12">
        {details.map((detail, i) => (
          <CategoryCard
            key={i}
            detail={detail}
            setItems={setItems}
          ></CategoryCard>
        ))}
        {
        items && 
        <Modal 
        items={items}
        setItems={setItems}
        ></Modal>
        }
      </div>
    </>
  );
};

export default CategoryItems;