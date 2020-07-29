import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.css";

const Month = ({ month }) => {
  const [isShow, setIsShow] = useState(false);

  const styleButton = classNames("btn", {
    "btn-secondary": month.users.length <= 2,
    "btn-primary": month.users.length > 2 && month.users.length <= 6,
    "btn-success": month.users.length > 6 && month.users.length <= 10,
    "btn-danger": month.users.length > 10,
  });

  return (
    <li className="nav-item mb-4">
      <button
        type="button"
        className={styleButton}
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
      >
        {month.label}
      </button>

      {isShow &&
        month.users.map((user) => <p key={user.id}>{user.firstName}</p>)}
    </li>
  );
};

Month.propTypes = {
  month: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    users: PropTypes.array,
  }).isRequired,
};

export default Month;
