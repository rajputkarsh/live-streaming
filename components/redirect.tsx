"use client";

import { useEffect } from "react";

export const Redirect = () => {
  useEffect(() => {
    window.location.href = 'https://codewithantonio.com/projects/twitch-clone';
  }, []);
  
  return <>Redirecting...</>;
};
