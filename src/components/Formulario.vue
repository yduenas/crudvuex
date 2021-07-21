<template>
	<div>
		<h1>Soy el Formulario</h1>
		<form @submit.prevent="procesarInformacion">
			<div>
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
import { v4 as uuidv4 } from 'uuid';
import { mapActions } from 'vuex';
export default {
	data() {
		return {
			tarea: {
				id: '',
				nombre: '',
				frameworks: [],
				jobTitle: '',
				pretension: 0,
			},
		};
	},
	methods: {
		...mapActions(['setTareaAction']),
		procesarInformacion() {
			console.log(uuidv4());
			//console.log(this.tarea);
			if (this.tarea.nombre.trim() === '') {
				console.log('Campo vacio');
				return;
			}
			//gerenar ID
			this.tarea.id = uuidv4();
			console.log(this.tarea);
			//mandar al action
			this.setTareaAction(this.tarea);
		},
	},
};
</script>

<style></style>
