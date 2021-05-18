import React from 'react'
import styled from 'styled-components';
import Particle from '../Components/Particle';
import EmailIcon from '@material-ui/icons/Email';
import ContactItem from '../Components/ContactItem';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import {MainLayout} from '../styles/Layouts';

function HomePage() {
    const email = <EmailIcon />
    return (
        <Homepagestyled>
            <div className="particle-con">
                <Particle />
            </div>
            <MainLayout >
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
            </MainLayout>
            <ContactItem title={'tejasrajanna@gmail.com'} icon={email} />
        </Homepagestyled>
    )
}

const Homepagestyled=styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .particle-con{
        position: absolute;
        width: 100%;
    }`

export default HomePage;