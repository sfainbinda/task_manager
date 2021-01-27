<template>
    <v-container>
        <v-layout class="pa-2 mt-10 ml-10">
            <div class="sections-title">Tus citas</div>
        </v-layout>
        <v-divider
            inset
            class="ml-10 mr-10"
        ></v-divider>
        <v-list flat subheader three-line class="pa-5"  v-if="activeMeetings.length < 1">
            <v-list-item-group class="ma-5" multiple>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>No tienes ninguna cita aún</v-list-item-title>
                        <v-list-item-subtitle>Ve a la sección <i>crear nueva</i> para sumar tareas a tu lista.</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <v-layout class="flex-wrap justify-start align-center mt-5 ml-10">
            <v-card class="ma-5 pa-2" elevation="4" width="325" v-for="(meet, i) in activeMeetings" :key="i" color="#ECEFF7">
                <v-list-item three-line >
                    <v-list-item-content>
                        <div class="pa-1 mb-2">
                            <div class="overline "> 
                                {{ meet.date }} | {{ meet.start }} - {{ meet.end }}
                            </div>
                            <div class="font-weight-thin">
                                {{ meet.place }}
                            </div>
                        </div>
                        <div class="pa-1">
                            <v-list-item-title class="card-title font-weight-medium mb-2">
                                {{ meet.title }}
                            </v-list-item-title>
                            <v-list-item-subtitle class="card-subtitle">
                                {{ meet.description }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle class="d-flex justify-end align-end mt-1">
                                <v-btn icon @click="overlayMeetOn(meet)">
                                    <v-icon>mdi-pencil-outline</v-icon>
                                </v-btn>
                            </v-list-item-subtitle>
                        </div>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
            <v-overlay 
                :absolute="false"
                opacity="0.90"
                :value="overlay"
                class="d-flex align-center justify-end"
                >
                <v-container width="700px"> 
                <v-form
                    ref="updateForm"
                    class="pa-5"
                    @submit.prevent="updateMeeting"
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
                                name="description"
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
                        <v-container class="d-flex align-center justify-center">    
                            <v-checkbox
                                class="mr-8"
                                prepend-icon="mdi-alert-circle-outline"
                                v-model="meeting.important"
                                label="Marcar como Urgente"
                            ></v-checkbox>
                            <v-checkbox
                                class="mr-8"
                                prepend-icon="mdi-check-circle-outline"
                                v-model="meeting.finished"
                                label="Finalizar cita"
                            ></v-checkbox>
                            <v-checkbox
                                class="mr-8"
                                prepend-icon="mdi-trash-can-outline"
                                v-model="meeting.deleted"
                                label="Eliminar cita"
                            ></v-checkbox>
                        </v-container>
                    </v-layout>
                    <v-layout>
                        <v-container>
                            <div class="d-flex aling-center justify-end">
                                <v-btn
                                    @click="overlayMeetOff()"
                                    color="error"
                                    depressed
                                    class="mt-6 mr-5 white--text"
                                    type="reset"
                                    width="150"
                                >Cancelar</v-btn>
                                <v-btn
                                    color="primary"
                                    depressed
                                    class="mt-6"
                                    type="submit"
                                    width="150"
                                >
                                    Actualizar
                                </v-btn>
                            </div>
                        </v-container>
                    </v-layout>
                </v-form>
                <div class="d-flex align-center justify-center">
                    <v-alert
                        @click="overlayMeetOff()"
                        max-width="800px"
                        min-width="290px"
                        v-if="updateResult.success || updateResult.error"
                        :type="updateResult.type"
                        dismissible
                        >{{ updateResult.message }}
                    </v-alert>
                </div>
                </v-container>
            </v-overlay>
        </v-layout>
    </v-container>
</template>
<script src="./Schedule.js"></script>
<style scoped>
    .sections-title {
        font-size: 24px;
    }
    .card-title {
        font-size: 16px;
    }
    .card-subtitle {
        font-size: 12px;
    }
</style>