import React, { useState } from 'react';
import Row from './Row';
import { USERS_DATA } from '../lib/consts/search';

const rowsPerPage = 5; // Number of rows to display per page

export default function MainTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(USERS_DATA.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = USERS_DATA.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Email</th>
            <th>Created</th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((user, index) => (
            <Row
              key={index}
              image={user.image}
              firstName={user.firstName}
              lastName={user.lastName}
              userName={user.userName}
              position={user.position}
              department={user.department}
              businessUnit={user.businessUnit}
              email={user.email}
              created={user.created}
            />
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <td colSpan="5">
              <button onClick={prevPage} disabled={currentPage === 1} className="px-4">
                Previous
              </button>
              Page {currentPage} of {totalPages}
              <button onClick={nextPage} disabled={currentPage === totalPages} className="px-4">
                Next
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
