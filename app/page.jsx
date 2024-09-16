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

  const generateRandomCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  
  const handleClick = async () => {
    // Existing code: interact with the database
    //let res = await addStartDates('w24', '09/23/23');
    //console.log(res);

    // New code: Generate a random chance
    const chance = Math.random();
    if (chance < 0.01) {
      // User wins: generate a random 6-character code
      const randomCode = generateRandomCode();
      setModalMessage(
        `🎉 Congrats! You won $5! DM @uclabv with code ${randomCode} along with a screenshot to claim your prize.`
      );
    } else {
      // User doesn't win
      setModalMessage('Today is not your lucky day. Try again tomorrow.');
    }

    // Open the modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-indigo-100 pb-11 font-mono">
      <Navbar />

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
          <button onClick={handleClick}>
            <div className="inline-block">
              <div className="flex items-center justify-center rounded-2xl bg-indigo-500 p-5">
                <span className="text-white">I'm Feeling Lucky. Courtesy of Bruin Ventures</span>
              </div>
            </div>
          </button>
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
