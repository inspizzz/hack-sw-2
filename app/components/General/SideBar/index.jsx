'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// icons
import { CiLocationArrow1 } from "react-icons/ci";


export function SideBar() {
	const pathname = usePathname()

	return (
		<div className="absolute left-4 top-4 w-fit h-fit p-2 flex flex-col z-20">
			<div className='flex flex-col w-fit h-fit gap-10'>
				<div>
					<h1 className="text-2xl">Current HSW</h1>
					<div className="flex items-center justify-center gap-2">
						<CiLocationArrow1 />
						<Link href="/" className={(pathname==="/") && "text-accent"}>HSW 2024 Nov</Link>
					</div>
				</div>
				
				<div>
					<h1 className='text-2xl'>Past HSW</h1>
					<div className="flex items-center justify-center gap-2">
						<CiLocationArrow1 />
						<Link href="/past/hsw-2024-feb" className={(pathname==="/past/hsw-2024-feb") && "text-accent"}>HSW 2024 Feb</Link>
					</div>
				</div>
			</div>
		</div>
	)
}