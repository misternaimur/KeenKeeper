/** @format */

import Link from "next/link";
import React from "react";

const errorPage = () => {
  return (
    <div>
      this page is not found <br />
      <Link href={"/"} className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default errorPage;
