<template>
    <v-container>
        <v-layout class="pa-2 mt-10 ml-14">
            <div class="sections-title">Nueva tarea</div>
        </v-layout>
        <v-form
            ref="taskForm"
            class="pa-5"
            @submit.prevent="createTask"
        >
            <v-layout>
                <v-container>
                    <v-text-field
                        label="Título"
                        name="title"
                        prepend-icon="mdi-clipboard-text-outline"
                        v-model="newTask.title"
                        type="text"
                        outlined
                        rows="1"
                        :rules="[rules.required]"
                        :disabled="loading"
                        max-width="290px"
                        min-width="290px"
                    ></v-text-field>
                    <v-textarea
                        label="Descripción"
                        name="description"
                        prepend-icon="mdi-clipboard-text-multiple-outline"
                        v-model="newTask.description"
                        type="text"
                        outlined
                        rows="3 "
                        :rules="[rules.required]"
                        :disabled="loading"
                        counter="225"
                        max-width="290px"
                        min-width="290px"
                    ></v-textarea>
                    <v-checkbox
                        prepend-icon="mdi-alert-circle-outline"
                        v-model="newTask.important"
                        label="Marcar como importante"
                    ></v-checkbox>
                    <div class="d-flex aling-center justify-end">
                        <v-btn
                            color="error"
                            depressed
                            class="mt-6 mr-5 white--text"
                            type="reset"
                            width="150"
                        >
                            LIMPIAR
                        </v-btn>
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
                max-width="290px"
                min-width="290px"
                v-if="formResult.success || formResult.error"
                :type="formResult.type"
                dismissible
                >{{ formResult.message }}
            </v-alert>
        </v-layout>
    </v-container>
</template>
<script src="./NewTask.js"></script>
<style scoped>
    .sections-title {
        font-size: 24px;
    };
    .link-decoration {
        text-decoration: none;
    }
</style>