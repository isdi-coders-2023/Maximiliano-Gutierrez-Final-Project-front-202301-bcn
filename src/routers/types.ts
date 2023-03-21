interface Routes {
  login: string;
  home: string;
  details: string;
}

const endpoints: Routes = {
  login: "/login",
  home: "/",
  details: "/details/:id",
};

export default endpoints;
