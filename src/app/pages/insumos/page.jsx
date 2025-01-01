import Tabla from "@/app/components/Tabla";
import React from "react";

function page() {
	return (
		<>
			<section className="h-[50px] flex items-center justify-center">
				<input
					type="text"
					name="search"
					id=""
					placeholder="busqueda"
					className="border border-black p-2"
				/>
				<button className="pl-3 btn">Buscar</button>
			</section>
			<section>
				<div className="w-[80%]  mx-auto">
					<div className="h-[50px] flex items-center justify-around">
						<h3 className="uppercase">nombre</h3>
						<h3 className="uppercase">unidad</h3>
						<h3 className="uppercase">presentacion</h3>
						<h3 className="uppercase">precio</h3>
					</div>

					<Tabla />
				</div>
			</section>
		</>
	);
}

export default page;
