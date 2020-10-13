import React, { ReactNode, useState } from "react";
import style from "./layout.module.css";
import { Link, useHistory } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();

  const performSearch = () => {
    if (searchQuery.length < 3) return;
    history.push("/search?q=" + encodeURIComponent(searchQuery));
  };

  return (
    <div role="main" className={style.main}>
      <section className={style.main__inner}>
        <header className={style.header}>
          <nav className={style.nav}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              performSearch();
            }}
          >
            <input
              placeholder="Search.."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </header>
        {children}
      </section>
    </div>
  );
};
