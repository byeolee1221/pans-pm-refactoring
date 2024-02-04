import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e3e74a23-bf17-49e0-8d05-4c6e67047550");
  }, []);

  return null;
}