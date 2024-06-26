'use client'

import Image from "next/image"
import { SouthWestImage } from "./components/General/SouthWestImage"
import { TopBar } from "./components/General/TopBar"

// icons
import { BsCalendar2Date } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Countdown } from "./components/General/Countdown";
import { SideBar } from "./components/General/SideBar";
import { Profile } from "./components/Team/Profiles";
import { Sponsor } from "./components/General/Sponsor";
import { Popup } from "./components/General/Popup";
import { useState } from "react";


export default function Home() {
	const [ open, setOpen ] = useState(false)

	return (
		<div className="bg-HSWprimary w-full h-fit">
			<SideBar />
			<TopBar />
			<SouthWestImage />

			{/* front facing page */}
			<div className="flex flex-col items-center justify-center w-full h-[100vh] px-[15%] pt-[15%]">
				<div className="hidden text-red-500" />
				<div className="flex flex-col gap-8 w-full h-full">
					<div className="flex justify-start items-baseline">
						<p className="text-8xl font-extrabold">Hack</p>

						<p className="text-HSWaccent text-8xl font-sans">S</p>
						<p className="text-4xl font-mono">outh</p>

						<p className="text-HSWaccent text-8xl font-sans">W</p>
						<p className="text-4xl font-mono">est</p>
					</div>

					<div className="">
						<p className="text-xl font-mono">The largest Hackathon in the South West</p>
						<p className="flex gap-2">
							<span className="font-bold">Exeter,</span>
							<span className="font-bold">Bristol,</span>
							<span className="font-bold">Plymouth,</span>
							<span className="font-bold">Bournemouth,</span>
							<span className="font-bold">Cardiff</span>
						</p>
					</div>

					<div className="">
						<div className="flex gap-2 items-center">
							<BsCalendar2Date />
							<p>Oct 2nd, 9:00am</p>
						</div>

						<div className="flex gap-2 items-center">
							<CiLocationOn />
							<p>University of Exeter, Innovation Center</p>
						</div>
					</div>

					<div className="flex gap-4">
						<button className="bg-HSWaccent text-HSWprimary px-4 py-2 rounded-md">Enter for Free</button>
						<button className="bg-HSWsecondary px-4 py-2 rounded-md border border-HSWaccent text-HSWaccent" onClick={() => {
							document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
						}}>Learn More</button>
					</div>
				</div>
			</div>

			{/* countdown */}
			<div className="flex flex-col items-center justify-center w-full h-[100vh] px-[15%] py-[15%]">
				<Countdown />
			</div>

			{/* about */}
			<div className="flex flex-col items-center justify-center w-full h-fit px-[15%]" id="about">
				<div className="flex flex-col gap-2 justify-center items-center w-1/2">
					<p className="text-2xl font-bold text-HSWaccent">What is Hack South West?</p>
					<p className="text-center">Organised by the computer science society of University Of Exeter, Hack South West is the most fun and enjoyable experience for students around the uk. Available to everyone from beginners to experts, this is a great opportunity to get into hackathons. Our welcoming atmosphere will surely encourage you to go to more!</p>
					<p className="text-center">We plan on running a 24 hour event which will begin with registration and proceed to be ran overnight. Food and drinks will be provided throughout the duration of the event. We will also be providing a variety of workshops and talks to help you get started with your hackathon project.</p>
					<p className="text-center">The winners of the hackathon will receive the iconic raspberry pi zeros! so turn up with your A game!</p>
				</div>
			</div>

			{/* day plan */}
			<div className="flex flex-col items-center justify-center w-full h-fit py-[5%] px-[15%]">
				<p className="text-2xl font-bold text-HSWaccent">The Day Plan</p>

				{/* insert svg of plan here */}
			</div>

			{/* the team */}
			<div className="flex flex-col items-center justify-center w-full h-fit py-[5%] px-[15%]">
				<p className="text-2xl font-bold text-HSWaccent">Meet the Team</p>
				<div className="w-full h-fit flex gap-2 justify-center items-center">
					<Profile name="Zara" position="Media Officer" description="Oversee the creation of hack south west" image="/images/team/callum.jpeg" />
					<Profile name="Charles" position="Sponsorship" description="Oversee the creation of hack south west" image="/images/team/ed.jpeg" />
					<Profile name="Wiktor" position="Leader" description="Oversee the creation of hack south west" image="/images/team/wiktor.jpeg" github="https://github.com/inspizzz" linkedin="https://www.linkedin.com/in/wiktor-wiejak/" website="https://www.wiktor.uk" />
					<Profile name="Ed" position="helper" description="Oversee the creation of hack south west" image="/images/team/ed.jpeg" />
					<Profile name="Callum" position="helper" description="Oversee the creation of hack south west" image="/images/team/callum.jpeg" />
				</div>
			</div>

			{/* the day */}
			<div className="">

			</div>

			{/* sponsors */}
			<div className="flex flex-col items-center justify-center w-full h-fit py-[5%] px-[15%]">

				<Popup trigger={open} setTrigger={setOpen}>
					<div className="bg-HSWtext w-full h-96 z-50 rounded-2xl ">

					</div>
				</Popup>

				<p className="text-2xl font-bold text-HSWaccent">Meet the Sponsors</p>

				<div className="w-full h-fit flex gap-2 justify-center items-center">
					<Sponsor level={"gray"} setOpen={setOpen} info={null}/>
					<Sponsor level={"gray"} setOpen={setOpen} info={null}/>
					<Sponsor level={"gray"} setOpen={setOpen} info={null}/>
				</div>

				<div className="w-full h-32 flex gap-2 justify-center items-center">
					<Sponsor level={"gray"} setOpen={setOpen} info={null}/>
					<Sponsor level={"gray"} setOpen={setOpen} info={null}/>
				</div>
			</div>
		</div>
	)
}
