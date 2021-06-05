import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
export default function About() {
  return (
    <div className="about-div">
      <p className="info badge-info">
        <AccountBoxIcon fontSize="large" style={{ color: "#EA4335" }}/> 
        <p>You can Create a badge to share your
        progress on Social Networks{" "}
        <strong>
          <a
            href="https://badge.gcrfsstc.study"
            style={{
              textDecoration: "none",
              backgroundColor: "#EA4335",
              color: "#fff",
            }}>
            &nbsp;here&nbsp;
          </a>
          .
        </strong>
        </p>
      </p>
      <p className="info">
        This website is only for students enrolled in Google Cloud Ready
        Facilitator Program under Shri Shankaracharya Technical Campus, Bhilai.
        <br />
        <br />
        If you find any error in the result, please contact the Facilitators.
        <br />
        <br />
        This project is not endorsed and/or supported by Google, the
        corporation.
      </p>
      <p className="credit">
        <strong>&lt;/&gt;</strong> with &#10084;&#65039; by &nbsp;
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://www.linkedin.com/in/ashishchawda/"
          style={{ textDecoration: "none", color: "#EA4335" }}>
          Ashish Chawda
        </a>
      </p>
      <p className="social">
        <a
          rel="noreferrer noopener"
          className="social-link github"
          target="_blank"
          href="https://github.com/pixan198">
          <GitHubIcon className="social-link-github" fontSize="large" />
        </a>
        <a
          rel="noreferrer noopener"
          className="social-link linkedin"
          target="_blank"
          href="https://www.linkedin.com/in/ashishchawda/">
          <LinkedInIcon className="social-link-linkedin" fontSize="large" />
        </a>
        <a
          rel="noreferrer noopener"
          className="social-link twitter"
          target="_blank"
          href="https://twitter.com/ashish11chawda">
          <TwitterIcon className="social-link-twitter" fontSize="large" />
        </a>
        <a
          rel="noreferrer noopener"
          className="social-link instagram"
          target="_blank"
          href="https://www.instagram.com/_tachyon._">
          <InstagramIcon className="social-link-instagram" fontSize="large" />
        </a>
      </p>
    </div>
  );
}
