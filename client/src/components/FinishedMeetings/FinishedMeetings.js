import axios from 'axios';

export default {
    data() {
        return {
            rules: {
                required: text => !!text || 'Campo obligatorio',
            },
            overlay: false,
            meetings: [],
            meeting: {
                id: null,
                title: null,
                description: null,
                place: null, 
                date: null,
                start: null,
                end: null,
                finished: null,
                deleted: null,
                active: null
            },
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
        activeMeetings() {
            return this.meetings.filter((meet) => meet.active === true && meet.finished === true && meet.deleted === false);
        },
    },
    methods: {
        toggleFinished(meet) {
            meet.finished = !meet.finished;
        },
        toggleDelete(meet) {
            meet.deleted = !meet.deleted;
        },
        async getAll () {
            try {
                let res = await axios ({
                    method: 'GET',
                    url: 'http://localhost:3000/meetings/all',
                })
                for(let i = 0; i <= res.data.length; i++) {
                    this.meetings.push({
                        id: res.data[i].id,
                        title: res.data[i].title,
                        description: res.data[i].description,
                        place: res.data[i].place,
                        date: res.data[i].date,
                        start:res.data[i].start,
                        end: res.data[i].end,
                        finished: !!+res.data[i].finished.data[0],
                        deleted: !!+res.data[i].deleted.data[0],
                        active: !!+res.data[i].active.data[0]
                    })
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.getAll();
    }
}