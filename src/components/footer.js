import React from "react";
import "../styles/footer.css";
import discord from "../assets/images/discord.png";
import github from "../assets/images/github.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-contact">
                <div className="contact-title">
                    Contact us
                </div>
                <div className="contact-content">
                    <button className="contact-item" onClick={contactEmail}>
                        <div className="contact-imoticon">📧</div>E-Mail
                    </button>
                    <button className="contact-item" onClick={contactDiscord}>
                        <img className="contact-img" src={discord} alt="discord-icon"></img>Discord
                    </button>
                    <button className="contact-item" onClick={contactGithub}>
                        <img className="contact-img" src={github} alt="github-icon"></img>Github
                    </button>

                </div>
            </div>
            <div className="footer-text"><a href="/">운영 정책</a> | <a href="/">개인정보 보호 정책</a> | <a href="/">고객센터</a></div>
            <p className="copyright">Copyright© 2024 Dobugs All rights reserved.</p>
        </footer>
    );
}

function contactDiscord() {
    window.open("https://discord.gg/r2NZdTke");
}

function contactGithub() {
    window.open("https://github.com/dobugs");
}

function contactEmail() {
    window.alert("클립보드에 메일 주소가 복사되었습니다.");
    navigator.clipboard.writeText("kyb062666@gmail.com");
}


export default Footer;