import React from "react";

const Footer = ({ length }) => {
  const today = new Date();
  return (
    <footer>
      <p className="itemNumber">
        {length === 0
          ? "There are no items."
          : length === 1
          ? "There is 1 item only."
          : `There are ${length} items.`}
      </p>
      <p className="copyRight">Copyright &copy; {today.getFullYear()} </p>
    </footer>
  );
};

export default Footer;
