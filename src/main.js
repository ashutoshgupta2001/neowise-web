import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import ToastPlugin from "vue-toast-notification";
import 'vue-toast-notification/dist/theme-default.css';
import HomePage from './components/HomePage.vue';
import TableListing from './components/TableListing.vue';
import MakePayment from './components/MakePayment.vue'


const routes = [
  { path: '/', component: HomePage },
  { path: '/all-transactions', component: TableListing },
  { path: '/transaction/:id', component: TableListing },
  { path: '/create-transaction', component: MakePayment },
  { path: '/cancel-transaction', component: HomePage },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(ToastPlugin, {
  position: "top",
});
app.mount('#app');