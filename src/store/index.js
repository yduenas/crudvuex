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
	mutations: {
		setTareaMutation(state, payload) {
			state.tareas.push(payload);
		},
		deleteTareaMutation(state, payload) {
			console.log(state.tareas);
			console.log(payload);
			//	state.tareas.push(payload);
			state.tareas = state.tareas.filter((tarea) => tarea.id !== payload);
		},
		updateTareaMutation(state, payload) {
			state.tarea = state.tareas.find((tarea) => tarea.id === payload);
			//console.log('hola');

			console.log(state.tarea);
		},
		actualizarTareaMutation(state, payload) {
			//state.tarea = state.tareas.find((tarea) => tarea.id === payload);
			//console.log('hola');

			//	console.log(state.tarea);

			state.tareas = state.tareas.map((tarea) => {
				return tarea.id === payload.id ? { ...payload } : tarea;
			});
		},
	},
	actions: {
		/* aca debo meter todas mis peticiones asincronas ASYNC */
		setTareaAction({ commit }, tarea) {
			commit('setTareaMutation', tarea);
			//	console.log(tarea);
		},
		deleteTareaAction({ commit }, id) {
			commit('deleteTareaMutation', id);
		},
		updateTareaAction({ commit }, id) {
			commit('updateTareaMutation', id);
		},
		actualizarTareaAction({ commit }, tarea) {
			commit('actualizarTareaMutation', tarea);
		},
	},
	modules: {},
});
