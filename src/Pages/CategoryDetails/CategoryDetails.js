import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {

    const {data} = useLoaderData();
    console.log(data)

  return (
    <div>
      <p>Category Details {data}</p>
    </div>
  );
};

export default CategoryDetails;