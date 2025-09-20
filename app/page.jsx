// page.jsx
'use client';

//import addStartDates from '@/services/swipes/addStartDates';
import { Navbar, Header } from './components';
import Link from 'next/link';
import Modal from './components/Modal';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-indigo-100 pb-11 font-mono">
      <Navbar />
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-6 px-6 text-center shadow-lg border-b-4 border-indigo-700">
        <h1 className="text-3xl font-bold mb-2">Welcome back to UCLA! 🐻</h1>
        <p className="text-lg opacity-95">Get ready for the best food in the world, in the best city in the world</p>
        <div className="mt-3 flex justify-center space-x-2">
          <span className="text-2xl">🍕</span>
          <span className="text-2xl">🌮</span>
          <span className="text-2xl">🍜</span>
          <span className="text-2xl">🌴</span>
        </div>
      </div>
      
      <div className="m-10">
        <Header />
        <div className="text-center">
          <Link
            href="https://myhousing.hhs.ucla.edu/shib/swipes"
            target="_blank"
          >
            <div className="inline-block">
              <div className="flex items-center justify-center rounded-2xl bg-indigo-500 p-5">
                <span className="text-white">View My Current Balance</span>
              </div>
            </div>
          </Link>
          <br />
          <br />
          
          {/* Support section */}
          <div className="mt-8">
            <Link
              target='_blank'
              href="https://buymeacoffee.com/nitinsub"
              className="text-indigo-600 hover:text-indigo-800 underline"
            >
              Want to support UCLA Swipes?
            </Link>
          {/* Bug bounty notice */}
          <div className="mt-4 text-sm text-gray-600">
            See an incorrect swipe count? Email hello@uclaswipes.com for a $100 bounty!
          </div>
          </div>
          
        </div>
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p className="text-2xl font-bold">{modalMessage}</p>
        <button
          className="mt-6 rounded bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
          onClick={closeModal}
        >
          Close
        </button>
      </Modal>
    </main>
  );
}
