import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, FormFeedback } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    options: PropTypes.array,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

SelectField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
};

function SelectField(props) {
    const { field, form, type, label, placeholder, disabled, options } = props;
    const { name, value } = field;
    const selectedOption = options.find(option => option.value === value);
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;
        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };
        field.onChange(changeEvent);
    }

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Select
                type={type}
                id={name}
                {...field}
                value={selectedOption}
                placeholder={placeholder}
                disabled={disabled}
                options={options}
                onChange={handleSelectedOptionChange}

                className={showError ? 'is-invalid' : ''}
            />
        <ErrorMessage name={name} component={FormFeedback}/>
        </FormGroup>

    );
}

export default SelectField;