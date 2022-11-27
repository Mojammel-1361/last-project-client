import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyProducts = () => {

    const url = "http://localhost:5000/addCards";

    const { data: addCards =[] } = useQuery({
        queryKey: ['addCards'],
        queryFn: async () =>{
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    return (
      <div>
        <h1 className="text-3xl mb-5">My Products</h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>images</th>
                <th>Product</th>
                <th>Price</th>
                <th>Uses</th>
                <th>Location</th>
                
              </tr>
            </thead>
            <tbody>
              {addCards.map((addCard, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <th>
                    <div className="w-24 rounded">
                      <img src={addCard.img} alt="" />
                    </div>
                  </th>
                  <td>{addCard.product}</td>
                  <td>{addCard.price}</td>
                  <td>{addCard.use} Year</td>
                  <td>{addCard.location}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyProducts;