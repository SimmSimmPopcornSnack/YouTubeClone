import { useLocation } from "react-router-dom"

// runs action(location) on location, i.e. route, change
const useLocationChange = (action) => {
    const location = useLocation()
    React.useEffect(() => { action(location) }, [location])
}
