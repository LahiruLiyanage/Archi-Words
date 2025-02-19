import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ArticleList from "./pages/ArticleList.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";

const routes = [{
    path: '/',
    element: <HomePage />,
}, {
    path: '/about',
    element: <AboutPage />,
}, {
    path: '/articles',
    element: <ArticleList />,
}, {
    path: '/articles/individuals',
    element: <ArticlePage />,
}];

const router = createBrowserRouter(routes);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App
