import axios from "axios"
import moment from 'moment'
import { format, parseISO } from 'date-fns'

export default {
    data() {
        return {
            rules: {
                required: text => !!text || 'Campo obligatorio',
            },
            meeting: {
                title: null,
                description: null,
                place: null,
                date: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
                start: null,
                end: null,
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
        async createMeeting() {
            if (this.$refs.meetForm.validate()) {
                try {
                    let res = await axios({
                        method: 'POST',
                        url: 'http://localhost:3000/meetings/new',
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
                    });
                    if(res.data === 'ok') {
                        this.formResult = {
                            success: true,
                            error: false,
                            message: 'Cita creada con éxito!',
                            type: 'success'
                          }
                    }
                    this.$refs.meetForm.reset();
                } catch (error) {
                    console.log(error);
                    this.formResult = {
                        success: false,
                        error: true,
                        message: 'Error al crear la cita.',
                        type: 'error'
                      }
                } finally {
                    this.loading = false
                }
            }
        },
    },
    computed: {
        computedDateFormattedMomentjs () {
            return this.meeting.date ? moment(this.meeting.date).format('DD, MM, YY') : ''
          },
    }
}
