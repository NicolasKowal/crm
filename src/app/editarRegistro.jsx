import { db } from "./firebase.js";
import { doc, updateDoc } from "firebase/firestore";

import "sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2";

async function editarRegistro(where, id, nombre, valor) {
	try {
		// Verificar que el valor no esté vacío
		if (!valor.trim()) {
			Swal.fire("Error", "El valor no puede estar vacío", "error");
			return;
		}

		const docRef = doc(db, where, id);
		const updateData = { [nombre]: valor };

		// Actualizar el documento en Firestore
		await updateDoc(docRef, updateData);
		Swal.fire("Éxito", "El registro ha sido actualizado", "success");
	} catch (error) {
		Swal.fire("Error", "Ocurrió un error al actualizar el registro", "error");
		console.error("Error al actualizar el registro:", error);
	}
}

export default editarRegistro;
