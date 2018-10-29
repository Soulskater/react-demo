import { Login } from './login/components/login.component';

interface IRoute {
  path: string;
  component: any;
}

export const routes: IRoute[] = [{
  path: '/login',
  component: Login
}];