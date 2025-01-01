import Link from "next/link";
import React from "react";

function Nav() {
	return (
		<nav className="bg-red-300 h-[50px]">
			<ul className="flex items-center justify-around h-[100%]">
				<li>
					<Link href="../recetario">recetario</Link>
				</li>
				<li>
					<Link href="../pages/insumos">insumos</Link>
				</li>
				<li>
					<Link href={"../pages/costos"}>costo</Link>
				</li>
				<li>
					<Link href={"../pages/produccion"}>produccion</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
