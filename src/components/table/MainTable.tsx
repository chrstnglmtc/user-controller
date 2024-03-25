import React from 'react'
import Row from './Row'
import { USERS_DATA } from '../lib/consts/search'

export default function MainTable() {
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
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {USERS_DATA.map((user, index) => (
              <Row
                key={index}
                image={user.image}
                firstName={user.firstName}
                lastName={user.lastName}
                userName={user.userName}
                position={user.position}
                department={user.department}
                businessUnit={user.businessUnit}
              />
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }