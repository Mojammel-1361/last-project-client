import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllUsers = () => {
  const [deletingUser, setDeletingUser] = useState(null);

  const closeModal = () =>{
    setDeletingUser(null);
  }

  const handelDeletUser = user =>{
    console.log(user)

  }
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
                <th>Email</th>
                <th>Type</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="text-blue-600">{user.role}</td>
                  <td>
                    {" "}
                    <label
                      onClick={() => setDeletingUser(user)}
                      htmlFor="confirmation-modal"
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {deletingUser && (
          <ConfirmationModal
            name={`Are you sure you want to delete`}
            role={`if you delete ${deletingUser.name} is a ${deletingUser.role} not data back.`}
            closeModal={closeModal}
            modalData ={deletingUser}
            successButtonName="Delete"
            successAction={handelDeletUser}
          ></ConfirmationModal>
        )}
      </div>
    );
};

export default AllUsers;