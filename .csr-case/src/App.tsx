import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Index } from "./pages";
import { PostPage } from "./pages/post";
import { About } from "./pages/about";
import { Layout } from "./components/layout";
import { Search } from "./pages/search";

const Routes = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/posts/:id">
        <PostPage />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  );
};

export default function App() {
  return (
    <main id="root">
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </main>
  );
}
