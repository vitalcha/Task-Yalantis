import React from "react";

import Month from "../components/Month";
import { useUsers } from "../customHooks/useUsers";

const App = () => {
  const { months } = useUsers();

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ul className="tabs nav nav-pills">
            {months.map((month) => (
              <Month month={month} key={month.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
