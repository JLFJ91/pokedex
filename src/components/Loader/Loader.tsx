import './assets/css/styles.css'

const Loader: React.FC = () => {
	return (
		<div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		</div>
	)
}

export default Loader
