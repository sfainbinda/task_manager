import axios from "axios"

export default {
    data() {
        return {
            rules: {
                required: text => !!text || 'Campo obligatorio',
            },
            newTask: {
                title: null,
                description: null,
                important: false,
                finished: false,
                deleted: false,
                active: true
            },
            formResult: {
                message: null,
                success: false,
                error: false,
                type: null
              },
            loading: false
        }
    },
    methods: {
        async createTask() {
            if (this.$refs.taskForm.validate()) {
                this.loading = true
                try {
                    let res = await axios ({
                        method: 'POST',
                        url: 'http://localhost:3000/tasks/new',
                        data: {
                            title: this.newTask.title,
                            description: this.newTask.description,
                            important: this.newTask.important,
                            finished: this.newTask.finished,
                            deleted: this.newTask.deleted,
                            active: this.newTask.active
                        }
                    })
                    if(res.data === 'ok') {
                        this.formResult = {
                            success: true,
                            error: false,
                            message: 'Tarea creada con éxito!',
                            type: 'success'
                        }
                    }
                    this.$refs.taskForm.reset()
                } catch (error) {
                    console.log(error);
                    this.formResult = {
                        success: false,
                        error: true,
                        message: 'Error al cargar la tarea.',
                        type: 'error'
                    }
                } finally {
                    this.loading = false
                }
            }
        },
    }
}