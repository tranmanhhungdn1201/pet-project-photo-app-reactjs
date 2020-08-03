import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import { Formik, Form, FastField } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';

PhotoForm.propTypes = {
    
};

function PhotoForm(props) {
    const initialValues = {
        title: '',
        categoryId: null
    };

    return (
       <Formik
        initialValues={initialValues}
       >
           {formilProps => {
               //do something here...
               const {values, errors, touched } = formilProps;

               return (
                <Form>
                    <FastField
                        name="title"
                        component={InputField}

                        lable="Title"
                        placeholder="Wow nature"
                    />
                    <FastField
                        name="categoryId"
                        component={SelectField}
                        options={PHOTO_CATEGORY_OPTIONS}
                        lable="Category"
                        placeholder="Category.."
                    />
                    <FormGroup>
                        <Label for="category">Category</Label>
                        <Select
                            id="category"
                            name="category"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Photo</Label>
                        <div>
                            <Button outline color="primary">Random a photo</Button>
                        </div>
                        <div>
                            <img width="280px" height="280px" src={Images.PINK_BG} alt="colorfull" />
                        </div>
                    </FormGroup>
                    <Button>Add to album</Button>
                </Form>
               )
           }}
       </Formik>
    );
}

export default PhotoForm;