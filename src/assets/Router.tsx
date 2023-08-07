import {
	createBrowserRouter,
	RouterProvider
} from 'react-router-dom'

import { BROWSER_ROUTER } from '../config/routes'

const Router: React.FC = () => {
	const router = createBrowserRouter(BROWSER_ROUTER)

	return (
		<RouterProvider router={router} />
	)
}

export default Router
