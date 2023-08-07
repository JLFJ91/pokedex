import './assets/css/pokeball.css'
import logo from './assets/img/pokemon_logo.png'

const Pokeball: React.FC = () => {
	return (
		<div className="pokeball">
			<div className="top"></div>
			<div className="bottom"></div>
			<div className="push"></div>
			<img src={logo} alt="Pokemon Logo" />
		</div>
	)
}

export default Pokeball
