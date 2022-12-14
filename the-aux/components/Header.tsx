import Link from 'next/link';
import TheAux from '../public/theaux.png'

console.log(TheAux)
function Header(){
	return(
		<header className="flex justify-between p-5 max-w-7xl mx-auto">
			<div className="flex items-center space-x-5">
				<Link href='/'>
					{/*<img className="w-44 object-container cursor-pointer" 
					src="https://drive.google.com/file/d/1kD8IIjnUvFQ2beakZtQhp1IvPoe0ek09/view?usp=share_linkv"
					alt=""/>*/}
					<h1>TheAux</h1>
				</Link>
				<div className="hidden md:inline-flex items-center space-x-5">
					<h3>About</h3>
					<h3>Contact</h3>
					<h3 className="text-white bg-green-600 px-4 py-1 rounded-full">Follow</h3>
				</div>
			</div>
			<div className="flex items-center space-x-5 text-green-600">
				<h3>Sign In</h3>
				<h3 className="border px-4 py-1 rounded-full border-green-600">Join</h3>
			</div>
		</header>
	);
}

export default Header;