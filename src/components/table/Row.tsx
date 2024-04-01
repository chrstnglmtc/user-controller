import React from "react";
import { TrashIcon } from "@heroicons/react/16/solid";
import { PencilSquareIcon } from "@heroicons/react/16/solid";

export default function Row({
  empId,
  username,
  password,
  positionId,
  deptId,
  sectionId,
  statusCode,
  imgSrc,
  firstName,
  lastName,
  email
}) {
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {/* Adjust the alt text */}
              <img src={imgSrc} alt={username} />
            </div>
          </div>
          <div>
            {/* Adjust the display */}
            <div className="font-bold">{username}</div>
            <div className="text-sm opacity-50">{empId}</div>
          </div>
        </div>
      </td>
      <td>
        {/* Display positionId and deptId */}
        {positionId}
        <br />
        <span className="badge badge-ghost badge-sm">{deptId}</span>
      </td>
      <td>{sectionId}</td>
      <td>{statusCode}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <th> 
        <div className="flex w-1/2 justify-between">
            <TrashIcon className="h-4 w-4" />
            <PencilSquareIcon className="h-4 w-4" />
        </div>
      </th>
    </tr>
  );
}
