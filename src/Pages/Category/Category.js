import React, { useEffect, useState } from 'react';


import CategoryOptions from './CategoryOptions';

const Category = () => {
    const [categorys, SetCategorys] = useState([]);
    const [options, setOptions] = useState(null);
    

    useEffect(() =>{
        fetch("http://localhost:5000/categoryOptions")
          .then((res) => res.json())
          .then((data) => SetCategorys(data));
    },[])

    

    return (
      <div className="mt-6">
        <h1 className="text-center text-3xl text-primary font-bold">
          This Category
        </h1>
        <div className=" mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categorys.map((category) => (
            <CategoryOptions
              key={category._id}
              category={category}
              setOptions={setOptions}
            ></CategoryOptions>
          ))}
        </div>
      </div>
    );
};

export default Category;