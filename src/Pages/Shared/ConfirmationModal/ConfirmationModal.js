import React from 'react';

const ConfirmationModal = ({
  name,
  role,
  closeModal,
  successAction,
  modalData,
  successButtonName,
}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="py-4">{role}</p>
          <div className="modal-action">
            <label
              onClick={() => successAction(modalData)}
              htmlFor="confirmation-modal"
              className="btn btn-warning btn-sm"
            >
              {successButtonName}
            </label>
            <button onClick={closeModal} className="btn btn-outline btn-sm">
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;