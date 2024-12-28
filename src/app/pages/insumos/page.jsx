"use client";
import customHookFirebase from "@/app/customHookFirebase";

function Page() {
	const { Productos, loading, error } = customHookFirebase("insumos");
	if (error) {
		return <div>error</div>;
	}
	if (loading) {
		return <div>cargando...</div>;
	}

	return (
		<>
			{Productos.map((insumo) => (
				<div key={insumo.id}>hola</div>
			))}
		</>
	);
}

export default Page;
