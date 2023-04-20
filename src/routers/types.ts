interface Routes {
  login: string;
  home: string;
  details: string;
  create: string;
  filter: string;
  delete: string;
  edit: string;
}

const endpoints: Routes = {
  login: "/login",
  home: "/",
  details: "/details/:id",
  create: "/create",
  filter: "/filter",
  delete: "/delete/:id",
  edit: "/edit/:id",
};

export default endpoints;
