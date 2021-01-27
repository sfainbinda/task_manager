import Vue from 'vue'
import VueRouter from 'vue-router'

import Tasks from '../components/Task/Tasks.vue';
import ImportantTasks from '../components/ImportantTasks/ImportantTasks.vue';
import FinishedTasks from '../components/FinishedTasks/FinishedTasks.vue';
import DeletedTasks from '../components/DeletedTasks/DeletedTasks.vue';
import NewTask from '../components/NewTask/NewTask.vue';
import Schedule from '../components/Schedule/Schedule.vue';
import NewMeeting from '../components/NewMeeting/NewMeeting.vue';
import FinishedMeetins from '../components/FinishedMeetings/FinishedMeetings.vue';

Vue.use(VueRouter)

const routes = [
  // Tasks routes
  {
    path: '/',
    name: 'tasks',
    component: Tasks
  },
  {
    path: '/important-tasks',
    name: 'important-tasks',
    component: ImportantTasks
  },
  {
    path: '/finished-tasks',
    name: 'finished-tasks',
    component: FinishedTasks
  },
  {
    path: '/deleted-tasks',
    name: 'deleted-tasks',
    component: DeletedTasks
  },
  {
    path: '/new-task',
    name: 'new-task',
    component: NewTask
  },

  //Calendar routes
  
  {
    path: '/schedule',
    name: 'schedule',
    component: Schedule
  },
  {
    path: '/new-meeting',
    name: 'new-meeting',
    component: NewMeeting
  },
  {
    path: '/new-meeting',
    name: 'finished-meeting',
    component: FinishedMeetins
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
