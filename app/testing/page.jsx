'use client';

import { Navbar, Header } from '../components';
import { get7PSwipes, get11PSwipes, get14PSwipes, get19PSwipes, getStartDate } from '../endpoints';
import getTestData from '../endpoints/getTestData';
import './testing.css';

export default function Home() {

  const testDate = getTestData();

  return (
    <main className='min-h-screen bg-indigo-100 pb-11 font-mono'>
      <Navbar />
    
    <div className="overflow-x-auto m-10">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">7P</th>
            <th className="px-4 py-2">11P</th>
            <th className="px-4 py-2">14P</th>
            <th className="px-4 py-2">19P</th>
          </tr>
        </thead>
        <tbody>
        {
            testDate.map((item, index) => (
                    <tr key={index}>
                        <td className="border px-4 py-2">{new Date(item).toDateString()}</td>
                        <td className="border px-4 py-2">{ get7PSwipes(item).swipes }</td>
                        <td className="border px-4 py-2">{ get11PSwipes(item).swipes }</td>
                        <td className="border px-4 py-2">{ get14PSwipes(item).swipes }</td>
                        <td className="border px-4 py-2">{ get19PSwipes(item).swipes }</td>
                    </tr>
            ))
        }
        </tbody>
      </table>
    </div>
    </main>
  );
}
