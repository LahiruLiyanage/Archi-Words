import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticleListPage.jsx';
import ArticlePage, { articleLoader } from './pages/ArticlePage';
import Layout from './Layout';
import NotFoundPage from "./pages/NotFoundPage.jsx";
import axios from "axios";

const routes = [{
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [{
        path: '/',
        element: <HomePage />
    }, {
        path: '/about',
        element: <AboutPage />
    }, {
        path: '/articles',
        element: <ArticlesListPage />
    }, {
        path: '/articles/:name',    // Article names
        element: <ArticlePage />,
        loader: articleLoader,
    }]
}]

const router = createBrowserRouter(routes);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App