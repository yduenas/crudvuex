import { createStore } from 'vuex';

export default createStore({
	state: {
		tareas: [],
		tarea: {
			nombre: '',
			frameworks: [],
			jobTitle: '',
			pretension: 0,
		},
	},
	mutations: {},
	actions: {
		setTareaAction(tarea) {
			console.log(tarea);
		},
	},
	modules: {},
});
