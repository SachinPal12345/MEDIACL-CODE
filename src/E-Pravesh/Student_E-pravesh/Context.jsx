import React, { createContext, useState } from 'react';

export const CandidateInfoContext = createContext();

export const CandidateInfoProvider = ({ children }) => {
  const [candidateInfo, setCandidateInfo] = useState({
    name: '',
  });

  return (
    <CandidateInfoContext.Provider value={{ candidateInfo, setCandidateInfo }}>
      {children}
    </CandidateInfoContext.Provider>
  );
};
