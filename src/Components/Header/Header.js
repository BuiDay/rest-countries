import React, { useContext } from 'react';
import styled from 'styled-components';
import SwitchMode from './SwitchMode';
import { ThemeContext } from '../ThemeContext/ThemeContext.js';
import {Link} from 'react-router-dom'
const Header = () => {
    const themeContext = useContext(ThemeContext);
    return (
        <HeaderPane className={themeContext.theme}>
            <Link to={'/'}>
                <span className="title" > Where are you from?</span>
            </Link>
            <SwitchMode />
        </HeaderPane>
    );
};

export default Header;

const HeaderPane = styled.div`
    height:10vh;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 40px;
    box-shadow: var(--BoxShadow);

    .title{
        font-size:24px;
        font-weight:bold;
        text-shadow:var(--TextShadow);
        cusor:pointer;
    }
`