import React, { PropsWithChildren, ReactNode, useState } from "react";
import style from "./layout.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const performSearch = () => {
    if (searchQuery.length < 3) return;
    router.push("/search?q=" + encodeURIComponent(searchQuery));
  };

  return (
    <div role="main" className={style.main}>
      <section className={style.main__inner}>
        <header className={style.header}>
          <nav className={style.nav}>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
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
