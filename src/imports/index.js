
// Vue Router
import { createRouter, createWebHistory } from 'vue-router'

// Axios
import axios from 'axios'

// Components
import Card from "../components/TaskTracker/Card.vue";
import SearchCard from "../components/TaskTracker/SearchCard.vue";
import DataCard from "../components/TaskTracker/DataCard.vue";

// Pages
// import HomePage from '../views/HomePage.vue'
// import AddPage from '../views/AddPage.vue'
// import UpdatePage from '../views/UpdatePage.vue'
// import DeletePage from '../views/DeletePage.vue'
// import NotFoundPage from '../views/NotFoundPage.vue'

// Pages Lazy Loading
const HomePage = () => import('../views/HomePage.vue')
const AddPage = () => import('../views/AddPage.vue')
const UpdatePage = () => import('../views/UpdatePage.vue')
const DeletePage = () => import('../views/DeletePage.vue')
const NotFoundPage = () => import('../views/NotFoundPage.vue')


export { createRouter, createWebHistory, axios, Card, SearchCard, DataCard, HomePage, AddPage, UpdatePage, DeletePage, NotFoundPage }