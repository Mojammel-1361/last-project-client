import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const AllUsers = () => {
  const [deletingUser, setDeletingUser] = useState(null);

  const closeModal = () => {
    setDeletingUser(null);
  };

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://resale-market-server-green.vercel.app/users"
      );
      const data = await res.json();
      return data;
    },
  });

  const handelDeletUser = (user) => {
    fetch(`https://resale-market-server-green.vercel.app/users/${user._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`User ${user.name} Deleted Done`);
        }
      });
  };

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
          modalData={deletingUser}
          successButtonName="Delete"
          successAction={handelDeletUser}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllUsers;
