"use client";
import { useState } from "react";

const useSelectedResume = () => {
  const [resumeID, setResumeId] = useState<string | null>(null);

  return {
    resumeID,
    setResumeId,
  };
};

export default useSelectedResume;
