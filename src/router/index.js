 import { createRouter, createWebHistory, HomePage, AddPage, UpdatePage, DeletePage, NotFoundPage } from '../imports'

 const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/add',
        name: 'Add',
        component: AddPage
    },
    {
        path: '/update/:id',
        name: 'Update',
        component: UpdatePage
    },
    {
        path: '/delete/:id',
        name: 'Delete',
        component: DeletePage
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFoundPage
    },
]

 const router = createRouter({
    history: createWebHistory(),
    routes
 })

 export default router