import RandomPhoto from 'components/RandomPhoto';
import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Label, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';

RandomPhotoField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
    label: ''
};


function RandomPhotoField(props) {
    const { field, form, label } = props;
    const { name, value, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    const handleImageUrlChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl)
    }

    return (
         <FormGroup>
            { label && <Label for={name}>{label}</Label> }
            <RandomPhoto
                name={name}
                imageUrl={value}
                onImageUrlChange={handleImageUrlChange}
                onRandomButtionBlur={onBlur}
            />
            <div className={showError ? 'is-invalid' : ''}></div>
            <ErrorMessage name={name} component={FormFeedback}/>
        </FormGroup>
    );
}

export default RandomPhotoField;