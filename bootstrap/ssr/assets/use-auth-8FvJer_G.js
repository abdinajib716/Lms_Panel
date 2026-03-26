import { usePage } from "@inertiajs/react";
function useAuth() {
  var _a, _b, _c;
  const { props } = usePage();
  const { auth } = props;
  const user = auth == null ? void 0 : auth.user;
  const isAdmin = ((_a = auth == null ? void 0 : auth.user) == null ? void 0 : _a.role) === "admin";
  const isStudent = ((_b = auth == null ? void 0 : auth.user) == null ? void 0 : _b.role) === "student";
  const isInstructor = ((_c = auth == null ? void 0 : auth.user) == null ? void 0 : _c.role) === "instructor";
  const isLoggedIn = (auth == null ? void 0 : auth.user) ? true : false;
  return { user, isAdmin, isStudent, isInstructor, isLoggedIn };
}
export {
  useAuth as u
};
