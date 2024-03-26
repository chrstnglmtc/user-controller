import React from "react";
import { TrashIcon } from "@heroicons/react/16/solid";
import { PencilSquareIcon } from "@heroicons/react/16/solid";

export default function Row({
  image,
  firstName,
  lastName,
  userName,
  position,
  department,
  businessUnit,
  email,
  created,
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
              <img src={image} alt={`${firstName} ${lastName}`} />
            </div>
          </div>
          <div>
            <div className="font-bold">{`${firstName} ${lastName}`}</div>
            <div className="text-sm opacity-50">{userName}</div>
          </div>
        </div>
      </td>
      <td>
        {position}
        <br />
        <span className="badge badge-ghost badge-sm">
        {department}</span>
      </td>
      <td>{businessUnit}</td>
      <td>{email}</td>
      <td>{created}</td>
      <th> 
        <div className="flex w-1/2 justify-between">
            <TrashIcon className="h-4 w-4" />
            <PencilSquareIcon className="h-4 w-4" />
        </div>
      </th>
    </tr>
  );
}
