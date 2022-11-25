import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const CategoryItems = () => {
  const {details} = useLoaderData();
    
  return (
    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12">
      {details.map((detail, i) => (
        <CategoryCard key={i} detail={detail}></CategoryCard>
      ))}
    </div>
  );
};

export default CategoryItems;