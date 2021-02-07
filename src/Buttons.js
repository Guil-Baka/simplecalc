import React from 'react';
import PropTypes from 'prop-types';
import { Button, Box } from '@material-ui/core';

const Buttons = (props) => {
    const { plus,minus,timesby,divideby} = props;
    

    return (
        <Box display="flex">
            <Box mr={2}>
                <Button onClick={plus} variant="outlined" color="primary">+</Button>
            </Box>
            <Box mr={2}>
                <Button onClick={minus} variant="outlined" color="primary">-</Button>
            </Box>
            <Box mr={2}>
                <Button onClick={timesby} variant="outlined" color="primary">*</Button>
            </Box>
            <Box mr={2}>
                <Button onClick={divideby} variant="outlined" color="primary">/</Button>
            </Box>
        </Box>
    )
}
    
    Buttons.propTypes = {
        plus: PropTypes.func,
        minus: PropTypes.func,
        timesby: PropTypes.func,
        divideby: PropTypes.func
    }

export default Buttons;    