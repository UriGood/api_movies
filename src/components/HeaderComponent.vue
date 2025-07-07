<template>
    <div >
        <b-navbar toggleable="lg" type="dark" variant="info" class="navbar-custom">
            <b-navbar-brand href="#">Navegación | Aplicación Vuejs</b-navbar-brand>
            <b-navbar-brand href="#">Desarrollado por Uriel Martínez</b-navbar-brand>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent",
}
</script>

<style scoped>
.navbar-custom{
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    justify-content: space-between;
}
</style>