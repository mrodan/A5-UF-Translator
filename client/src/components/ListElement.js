import React from 'react';
import { Link } from 'react-router-dom';

const setDateFormat = (timestamp) => {
  let date = timestamp + ""; // check*
  date = date.toString().substring(0,10);
  return date;
}

// check* {request.createdAt.toString().substring(0,10)}
const ListElement = ({ request }) => {
  return (
    <>
      <Link
        href="/"
        className="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{request.requestedBy}</h5>
          <small>{setDateFormat(request.createdAt)}</small>
        </div>
        <p class="mb-1"><strong>Question:{' '}</strong>{request.requestBody}</p>
      </Link>
    </>
  );
};

export default ListElement;
