import Header from "./components/Header";
import Users from "./page/users";
// import Posts from "./page/Posts";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      {/* <Posts /> */}
      <Users />
    </>
  );
}

export default App;
