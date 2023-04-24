interface Routes {
  login: string;
  home: string;
  details: string;
  create: string;
  filter: string;
  delete: string;
  edit: string;
  register: string;
}

const endpoints: Routes = {
  login: "/login",
  register: "/register",
  home: "/",
  details: "/details/:id",
  create: "/create",
  filter: "/filter",
  delete: "/delete/:id",
  edit: "/edit/:id",
};

export default endpoints;
