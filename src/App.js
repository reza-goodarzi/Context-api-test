import GlobalStyle from "./styles/globalStyle";
// import { UsersContextProvider } from "./store/users-context";
// import { PostsContextProvider } from "./store/posts-context";

import Header from "./components/Header";
import { UsersDataContextProvider } from "./store/user-data-context";
import Posts from "./page/Posts";
import Users from "./page/Users";
// import Profile from "./page/Profile";

function App() {
  return (
    <UsersDataContextProvider>
      <GlobalStyle />
      <Header />
      <Posts />
      {/* <Users /> */}
      {/* <Profile /> */}
    </UsersDataContextProvider>
  );
}

export default App;
