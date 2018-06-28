import { About, Home, Topics, NotFound, Signin, Signup, Detail } from '../modules/pages/index'
const routes = [
    {
        path: "/",
        pageTitle: 'Home',
        exact: true,
        component: Home
    },
    {
        path: "/home",
        pageTitle: 'Home',
        exact: true,
        component: Home
    },
    {
        path: "/About",
        pageTitle: 'About',
        exact: true,
        component: About
    },
    {
        path: "/article-detail/:idArticle",
        pageTitle: 'Article',
        exact: true,
        component: Detail
    },
    {
        path: "/Topics",
        pageTitle: 'Topics',
        exact: true,
        component: Topics
    }, {
        pageTitle: 'Page Not Found',
        component: NotFound
    }
];
const empty = [
    {
        path: "/signin",
        pageTitle: 'Sing in',
        exact: true,
        component: Signin
    }
    , {
        path: "/signup",
        exact: true,
        pageTitle: 'Sign Up',
        component: Signup
    }
];
export { routes, empty };