import React from "react";
import { doSocialLogin } from "../actions";

export default function SocilaLogin() {
  return (
    <div className="my-3">
      <h6 className="text-center mb-2">Or</h6>
      <form action={doSocialLogin} className="flex gap-3 align-middle justify-center">
        <button type="submit" name="action" value="google" className="bg-blue-400 px-4 py-1 rounded-md text-white">
          with Google
        </button>
        <button type="submit" name="action" value="github" className="bg-green-400 px-4 py-1 rounded-md text-white">
          with Github
        </button>
      </form>
    </div>
  );
}
