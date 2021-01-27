export default {
    data() {
        return {
            initiallyOpen: ['Tareas', 'Calendario'],
            files: {
                task: 'mdi-card-text-outline',
                newTask: 'mdi-card-text-outline',
                finishedTasks: 'mdi-check-decagram-outline',
                deletedTasks: 'mdi-trash-can-outline',
                meetings: 'mdi-calendar-month-outline',
                newMeeting: 'mdi-calendar-plus',
                finishedMeeting: 'mdi-calendar-remove-outline',
                importantTasks: 'mdi-alert-circle-outline'
            },
            tree: [],
            items: [
                {
                    name: 'Tareas',
                    file: 'task',
                    route: 'tasks',
                    children: [
                        {
                            name: 'Tus Tareas',
                            file: 'task',
                            route: 'tasks'
                        },
                        {
                            name: 'Urgentes',
                            file: 'importantTasks',
                            route: 'important-tasks'
                        },
                        {
                            name: 'Finalizadas',
                            file: 'finishedTasks',
                            route: 'finished-tasks'
                        },
                        {
                            name: 'Eliminadas',
                            file: 'deletedTasks',
                            route: 'deleted-tasks'
                        },
                        {
                            name: 'Crear nueva',
                            file: 'newTask',
                            route: 'new-task'
                        },
                    ]
                },
                {
                    name: 'Calendario',
                    file: 'meetings',
                    children: [
                        {
                            name: 'Tus citas',
                            file: 'meetings',
                            route: 'schedule'
                        },
                        {
                            name: 'Nueva cita',
                            file: 'newMeeting',
                            route: 'new-meeting'
                        },
                        {
                            name: 'Finalizadas', 
                            file: 'finishedMeeting',
                            route: 'finished-meeting'
                        }
                    ]
                }
            ],
        }
    }
}
