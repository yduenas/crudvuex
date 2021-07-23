<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<!--
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
		<h1>Formulario Ingreso a la Nasa</h1>
		<Formulario />
		<ListaTareas />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Formulario from '../components/Formulario.vue';
import ListaTareas from '../components/ListaTareas.vue';

export default {
	name: 'Home',
	components: {
		//  HelloWorld
		Formulario,
		ListaTareas,
	},
	methods: {
		/*
		updateInfo() {
			const arrayPersonas = [
				{ id: 1, nombre: 'Diego,', apellido: 'Cueva' },
				{ id: 2, nombre: 'Ytalo,', apellido: 'Duenas' },
				{ id: 2, nombre: 'Claudia,', apellido: 'Bazan' },
				{ id: 2, nombre: 'Luciano,', apellido: 'Miflin' },
			];
			const updateUser = { id: 2, nombre: 'Gael,', apellido: 'Duenas' };

			const arrayUpdate = arrayPersonas.map((persona) => {
				return persona.id === 2 ? { ...updateUser } : persona;
			});

			console.log(arrayUpdate);
		},
		*/
		// ID Actualizar ===2 (escoger y pintar la info)
		// Pasarle nueva informacion
	},
};
</script>
