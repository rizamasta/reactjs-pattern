import { About, Home, Topics, NotFound, Signin, Signup } from '../modules/pages/index'
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