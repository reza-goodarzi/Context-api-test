import GlobalStyle from "./styles/globalStyle";
import { Route, Switch } from "react-router-dom";
import { UsersDataContextProvider } from "./store/user-data-context";

import Header from "./components/Header";
import Posts from "./page/Posts";
import Users from "./page/Users";
import Profile from "./page/Profile";

function App() {
  return (
    <UsersDataContextProvider>
      <Header />
      <GlobalStyle />
      <Switch>
        <Route path='/' exact>
          <Posts />
        </Route>
        <Route path='/users' exact>
          <Users />
        </Route>
        <Route to='/profile/:id' exact>
          <Profile />
        </Route>
      </Switch>
    </UsersDataContextProvider>
  );
}

export default App;
