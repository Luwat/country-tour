import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout, { loadCountry } from "./pages/Root";
import HomePage from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import ThemeContextProvider from "./context/themeContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      id: "root",
      element: <RootLayout />,
      loader: loadCountry,
      children: [
        { index: true, element: <HomePage /> },
        { path: ":title", element: <CountryDetails /> },
      ],
    },
  ]);
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;
