import Style from "./Navigation.module.css"
function Navigation() {
    return (
        <div className={Style.Navigation}>

            <h1>Logo</h1>
            <ul>
                <li>Home</li>
                <li>Aboou</li>
                <li>Profile</li>
                <li>Contact</li>
            </ul>

        </div>
    );
}
export default Navigation;

