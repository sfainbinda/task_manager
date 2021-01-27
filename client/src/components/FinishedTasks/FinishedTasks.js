import axios from 'axios';

export default {
    data() {
        return {
            tasks: [],
        }
    },
    computed: {
        activeTasks() {
            return this.tasks.filter((task) => task.active === true && task.finished === true);
        },
    },
    methods: {
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
    },
    mounted() {
        this.getAll();
    }
}