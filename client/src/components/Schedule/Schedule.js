import axios from 'axios';
import moment from 'moment'
import { format, parseISO } from 'date-fns'

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
                date: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
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
            return this.meetings.filter((meet) => meet.active === true && meet.finished === false && meet.deleted === false);
        },
        computedDateFormattedMomentjs () {
            return this.meeting.date ? moment(this.meeting.date).format('DD, MM, YY') : ''
          },
    },
    methods: {
        toggleFinished(meet) {
            meet.finished = !meet.finished;
        },
        toggleDelete(meet) {
            meet.deleted = !meet.deleted;
        },

        resetMeet(){
            this.meeting.id = null,
            this.meeting.title = null;
            this.meeting.description = null;
            this.meeting.place = null;
            this.meeting.date = null;
            this.meeting.start = null;
            this.meeting.end = null;
            this.meeting.finished = null;
            this.meeting.deleted = null;
            this.meeting.active =  null;
        },

        overlayMeetOn(meet) {
            this.meeting.id = meet.id;
            this.meeting.title = meet.title;
            this.meeting.description = meet.description;
            this.meeting.place = meet.place;
            this.meeting.date = meet.date;
            this.meeting.start = meet.start;
            this.meeting.end = meet.end;
            this.meeting.finished = meet.finished;
            this.meeting.deleted = meet.deleted;
            this.meeting.active =  meet.active;
            this.overlay = !this.overlay;
        },

        overlayMeetOff() {
            this.resetMeet();
            this.overlay = !this.overlay;
            location.reload();
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
        async updateMeeting() {
            if (this.$refs.updateForm.validate()) {
                try {
                    let res = await axios({
                        method: 'PUT',
                        url: `http://localhost:3000/meetings/update/${this.meeting.id}`,
                        data: {
                            title: this.meeting.title,
                            description: this.meeting.description,
                            place: this.meeting.place,
                            date: this.meeting.date,
                            start: this.meeting.start,
                            end: this.meeting.end,
                            finished: this.meeting.finished,
                            deleted: this.meeting.deleted,
                            active: this.meeting.active
                        }
                    })
                    if (res.data === 'ok') {
                        this.updateResult = {
                            success: true,
                            error: false,
                            message: 'La cita se se actualizó correctamente!.',
                            type: 'success'
                        }
                    }
                } catch (error) {
                    console.log(error);
                    this.updateResult = {
                        success: false,
                        error: true,
                        message: 'Error al actualizar la cita.',
                        type: 'error'
                    }
                }
            }   
        },
    },
    created() {
        this.getAll();
    }
}