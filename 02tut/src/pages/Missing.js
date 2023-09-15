import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="missing">
      <h1>404 Page Not Found!</h1>
      <p>
        Go back to <Link to="/">Homepage</Link>
      </p>
    </main>
  );
};

export default Missing;
