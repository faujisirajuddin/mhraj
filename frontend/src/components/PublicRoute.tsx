import { Navigate } from "react-router-dom";
import { STATIC_VALUES } from "../../constants/common";

interface PublicRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  children,
  redirectTo = `${import.meta.env.BASE_URL}dashboards/ecommerce`,
}) => {
  const { STORED_KEYS } = STATIC_VALUES.COMMON;
  const token = localStorage.getItem(STORED_KEYS.ACCESS_TOKEN);

  if (token) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
