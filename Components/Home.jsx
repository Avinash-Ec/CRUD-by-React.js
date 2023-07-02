import style from "./crud.module.css"
import { Link } from "react-router-dom"
const Home = () => {
    return (
    <div>

        <section id={style.nav}>
            <Link to="/create">Create User</Link>
            <Link to="/users">Users</Link>
        </section>
    </div>
    )
}
export default Home