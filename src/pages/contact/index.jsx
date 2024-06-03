import React from "react";
import { useOutlet, Outlet, Link } from "react-router-dom";

const Contact = () => {
  const hasChild = useOutlet();

  if (hasChild) {
    return <Outlet />;
  }
  return (
    <div>
      xush kelibsiiz Contactga
      <div>
        <h2>
          phone number:<Link to="/contact/phone-number">Link</Link>
        </h2>
      </div>
    </div>
  );
};

export default Contact;
