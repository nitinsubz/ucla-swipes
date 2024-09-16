// components/Modal.jsx
'use client';

import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"
      onClick={onClose} // Close modal when clicking on backdrop
    >
      <div
        className="relative mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &#10005;
        </button>
        <div className="mt-4 text-center">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
