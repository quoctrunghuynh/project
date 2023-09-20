export const publicRoutes=[
    {path: '/', component: "AllVideo", layout: "MainLayout"},

    {path: '/profile', component: "AllVideo", layout: "MainLayout"},
    {path: `/profile/:id`, component: "AllVideo", layout: "MainLayout"},
    {path: '/login', component: "AllVideo", layout: "MainLayout"},
    {path: '/register', component: "AllVideo", layout: "MainLayout"},

    {path: '/subscribed', component: "AllVideo", layout: "MainLayout"},
    {path: '/library', component: "AllVideo", layout: "MainLayout"},
    {path: '/watched', component: "AllVideo", layout: "MainLayout"},
    {path: '/yours', component: "AllVideo", layout: "YoursLayout"},
    {path: '/later', component: "AllVideo", layout: "LaterLayout"},
    {path: '/liked', component: "AllVideo", layout: "LikedLayout"},

    {path:`routeSubscribes`,component: "nameChannel", layout: "UserLayout"}
];