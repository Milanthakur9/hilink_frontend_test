"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../AuthContext";
import { useEffect } from "react";

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.replace("/login"); // Redirect to login page if not authenticated
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      return null; // Optionally show a loading spinner
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
