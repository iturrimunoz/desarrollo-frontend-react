import gitHubLogo from "../../assets/github.png";


const Logo = () => {
    return (
        <div>
                <a href="https://github.com/iturrimunoz/desarrollo-frontend-react" target="_blank">
                  <img src={gitHubLogo} className="logo" alt="Github logo" />
                </a>
                   
        </div>
    );
};
export default Logo;