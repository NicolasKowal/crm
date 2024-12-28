"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Page() {
	const [productos, setProductos] = useState([]); // Estado para los productos

	useEffect(() => {
		// Llamada a la API solo una vez al montar el componente
		const fetchProductos = async () => {
			try {
				const response = await fetch("https://fakestoreapi.com/products/");
				const datos = await response.json();
				setProductos(datos); // Actualizar el estado con los datos
			} catch (error) {
				console.error("Error al cargar los datos:", error);
			}
		};

		fetchProductos();
	}, []); // Array vacío para asegurarnos de que se ejecute solo al montar

	return (
		<>
			<div className="flex justify-around bg-green-300">
				<button>AGREGAR insumo</button>
				<div>
					<input type="text" name="buscar" id="buscar" placeholder="Inserte" />
					<button>Buscar</button>
				</div>
			</div>
			<ul className="flex justify-around">
				<li>codigo</li>
				<li>descripcion</li>
				<li>categoria</li>
				<li>stock min </li>
				<li>stock max</li>
				<li>precio</li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<hr />
			<div>
				{productos.length > 0 ? (
					productos.map((p) => (
						<Link
							href="../pages/insumo/"
							key={p.id}
							className="flex justify-between"
						>
							<p>{p.id}</p>
							<p>{p.title}</p>
							<p>{p.category}</p>
							<p>0</p>
							<p>100</p>
							<p>$10000</p>
						</Link>
					))
				) : (
					<p>Cargando productos...</p>
				)}
			</div>
		</>
	);
}

export default Page;
