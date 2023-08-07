import Base from './Base'
import { Outlet } from 'react-router-dom'

const BaseWithOutlet: React.FC = () => {
	return (
		<Base>
			<Outlet/>
		</Base>
	)
}

export default BaseWithOutlet
