<template>
    <v-navigation-drawer class="pa-4 mt-6" app clipped floating permanent right width="325">
        <v-layout class="mt-6">
            <div class="fs-title">Gestor de tareas</div>
        </v-layout>
        <v-layout class="fs-p mt-4 grey--text">
            Este pequeño proyecto sirve de práctica y demostración de los conocimientos adquiridos en VueJS, Vuetify y NodeJS.
        </v-layout>
        <v-layout class="fs-p mt-4 grey--text">
            La plataforma le permite al usuario registrar tareas y citas. Las tareas cuentan con un título, una descripción y una calificación de 'urgente'. Por su parte, las citas, cuenta con fecha, hora de inicio y fin, lugar, título y descripción.
        </v-layout>
        <v-layout class="fs-p mt-4 grey--text">
            Tanto las tareas como las citas, podrán no solo darse de alta, sino también modificarse, eliminarse o darse por terminadas según lo requiera el usuario. 
        </v-layout>
        <v-layout class="fs-p mt-4 grey--text">
            Se podrá acceder a cada uno de los elementos y categorías haciendo clic en los íconos del menú que se encuentra a la izquierda del sitio.
        </v-layout>
        <v-divider class="ma-5"/>    
        
        <v-layout class="mb-2">
            <v-flex>
                <div class="fs-p grey--text">Desarrollado por</div>
                <div class="fs-p">Santiago A. Fain Binda</div>
            </v-flex>
        </v-layout>
        <v-layout class="mb-2">
            <v-flex>
                <div class="fs-p grey--text">E-mail</div>
                <div class="fs-p">sfainbinda@gmail.com</div>
            </v-flex>
        </v-layout>
        <v-layout class="mb-2">
            <v-flex>
                <div class="fs-p grey--text">Te.:</div>
                <div class="fs-p">351 204 1979</div>
            </v-flex>
        </v-layout>
        <img
        alt="Bandera Argentina"
        :src="require('@/assets/argentina.png')"
        width="25`x"
      />
    </v-navigation-drawer>
</template>
<script></script>
<style scoped>
    .fs-title { 
        font-size: 24px;
    }
    .fs-p {
        font-size: 12px;
    }
</style>