import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import PhotoForm from 'features/Photo/components/PhotoForm';
import Images from 'constants/images';
import Banner from 'components/Banner';

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