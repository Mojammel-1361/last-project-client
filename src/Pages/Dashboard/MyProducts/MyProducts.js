import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
                <th>Pay Now</th>
              </tr>
            </thead>
            <tbody>
              {addCards.map((addCard, i) => (
                <tr key={addCard._id}>
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
                  <td>
                    {addCard.price && !addCard.paid && (
                      <Link to={`/dashboard/payment/${addCard._id}`}>
                        <button className="btn btn-accent">pay</button>
                      </Link>
                    )}
                    {addCard.price && addCard.paid && (
                      <span className="text-accent">paid</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyProducts;