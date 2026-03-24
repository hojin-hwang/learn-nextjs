"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";
import { useState } from "react";

export default function Navigation() {
	const path = usePathname();
	const [count, setCount] = useState(0);

	return (
		<nav>
			<ul>
				<li><Link href="/">Home</Link> {path === "/" ? "홈" : ""}</li>
				<li><Link href="/about-us">About Us</Link> {path === "/about-us" ? "우리는" : ""}</li>
				<li><Link href="/movies">Movies</Link> </li>
				<li>
					<button onClick={() => setCount(count + 1)}>{count}번 클릭됨</button>
				</li>
			</ul>
		</nav>
	)
}