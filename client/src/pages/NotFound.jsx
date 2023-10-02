import React from "react";
import { LoadingError } from "../styles/homeStyle";

export default function NotFound({ err }) {
  return (
    <>
      <LoadingError>
        <h1>404 Page Not Found</h1>
        <br />
        <p>{err}</p>
      </LoadingError>
    </>
  );
}
