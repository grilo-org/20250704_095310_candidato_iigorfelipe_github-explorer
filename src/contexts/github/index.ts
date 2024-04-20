import { useContext } from "react";
import { GithubContext } from "./context";

export const useGithub = () => {
  const context = useContext(GithubContext);

  if (!context) {
    throw new Error(
      'useGithub deve ser usado em um GithubProvider'
    );
  };

  return context;
};
