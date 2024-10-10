"use client";

import { useState } from "react";
import { SignInFlow } from "../types";
import SignInCard from "./SignInCard";
import SignUpCard from "./SignUpCard";

export const AuthScreen = () => {
    const [state, setState] = useState<SignInFlow>('signIn')
  return (
    <div className="h-screen flex justify-center items-center bg-zinc-700">
    <div className="md:h-full, ">{state === "signIn" ? <SignInCard setState={setState} /> : <SignUpCard setState={setState}/>}</div>
    </div>
  )
}

