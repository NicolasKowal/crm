"use client";
import customHookFirebase from "../customHookFirebase";
import React from "react";
import Link from "next/link";
import Loader from "./Loader";

function Tabla() {
	const { Productos, loading, error } = customHookFirebase("insumos");
	if (error) {
		return <div>error</div>;
	}
	if (loading) {
		return (
			<div>
				<Loader />
			</div>
		);
	}
	return (
		<>
			{Productos.map((insumo, index) => {
				const position = index % 2 === 0;
				return (
					<div
						key={insumo.id}
						className={`${position ? "bg-blue-100" : "bg-blue-300"}`}
					>
						<Link
							className="h-[50px] w-[100%] flex items-center justify-around"
							href={`../pages/insumo/${insumo.id}`}
						>
							<p className="w-[40%] ">{insumo.nombre}</p>
							<p className="w-[20%] text-center">{insumo.cantidad}</p>
							<p className="w-[20%] text-center">
								{insumo.unidad_de_presentacion}
							</p>
							<p className="w-[20%] text-center">$ {insumo.precio}</p>
							<p className="w-[20%] ">{insumo.proovedor}</p>
						</Link>
					</div>
				);
			})}
		</>
	);
}

export default Tabla;
