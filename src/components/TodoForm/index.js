import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {

    const { onSubmit } = props;
    const [value, setValue] = useState('');

    function handleSubmit(e) {
        // Prevent reloading browser
        e.preventDefault();
        if (!onSubmit) return;

        const formValues = {
            title: value,
        };
        onSubmit(formValues);

        // Reset form
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={e => setValue(e.target.value)} />
            <input type="submit" value="Add"></input>
        </form>
    );
}

export default TodoForm;