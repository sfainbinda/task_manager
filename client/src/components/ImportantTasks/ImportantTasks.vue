<template>
    <v-container>
        <v-layout class="pa-2 mt-10 ml-10">
            <div class="sections-title">
                Tareas urgentes
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
                        <v-list-item-title>No tienes ninguna tarea urgente</v-list-item-title>
                        <v-list-item-subtitle>Ve a la sección <i>tus tareas</i> para ver todas tus tareas.</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <v-list flat subheader three-line class="pa-5">
            <v-list-item-group class="ma-5" multiple v-for="(task, i) in activeTasks" :key="i">
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
                    </template>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-container>
</template>
<script src="./ImportantTasks.js"></script>
<style scoped>
    .sections-title {
        font-size: 24px;
    };
</style>