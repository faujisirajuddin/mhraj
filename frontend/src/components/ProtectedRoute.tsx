import { Navigate } from "react-router-dom";
import { STATIC_VALUES } from "../../constants/common";
import { hasPermission } from "../../utils/permissions";

interface ProtectedRouteProps {
  moduleKey: string;
  action?: "VIEW" | "ADD" | "EDIT" | "DELETE";
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  moduleKey,
  action = "VIEW",
  children,
}) => {
  const { STORED_KEYS } = STATIC_VALUES.COMMON;
  const token = localStorage.getItem(STORED_KEYS.ACCESS_TOKEN);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (!moduleKey) {
    return children;
  }

  if (!hasPermission(moduleKey, action)) {
    return <Navigate to="/error/error-401" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
