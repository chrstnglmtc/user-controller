import React, { useEffect, useState } from 'react';
import Row from './Row';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersStart } from '../../redux/state/userState';

const rowsPerPage = 5; // Number of rows to display per page

export default function MainTable() {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersStart());
  }, [dispatch]);

  console.log(users);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(users.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = users.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Employee ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Position ID</th>
            <th>Dept ID</th>
            <th>Section ID</th>
            <th>Status Code</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((user, index) => (
            <Row
              key={index}
              empId={user.emp_id}
              username={user.username}
              password={user.password}
              positionId={user.position_id}
              deptId={user.dept_id}
              sectionId={user.section_id}
              statusCode={user.status_code}
              imgSrc={user.img_src}
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
