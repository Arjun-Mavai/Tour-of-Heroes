import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import HeroList from "./components/HeroList";
import HeroDetails from "./components/HeroDetails";

function Layout() {
  return (
    <div style={{ margin: "45px" }}>
      <header>
        <h3
          style={{
            border: "2px solid black",
            padding: "4px",
            borderRadius: "10px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          Tour of heroes Application in ReactJS with React Router v6
        </h3>
      </header>
      <main>
        <h2>Top Heroes</h2>
        <Outlet />
      </main>

      <footer>
        Hello this is footer : Arjun here <br />
        <Link to="/">Back</Link>
      </footer>
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        { path: "/", element: <HeroList /> },
        { path: "/hero/:heroId", element: <HeroDetails /> },
        // { path: '/hero/:id/edit', element: <HeroEdit /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
