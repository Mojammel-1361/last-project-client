import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const {data: users = []}= useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await fetch("http://localhost:5000/users");
            const data = await res.json();
            return data;
        }
    })
    return (
      <div>
        <h1 className="text-3xl mb-5">All Users</h1>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i}>
                  <th>{i+1}</th>
                  <td>{user.name}</td>
                  <td>Quality Control Specialist</td>
                  <td> <button className='btn btn-sm btn-primary' type="">admin</button> </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllUsers;