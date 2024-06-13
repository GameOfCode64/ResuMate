"use client";
import { useState } from "react";

const useSelectedResume = () => {
  const [resumeID, setResumeId] = useState<string | null>(null);

  return {
    resumeID,
    setResumeId,
  };
  console.log(resumeID);
};

export default useSelectedResume;
