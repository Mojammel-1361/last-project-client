import React from 'react';
import AdvertisedItems from '../../AdvertisedItems/AdvertisedItems';
import Category from '../../Category/Category';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Category></Category>
            <AdvertisedItems></AdvertisedItems>
            <Services></Services>
        </div>
    );
};

export default Home;