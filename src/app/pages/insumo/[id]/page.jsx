"use client";

import React from "react";
import { useParams } from "next/navigation";
import customHookFirebase from "../../../customHookFirebase";
import editarRegistro from "../../../editarRegistro";
import Loader from "@/app/components/Loader";

import "sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2";

function Page() {
	const { id } = useParams();
	const { Productos, loading, error } = customHookFirebase("insumos");

	const cambiarValor = (nombre) => {
		Swal.fire({
			title: `Ingresar nuevo valor para ${nombre}`,
			input: "text",
			confirmButtonText: "Cambiar",
			showCancelButton: true,
		}).then((result) => {
			// Solo actualizar si el valor es válido
			if (result.isConfirmed && result.value.trim() !== "") {
				editarRegistro("insumos", id, nombre, result.value);
			} else if (!result.value.trim()) {
				Swal.fire("Error", "El valor no puede estar vacío", "error");
			}
		});
	};

	if (error) {
		return <div>Error loading data</div>;
	}

	if (loading) {
		return (
			<div>
				<Loader />
			</div>
		);
	}

	const producto = Productos.find((insumo) => insumo.id == id);

	return (
		<>
			{producto ? (
				<div className="block">
					<div className="flex w-[25%] justify-between">
						<h2>Producto:</h2>
						<h2>{producto.nombre}</h2>
						<button onClick={() => cambiarValor("nombre")}>edit</button>
					</div>
					<div className="flex w-[25%] justify-between">
						<h2>Presentación:</h2>
						<p>{producto.cantidad}</p>
						<button onClick={() => cambiarValor("cantidad")}>edit</button>
					</div>
					<div className="flex w-[25%] justify-between">
						<h2>Costo:</h2>
						<p>{producto.precio}</p>
						<button onClick={() => cambiarValor("precio")}>edit</button>
					</div>
					<div className="flex w-[25%] justify-between">
						<h2>Unidad de presentación:</h2>
						<p>{producto.unidad_de_presentacion}</p>
						<button onClick={() => cambiarValor("unidad_de_presentacion")}>
							edit
						</button>
					</div>
				</div>
			) : (
				<div>Product not found</div>
			)}
		</>
	);
}

export default Page;
