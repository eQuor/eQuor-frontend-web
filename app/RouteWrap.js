"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@contexts/authContext";

function RouteWrap({ children }) {
  const router = useRouter();
  const { authUser, setAuthUser } = useAuth();

  const RouteMapper = {
    ADMIN: "/admin",
    STUDENT: "/student",
    LECTURER: "/lecturer",
    STAFF: "/staff",
  };

  if (authUser != null) {
    router.push(RouteMapper[authUser.role[0].authority]);
  }
  return (
    <>
      <main className='layout-with-sidebar layout relative z-0'>
        {children}
      </main>
    </>
  );
}

export default RouteWrap;
