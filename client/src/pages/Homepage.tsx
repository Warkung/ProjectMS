import React from "react";

function Homepage() {
  return (
    <div>
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome to the Homepage</h1>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Add Mobile Suit
        </button>
      </header>
      <div className="p-4">
        <p className="text-lg">
          This is a simple table of some of the most popular Mobile Suits in the
          Gundam series.
        </p>
      </div >

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b">Mobile Suit Name</th>
              <th className="py-2 px-4 border-b">Model</th>
              <th className="py-2 px-4 border-b">Pilot</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">Gundam</td>
              <td className="py-2 px-4 border-b">RX-78-2</td>
              <td className="py-2 px-4 border-b">Amuro Ray</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">Zaku II</td>
              <td className="py-2 px-4 border-b">MS-06</td>
              <td className="py-2 px-4 border-b">Char Aznable</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">Wing Gundam</td>
              <td className="py-2 px-4 border-b">XXXG-01W</td>
              <td className="py-2 px-4 border-b">Heero Yuy</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Homepage;
