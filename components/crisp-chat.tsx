"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CRISP_ID = process.env.NEXT_PUBLIC_CRISP_ID;

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure(`${CRISP_ID}`);
  }, []);

  return null;
};
