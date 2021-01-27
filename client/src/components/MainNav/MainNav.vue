<template>
    <div>
        <v-navigation-drawer 
            app 
            class="pa-4 background-color white--text" 
            floating 
            permanent 
            width="300"
            >
            <v-layout class="ma-2 pa-1 d-flex flex-column align-center justify-center">
                <img src="../../assets/logo.svg" alt="logo" width="250">
                <v-subheader class="white--text">Vue Demo</v-subheader>  
            </v-layout>
            <v-treeview 
                v-model="tree" 
                :open="initiallyOpen" 
                :items="items" 
                item-key="name" 
                open-on-click 
                class="white--text pa-1"
            > 
                <template v-slot:prepend="{ item, open }">
                    <v-btn icon>
                        <router-link :to="{ name: 'tasks' }">
                            <v-icon 
                                v-if="!item.file" 
                                class="white--text"
                            >
                                {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
                            </v-icon>
                        </router-link>
                        <router-link :to="{ name: `${[item.route]}` }">
                            <v-icon class="white--text">
                                    {{ files[item.file] }}
                            </v-icon>
                        </router-link>
                    </v-btn>
                </template>
            </v-treeview>
        </v-navigation-drawer>
    </div>
</template>
<script src="./MainNav.js"></script>
<style scoped>
    .background-color {
        background: linear-gradient(#0095DC, #005483);
    }
</style>