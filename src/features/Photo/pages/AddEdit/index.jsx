import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import PhotoForm from 'features/Photo/components/PhotoForm';
import Images from 'constants/images';
import Banner from 'components/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useHistory, useParams } from 'react-router-dom';

AddEditPage.propTypes = {
    
};

function AddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();
    const isAddMode = !photoId;
    const editedPhoto = useSelector(state => state.photos.find(x => x.id === +photoId));
    const initialValues = isAddMode ?
    {
        title: '',
        categoryId: null,
        photo: ''
    }
    : editedPhoto;

    const handleSubmit = (values) => {
        return new Promise(resolve => {
            if(isAddMode) {
                setTimeout(() => {
                    console.log(values);
                    const action = addPhoto(values);
                    dispatch(action);
                }, 2000)
            } else {
                const action = updatePhoto(values);
                dispatch(action);
            }
            history.push('/photos');
            resolve(true);
        })
    }

    return (
        <div className="photo-edit">
            <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={Images.ORANGE_BG} />
            <div className="photo-edit__form">
                <PhotoForm
                    isAddMode={isAddMode}
                    initialValues={initialValues}
                    onSubmit={ handleSubmit }
                />
            </div>
        </div>
    );
}

export default AddEditPage;