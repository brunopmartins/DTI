import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  button: {
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingRight: '12px',
    paddingLeft: '12px',
    height: '5vh',
    lineHeight: '1.25',
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: "Helvetica",
    fontSize: '14px',
    minWidth: 0,
    background: 'linear-gradient(to top, #27ae60, #2ecc71)',
    '&:hover': {
      background: 'linear-gradient(to top, #1f8c4d, #2ecc71)',
    },
    '&:active': {
      background: 'linear-gradient(to top, #1a733f, #27ad60)',
    },
  }
}));

const CustomButton = React.forwardRef(
  ({ children, disabled, onClick, ButtonProps }, ref) => {
    const classes = useStyles();

    return (
      <Button
        variant="contained"
        disabled={disabled}
        className={classes.button}
        onClick={onClick}
        ref={ref}
        {...ButtonProps}
      >
        {children}
      </Button>
    );
  }
);

export default CustomButton;
