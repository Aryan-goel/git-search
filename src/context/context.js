import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubuser, setGithubUser] = useState(mockUser);
  const [githubrepos, setGithubRepos] = useState(mockRepos);
  const [githubfollowers, setGithubFollowers] = useState(mockFollowers);
  return (
    <GithubContext.Provider
      value={{ githubuser, githubrepos, githubfollowers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
