import React from 'react';
import HeroSlider from '../../Component/HeroSlider';
import LastestNews from '../../Component/LastetNews';
import EmergencyNumbers from '../../Component/EmergencyNumbers';
import SafetyTips from '../../Component/SafetyTips';

const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <LastestNews></LastestNews>
            <EmergencyNumbers></EmergencyNumbers>
            <SafetyTips></SafetyTips>
        </div>
    );
};

export default Home;