<template>
	<div>
		<h1>Editar</h1>

		<form @submit.prevent="actualizarInformacion">
			<div>
				ID
				<input type="text" placeholder="Id" v-model="tarea.id" readonly />
			</div>
			<div>
				Nombre
				<input
					type="text"
					placeholder="Ingrese nombre"
					v-model="tarea.nombre"
				/>
			</div>
			<hr />
			<div>
				¿Que frameworks y/o lenguajes manejas?
				<div>
					<input
						type="checkbox"
						id="check-1"
						value="JavaScript"
						v-model="tarea.frameworks"
					/>
					<label for="check-1">JavaScript</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="check-2"
						value="NodeJs"
						v-model="tarea.frameworks"
					/>
					<label for="check-2">NodeJs</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="check-3"
						value="Reac"
						v-model="tarea.frameworks"
					/>
					<label for="check-3">Reac</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="check-4"
						value="Vue"
						v-model="tarea.frameworks"
					/>
					<label for="check-4">Vue</label>
				</div>
				<hr />
				<div>
					<input
						type="radio"
						id="radio-1"
						value="Frondend"
						v-model="tarea.jobTitle"
					/>
					<label for="radio-1">Frondend</label>
				</div>
				<div>
					<input
						type="radio"
						id="radio-2"
						value="Backend"
						v-model="tarea.jobTitle"
					/>
					<label for="radio-2">Backend</label>
				</div>
				<div>
					<input
						type="radio"
						id="radio-3"
						value="FullStack"
						v-model="tarea.jobTitle"
					/>
					<label for="radio-3">FullStack</label>
				</div>

				<hr />

				<div>
					<label for="">Pretencion Salarial</label>
					<input
						type="text"
						placeholder="Pretencion Salarial"
						v-model.number="tarea.pretension"
					/>
				</div>
				<button type="submit">Procesar</button>
			</div>

			<p>{{ $data }}</p>
		</form>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	data() {
		return {
			task: {},
		};
	},
	computed: {
		...mapState(['tarea']),
	},

	methods: {
		...mapActions(['updateTareaAction', 'actualizarTareaAction']),

		actualizarInformacion() {
			console.log(this.task);
			this.actualizarTareaAction(this.task);
			this.$router.push({ name: 'Home' });
		},
	},
	created() {
		console.log(this.$route.params.id);
		//	updateTareaMutation();
		this.updateTareaAction(this.$route.params.id);
		console.log(this.tarea);
		this.task = this.tarea;
	},
};
</script>

<style></style>
