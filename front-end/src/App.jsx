import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage.jsx";

const routes = [{
    path: '/',
    element: <HomePage />,
}];

const router = createBrowserRouter(routes);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App
