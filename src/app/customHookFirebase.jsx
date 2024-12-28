"use client";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function customHookFirebase(coleccion) {
	const [Productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (!coleccion) throw new Error("Colección no especificada");
				const itemCollection = collection(db, coleccion);
				const itemSnapshot = await getDocs(itemCollection);
				const itemList = itemSnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setProductos(itemList);
				setLoading(false);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		};
		fetchData();
	}, [coleccion]);
	console.log(Productos);

	return { Productos, loading, error };
}

export default customHookFirebase;
