<template>
	<div>
		<h1>Lista Tareas</h1>
		<!--
		<div v-for="tarea in tareas" :key="tarea.id"></div>
			-->
		<!--
			<p>{{ tarea.nombre }}</p>
			-->
		<table border="1">
			<thead>
				<tr>
					<th>#</th>
					<th>Nombre</th>
					<th>Framework</th>
					<th>JobTitle</th>
					<th>Pretencion</th>
					<th>Acciones</th>
				</tr>
			</thead>
			{{
				tareas.length > 0 ? '' : 'no hay registros'
			}}
			<tbody>
				<tr v-for="tarea in tareas" :key="tarea.id">
					<td>{{ tarea.id }}</td>
					<td>{{ tarea.nombre }}</td>
					<td>
						<span v-for="(framework, index) in tarea.frameworks" :key="index">
							{{ framework }} <br />
						</span>
					</td>
					<td>{{ tarea.jobTitle }}</td>
					<td>{{ tarea.pretension }}</td>
					<td>
						<button @click="deleteTareaAction(tarea.id)">Eliminar</button>
						<router-link
							:to="{
								name: 'Editar',
								params: {
									id: tarea.id,
								},
							}"
							>Editar</router-link
						>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	computed: {
		...mapState(['tareas']),
	},
	methods: {
		...mapActions(['deleteTareaAction']),
	},
};
</script>

<style></style>
