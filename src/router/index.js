import Vue from 'vue'
import VueRouter from 'vue-router'

// const Home = () => import('../views/Home/Home.vue')

const OperationMonitoring = () =>
  import('../views/operationMonitoring/OperationMonitoring.vue')
const StrategicAnalysis = () =>
  import('../views/strategicAnalysis/StrategicAnalysis.vue')
const CommandDispatch = () =>
  import('../views/commandDispatch/CommandDispatch.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/operation_monitoring',
  },
  {
    path: '/operation_monitoring',
    component: OperationMonitoring,
  },
  {
    path: '/strategic_analysis',
    component: StrategicAnalysis,
  },
  {
    path: '/command_dispatch',
    component: CommandDispatch,
  },
]

const router = new VueRouter({
  routes,
  mode: 'hash',
})

export default router
