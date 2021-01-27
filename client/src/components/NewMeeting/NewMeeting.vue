<template>
    <v-container>
        <v-layout class="pa-2 mt-10 ml-14">
            <div class="sections-title">Datos de la cita</div>
        </v-layout>
        <v-form
            ref="meetForm"
            class="pa-5"
            @submit.prevent="createMeeting"
        >
            <!-- titulo de cita -->
            <v-layout>
                <v-container>    
                    <v-text-field
                        label="Título"
                        name="title"
                        prepend-icon="mdi-clipboard-text-outline"
                        v-model="meeting.title"
                        type="text"
                        outlined
                        rows="1"
                        :rules="[rules.required]"
                        :disabled="loading"
                        max-width="290px"
                        min-width="290px"
                    ></v-text-field>
                </v-container>
            </v-layout>
            <v-layout>
                <v-container>    
                    <v-textarea
                        label="Descripción"
                        name="title"
                        prepend-icon="mdi-clipboard-text-multiple-outline"
                        v-model="meeting.description"
                        type="text"
                        outlined
                        rows="3"
                        :rules="[rules.required]"
                        :disabled="loading"
                        max-width="290px"
                        min-width="290px"
                        counter="225"
                    ></v-textarea>
                </v-container>
            </v-layout>
            <!-- lugar de cita -->
            <v-layout>
                <v-container>    
                    <v-text-field
                        label="Lugar"
                        name="place"
                        prepend-icon="mdi-map-marker"
                        v-model="meeting.place"
                        type="text"
                        outlined
                        rows="1"
                        :rules="[rules.required]"
                        :disabled="loading"
                        max-width="290px"
                        min-width="290px"
                    ></v-text-field>
                </v-container>
            </v-layout>
            <v-layout class="d-flex align-center justify-center">
                <!-- fecha de cita -->
                <v-container>
                    <v-menu
                        transition="scale-transition"
                        :close-on-content-click="true"
                        max-width="290px"
                        min-width="290px"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            :value="computedDateFormattedMomentjs"
                            label="Fecha"
                            prepend-icon="mdi-calendar"
                            clearable
                            outlined
                            v-bind="attrs"
                            v-on="on"
                            @click:clear="meeting.date = null"
                            required
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="meeting.date"
                    ></v-date-picker>
                    </v-menu>
                </v-container>
                <!-- inicio de cita -->
                <v-container>
                    <v-menu
                        ref="start"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        :return-value.sync="meeting.start"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="meeting.start"
                                clearable
                                label="Hora de inicio"
                                prepend-icon="mdi-clock-time-four-outline"
                                outlined
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-time-picker
                            v-model="meeting.start"
                            format="24hr"
                            @click:minute="$refs.start.save(meeting.start)"
                        ></v-time-picker>
                    </v-menu>
                </v-container>
                <!-- fin de cita -->
                <v-container>
                    <v-menu
                        ref="end"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        :return-value.sync="meeting.end"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="meeting.end"
                                clearable
                                label="Hora de fin"
                                prepend-icon="mdi-clock-time-four-outline"
                                outlined
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-time-picker
                            v-model="meeting.end"
                            format="24hr"
                            v-on="on"
                            @click:minute="$refs.end.save(meeting.end)"
                        ></v-time-picker>
                    </v-menu>
                </v-container>
            </v-layout>
            <v-layout>
                <v-container>
                    <div class="d-flex aling-center justify-end">
                        <v-btn
                            color="error"
                            depressed
                            class="mt-6 mr-5 white--text"
                            type="reset"
                            width="150"
                        >LIMPIAR</v-btn>
                        <v-btn
                            color="primary"
                            depressed
                            class="mt-6"
                            type="submit"
                            width="150"
                        >
                            CREAR
                        </v-btn>
                    </div>
                </v-container>
            </v-layout>
        </v-form>
        <v-layout class="d-flex align-center justify-center mt-5">
            <v-alert
                @click="location.reload()"
                v-if="formResult.success || formResult.error"
                :type="formResult.type"
                dismissible
                max-width="400px"
                min-width="290px"
                >{{ formResult.message }}
            </v-alert>
        </v-layout>
    </v-container>
</template>
<script src="./NewMeeting.js"></script>
<style scoped>
    .sections-title {
        font-size: 24px;
    };
</style>