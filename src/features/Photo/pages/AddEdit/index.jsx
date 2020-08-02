import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images';
import PhotoForm from '../../components/PhotoForm';
import './styles.scss';

AddEditPage.propTypes = {
    
};

function AddEditPage(props) {
    return (
        <div className="photo-edit">
            <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={Images.ORANGE_BG} />
            <div className="photo-edit__form">
                <PhotoForm />
            </div>
        </div>
    );
}

export default AddEditPage;