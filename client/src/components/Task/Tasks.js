import axios from 'axios';

export default {
    data() {
        return {
            rules: {
                required: text => !!text || 'Campo obligatorio',
            },
            overlay: false,
            result: {
                title: null,
                message: null
            },
            task: {
                id: null,
                title: null,
                description: null,
                finished: null,
                important: null,
                deleted: null,
                active: null
            },
            tasks: [],
            updateResult: {
                message: null,
                success: false,
                error: false,
                type: null
            },
            loading: false
        }
    },
    computed: {
        activeTasks() {
            return this.tasks.filter((task) => task.active === true && task.finished === false && task.deleted === false);
        },
    },
    methods: {
        resetTask() {
            this.task.title = null;
            this.task.description = null;
            this.task.finished = null;
            this.task.important = null;
            this.task.deleted = null;
            this.task.active = null;
        },
        overlayTaskOn(task) {
            this.task.id = task.id;
            this.task.title = task.title;
            this.task.description = task.description;
            this.task.finished = task.finished;
            this.task.important = task.important;
            this.task.deleted = task.deleted;
            this.task.active = task.active;
            this.overlay = !this.overlay;
        },
        overlayTaskOff() {
            this.resetTask();
            this.overlay = !this.overlay;
            location.reload();
        },
        async getAll () {
            try {
                let res = await axios ({
                    method: 'GET',
                    url: 'http://localhost:3000/tasks/all',
                })
                for(let i = 0; i <= res.data.length; i++) {
                    this.tasks.push({
                        id: res.data[i].id,
                        title: res.data[i].title,
                        description: res.data[i].description,
                        finished: !!+res.data[i].finished.data[0],
                        important: !!+res.data[i].important.data[0],
                        deleted: !!+res.data[i].deleted.data[0],
                        active: !!+res.data[i].active.data[0]
                    })
                }
            } catch (error) {
                console.log(error);
            }
        },  

        async updateTask () {
            if (this.$refs.updateForm.validate()) {
                try {
                    let res = await axios ({
                        method: 'PUT',
                        url: `http://localhost:3000/tasks/update/${this.task.id}`,
                        data: {
                            title: this.task.title,
                            description: this.task.description,
                            finished: this.task.finished,
                            important: this.task.important,
                            deleted: this.task.deleted,
                            active: this.task.active
                        }
                    })
                    if (res.data === 'ok') {
                        this.updateResult = {
                            success: true,
                            error: false,
                            message: 'Tarea actualizada!',
                            type: 'success'
                        }
                    }
                } catch (error) {
                    console.log(error);
                    this.updateResult = {
                        success: false,
                        error: true,
                        message: 'Error al actualizar la tarea.',
                        type: 'error'
                    }
                }
            }
        },
        deleteTask(task) {
            task.deleted = true;
        },
        toggleImportant(task) {
            task.important = !task.important;
            this.updateTask(task);
        },
        toggleFinished(task) {
            task.finished = true;
        },
    },
    watch: {
        tasks: {
            deep: true,
            handler: (nuevas, viejas) => {
                console.log('Nuevas: ', nuevas, 'Anteriores: ', viejas);
            }
        }
    },
    mounted() {
        this.getAll();
    }
}