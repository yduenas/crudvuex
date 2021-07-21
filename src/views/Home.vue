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
};
</script>
