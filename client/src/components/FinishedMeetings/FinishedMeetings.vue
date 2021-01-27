<template>
    <v-container>
        <v-layout class="pa-2 mt-10 ml-10">
            <div class="sections-title">Tus citas finalizadas</div>
        </v-layout>
        <v-divider
            inset
            class="ml-10 mr-10"
        ></v-divider>
        <v-list flat subheader three-line class="pa-5"  v-if="activeMeetings.length < 1">
            <v-list-item-group class="ma-5" multiple>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>No hay citas finalizadas</v-list-item-title>
                        <v-list-item-subtitle>Ve a la sección <i>tus citas</i> revisalas a todas.</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <v-layout class="flex-wrap justify-start align-center mt-5 ml-10">
            <v-card 
                class="ma-5 pa-2" 
                elevation="4" 
                width="325" 
                v-for="(meet, i) in activeMeetings" 
                :key="i" 
                color="#ECEFF7"
            >
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
                        </div>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-layout>    
    </v-container>
</template>
<script src="./FinishedMeetings.js"></script>
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