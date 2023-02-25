import { NavBar } from "../components"
import { FoodData } from "../components"

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="mt-3">
                <h3 className="text-center">Warteg Apps</h3>
                <br />
                <FoodData />
            </div>
        </>
    )
}

export default Home