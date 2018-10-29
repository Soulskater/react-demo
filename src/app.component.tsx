import './app.scss';

import * as React from 'react';
import { Route, Switch } from 'react-router';

import Header from './core/header/header.component';
import { routes } from './routes';

interface Props { }

interface State {
  headerTitle: string
}

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      headerTitle: 'React demo'
    };
  }
  render() {
    return <div>
      <Header title={this.state.headerTitle} />
      <Switch>
        {routes.map((route, index) => <Route key={index} exact={true} path={route.path} component={route.component} />)}
      </Switch>
    </div>;
  }
}