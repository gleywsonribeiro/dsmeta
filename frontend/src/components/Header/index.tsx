 import logo from '../../assets/logo.svg';
 import './styles.css';
function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DSMeta"/>
                        <h1>DSMeta</h1>
                        <p>Desenvolvido por
                            <a href="https://www.linkedin.com/in/gleywson-ribeiro-5b21a910b/"> Gleywson Ribeiro</a>
                        </p>
                </div>
            </header>
        </>
    )
}

export default Header;