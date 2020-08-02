import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Select from 'react-select';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import Images from '../../../../constants/images';

PhotoForm.propTypes = {
    
};

function PhotoForm(props) {
    return (
        <Form>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" name="title" id="title" placeholder="Title" />
            </FormGroup>
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
    );
}

export default PhotoForm;