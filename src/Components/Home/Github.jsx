import githubLogo from "../../assets/github.svg";
const GitHub = () => {
  return (
    <div>
      <a href="https://github.com/iturrimunoz/desarrollo-frontend-react.git" target="_blank">
        <img src={githubLogo} className="logo github" alt="Github logo" />
      </a>
    </div>
  );
};

export default GitHub;
