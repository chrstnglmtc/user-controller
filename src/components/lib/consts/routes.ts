export interface RoutesI {
  path: string;
  breadcrumb: string;
}

export const routes: RoutesI[] = [
  { path: "/", breadcrumb: "Dashboard" },
  { path: "/profile", breadcrumb: "Profile" },
  { path: "/profile/settings", breadcrumb: "Profile Settings" },
  { path: "/settings", breadcrumb: "Settings" },
];
