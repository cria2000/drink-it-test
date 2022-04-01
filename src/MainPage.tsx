import * as React from 'react';
import strings from "./Constant/strings";
import {HighlightSpan} from "./Component/HighlightSpan";
import messages from "./Constant/messages";
import './Styles/css/MainPage.css'
import {useNavigate} from "react-router-dom";

type Props = {

};
export const MainPage = (props: Props) => {
    const navigation = useNavigate()

    const handleClickStartButton = () => {
        navigation('question')
    }

    return (
        <div className="main_page">
            <div className="change_language">
                <button><div className="button_change"/><div>{strings.eng}</div></button>
            </div>
            <img className="main_page_header_logo" alt='drink_it_header' src={require('./Images/drinkItHeader.png')} />
            <div className="main_title">
                <div>{strings.mainTitle}</div>
                <HighlightSpan originKeyword={messages.whatIsMyDrinkIt} highlightKeyword={strings.drinkIt} />
            </div>
            <button className="button_start" onClick={handleClickStartButton}>{messages.startTest}</button>

            <div className="main_enquiry_information">
                <div>{messages.enquiryInformation}</div>
                <div>{messages.testEnquiry}</div>
                <div>{messages.drinkItEnquiry}</div>
            </div>
        </div>
    );
};