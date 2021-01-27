<template>
    <v-container>
        <v-layout class="pa-2 mt-10 ml-10">
            <div class="sections-title">
                Tus tareas
            </div>
        </v-layout>
        <v-divider
            inset
            class="ml-10 mr-10"
        ></v-divider>
        <v-list flat subheader three-line class="pa-5"  v-if="activeTasks.length < 1">
            <v-list-item-group class="ma-5" multiple>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>No tienes ninguna tarea aún</v-list-item-title>
                        <v-list-item-subtitle>Ve a la sección <i>crear nueva</i> para sumar tareas a tu lista.</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <v-list flat subheader three-line class="pa-5">
            <v-list-item-group 
                class="ma-5" 
                multiple 
                v-for="(task, i) in activeTasks" 
                :key="i"
                >
                <v-list-item>
                    <template>
                        <v-list-item-content>
                            <v-list-item-title>{{ task.title }}</v-list-item-title>
                            <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-chip
                            v-if="task.important" 
                            color="red" 
                            class="mr-2 white--text"
                        >
                            Urgente
                        </v-chip>
                        <v-btn icon @click="overlayTaskOn(task)" >
                            <v-icon>mdi-pencil-outline</v-icon>
                        </v-btn>
                    </template>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <v-overlay 
            :absolute="false"
            opacity="0.90"
            :value="overlay"
            class="d-flex align-center"
            >
            <v-container width="700px"> 
                <v-form
                    ref="updateForm"
                    class="pa-2"
                    @submit.prevent="updateTask"
                >
                    <v-container>
                        <v-text-field
                            label="Título"
                            name="title"
                            prepend-icon="mdi-clipboard-text-outline"
                            v-model="task.title"
                            type="text"
                            outlined
                            rows="1"
                            :rules="[rules.required]"
                            :disabled="loading"
                            max-width="700px"
                            min-width="290px"
                        ></v-text-field>
                        <v-textarea
                            label="Descripción"
                            name="description"
                            prepend-icon="mdi-clipboard-text-multiple-outline"
                            v-model="task.description"
                            type="text"
                            outlined
                            rows="3 "
                            :rules="[rules.required]"
                            :disabled="loading"
                            counter="225"
                            max-width="700px"
                            min-width="290px"
                        ></v-textarea>
                        <v-checkbox
                            prepend-icon="mdi-alert-circle-outline"
                            v-model="task.important"
                            label="Marcar como Urgente"
                        ></v-checkbox>
                        <v-checkbox
                            prepend-icon="mdi-check-circle-outline"
                            v-model="task.finished"
                            label="Finalizar tarea"
                        ></v-checkbox>
                        <v-checkbox
                            prepend-icon="mdi-trash-can-outline"
                            v-model="task.deleted"
                            label="Eliminar tarea"
                        ></v-checkbox>
                        <div class="d-flex aling-center justify-end">
                            <v-btn
                                @click="overlayTaskOff()"
                                color="error"
                                depressed
                                class="mt-6 mr-5 white--text"
                                width="150"
                            >
                                Cancelar
                            </v-btn>
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
                </v-form>
                <v-alert
                    @click="overlayTaskOff()"
                    max-width="700px"
                    min-width="290px"
                    v-if="updateResult.success || updateResult.error"
                    :type="updateResult.type"
                    dismissible
                    >{{ updateResult.message }}
                </v-alert>
            </v-container>
        </v-overlay>
    </v-container>
</template>
<script src="./Tasks.js"></script>
<style scoped>
    .sections-title {
        font-size: 24px;
    };
</style>