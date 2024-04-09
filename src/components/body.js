import React from "react";
import "../styles/body.css";
import onboarding1 from "../assets/images/onboarding1.png";
import onboarding2 from "../assets/images/onboarding2.png";

function Body() {

    return (
        <div className="body">
            <div className="main-body1-board">
                <div className="main-body1">
                    <div className="main-body1-left">
                        <div className="main-body-title">
                            <div>Yologa!</div>
                        </div>
                        <div className="main-body-contents">
                            <div>내 주변의 모든 러닝크루</div>
                            <div>Yologa에서 확인하고 참여하세요.</div>
                        </div>
                        <img className="main-down-button" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" />
                    </div>
                    <div className="main-body1-right">
                        <img className="main-body1-img" src={onboarding1} alt="main1"/>
                    </div>
                </div>
            </div>
            <div className="main-body2-board">
                <div className="main-body1">
                    <div className="main-body2-left">
                        <img className="main-body1-img" src={onboarding2} alt="main1"/>
                    </div>
                    <div className="main-body2-right">
                        <div className="main-body2-title">
                            <div>Yologa에서만</div>
                            <div>만나볼 수 있는 정보</div>
                        </div>
                        <div className="main-body2-contents">
                            <div>러닝크루의 다양한 정보와 이벤트</div>
                            <div>Yologa에서 확인할 수 있어요</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Body;