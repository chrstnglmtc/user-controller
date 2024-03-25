import React from "react";

export default function Row({
  image,
  firstName,
  lastName,
  userName,
  position,
  department,
  businessUnit,
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
        {department}
        <br />
        <span className="badge badge-ghost badge-sm">{position}</span>
      </td>
      <td>{businessUnit}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
}
