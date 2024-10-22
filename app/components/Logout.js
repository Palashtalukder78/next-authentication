import React from "react";
import { doLogout } from "../actions";

export default function Logout() {
  return (
    <div>
      <form action={doLogout}>
        <button type="submit" className="text-white bg-green-600 px-3 py-1 rounded-md text-sm">
          Logout
        </button>
      </form>
    </div>
  );
}
