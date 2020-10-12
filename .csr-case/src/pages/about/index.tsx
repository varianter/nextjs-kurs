import React from "react";

export const About = () => {
  return (
    <section>
      <form>
        <h2>TODO</h2>
        <div>
          <input type="checkbox" id="api" value="Create api for serving data" />

          <label htmlFor="api">Create api for serving data</label>
        </div>
        <div>
          <input type="checkbox" id="layout" value="Create layout for page" />
          <label htmlFor="layout">Create layout for page</label>
        </div>
        <div>
          <input type="checkbox" id="css" value="Style application" />
          <label htmlFor="css">Style application</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="interactivity"
            value="Create something so we can have it interactive"
          />
          <label htmlFor="interactivity">
            Create something so we can have it interactive
          </label>
        </div>
      </form>
    </section>
  );
};
