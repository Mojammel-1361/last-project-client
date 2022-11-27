import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Lodding from '../../Shared/Lodding/Lodding';

const MyProducts = () => {
  const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/addCards?email=${user?.email}`;

    const { data: addCards =[], isLoading } = useQuery({
        queryKey: ['addCards'],
        queryFn: async () =>{
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
      return <Lodding></Lodding>;
    }

    return (
      <div>
        <h1 className="text-3xl mb-5">My Orders</h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>images</th>
                <th>Product</th>
                <th>Price</th>
                <th>Uses</th>
                <th>mobile</th>
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
                  <td>{addCard.phone}</td>
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