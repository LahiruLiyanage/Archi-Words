import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';
import Layout from './Layout';

const routes = [{
    path: '/',
    element: <Layout />,
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
        path: '/articles/individual',
        element: <ArticlePage />
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