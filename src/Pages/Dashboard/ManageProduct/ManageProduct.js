import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Lodding from '../../Shared/Lodding/Lodding';

const ManageProduct = () => {

    const url = "http://localhost:5000/products";

    const { data: products = [], isLoading } = useQuery({
      queryKey: ["addCards"],
      queryFn: async () => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      },
    });

    if (isLoading){
        return <Lodding></Lodding>
    }
      return (
        <div>
          <h1 className="text-3xl mb-6">Manage Product</h1>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Images</th>
                  <th>Name & Model</th>
                  <th>Price</th>
                  <th>Product Details some Speciation</th>
                  <th>Location</th>
                  <th>post for Adds</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>
                      <div className="w-24 rounded">
                        <img src={product.image} alt="" />
                      </div>
                    </td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.details}</td>
                    <td>{product.location}</td>
                    <td>
                      <button className="btn btn-sm btn-outline" type="">
                        {" "}
                        adds
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
};

export default ManageProduct;