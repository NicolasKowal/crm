import { db } from "./firebase.js"; // Nota el './' al inicio, que indica el directorio actual

import { collection, addDoc } from "firebase/firestore";

const data = [
	{
		nombre: "Harina de Trigo",
		unidad_de_presentacion: "Kilo",
		cantidad: 25,
		precio: 60,
		proveedor: "Molinos del Sur",
	},
	{
		nombre: "Azúcar",
		unidad_de_presentacion: "Kilo",
		cantidad: 50,
		precio: 80,
		proveedor: "Dulces Patagónicos",
	},
	{
		nombre: "Manteca",
		unidad_de_presentacion: "Kilo",
		cantidad: 10,
		precio: 400,
		proveedor: "Lácteos Los Andes",
	},
	{
		nombre: "Huevos",
		unidad_de_presentacion: "Unidad",
		cantidad: 360,
		precio: 15,
		proveedor: "Granja San Martín",
	},
	{
		nombre: "Levadura Fresca",
		unidad_de_presentacion: "Kilo",
		cantidad: 5,
		precio: 500,
		proveedor: "Panificados Argentina",
	},
	{
		nombre: "Leche",
		unidad_de_presentacion: "Litro",
		cantidad: 20,
		precio: 150,
		proveedor: "Lácteos del Valle",
	},
	{
		nombre: "Sal",
		unidad_de_presentacion: "Kilo",
		cantidad: 10,
		precio: 0.02,
		proveedor: "Minerales del Norte",
	},
	{
		nombre: "Esencia de Vainilla",
		unidad_de_presentacion: "Litro",
		cantidad: 1,
		precio: 5,
		proveedor: "Sabores del Mundo",
	},
	{
		nombre: "Chocolate",
		unidad_de_presentacion: "Kilo",
		cantidad: 15,
		precio: 800,
		proveedor: "Chocolates Patagonia",
	},
	{
		nombre: "Miel",
		unidad_de_presentacion: "Litro",
		cantidad: 5,
		precio: 2,
		proveedor: "Colmenas del Bosque",
	},
	{
		nombre: "Fruta Secada (pasas de uva)",
		unidad_de_presentacion: "Kilo",
		cantidad: 2,
		precio: 1.2,
		proveedor: "Agrofrutales S.A.",
	},
	{
		nombre: "Coco Rallado",
		unidad_de_presentacion: "Kilo",
		cantidad: 1,
		precio: 1,
		proveedor: "Tropical Goods",
	},
	{
		nombre: "Crema de Leche",
		unidad_de_presentacion: "Litro",
		cantidad: 12,
		precio: 220,
		proveedor: "Lácteos San Martín",
	},
	{
		nombre: "Mermelada de Frutos Rojos",
		unidad_de_presentacion: "Kilo",
		cantidad: 8,
		precio: 500,
		proveedor: "Delicias del Sur",
	},
	{
		nombre: "Almendras",
		unidad_de_presentacion: "Kilo",
		cantidad: 3,
		precio: 4.5,
		proveedor: "Frutos Secos Los Andes",
	},
	{
		nombre: "Canela en Polvo",
		unidad_de_presentacion: "Kilo",
		cantidad: 0.5,
		precio: 10,
		proveedor: "Especias del Bosque",
	},
	{
		nombre: "Ralladura de Limón",
		unidad_de_presentacion: "Kilo",
		cantidad: 0.1,
		precio: 10,
		proveedor: "Cítricos del Valle",
	},
	{
		nombre: "Cacao en Polvo",
		unidad_de_presentacion: "Kilo",
		cantidad: 2.5,
		precio: 3,
		proveedor: "Chocolates del Sur",
	},
	{
		nombre: "Aceite Vegetal",
		unidad_de_presentacion: "Litro",
		cantidad: 10,
		precio: 350,
		proveedor: "Aceites La Campiña",
	},
	{
		nombre: "Fécula de Maíz",
		unidad_de_presentacion: "Kilo",
		cantidad: 5,
		precio: 0.4,
		proveedor: "Harinas del Sur",
	},
];

async function subirDatos() {
	try {
		const insumos = collection(db, "insumos");

		// Usar Promise.all para subir todas las propiedades de forma concurrente
		const promises = data.map((insumo) => addDoc(insumos, insumo));

		// Esperar a que todas las promesas se resuelvan
		await Promise.all(promises);

		// Si todo va bien, imprime un mensaje de éxito
		console.log("Todas las propiedades fueron subidas correctamente.");
	} catch (error) {
		console.error("Error al subir los inmuebles:", error);
	}
}

// Llamar a la función para subir los datos
subirDatos();
