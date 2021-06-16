import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

const useStyles = makeStyles(() => ({
  scrollbar: {
    width: '100%',
    height: '100%',
    '& .os-scrollbar': {
      padding: 0,
      '& .os-scrollbar-handle': {
        borderRadius: 6,
        backgroundColor: '#bab8b8',
      },
    },
    '& .os-scrollbar.os-scrollbar-vertical': {
      width: 5,
      transition: 'width 200ms ease 1s',
      '&:hover': {
        width: 8,
        transitionDelay: '0s',
      },
    },
    '& .os-scrollbar.os-scrollbar-horizontal': {
      height: 5,
      transition: 'height 200ms ease 1s',
      '&:hover': {
        height: 8,
        transitionDelay: '0s',
      },
    },
  },
}));

const CustomScrollbars = React.forwardRef(
  ({ className, children, extensions, options, ...rest }, ref) => {
    const classes = useStyles();
    return (
      <OverlayScrollbarsComponent
        className={classNames(classes.scrollbar, className)}
        extensions={extensions}
        options={options}
        ref={ref}
        {...rest}
      >
        {children}
      </OverlayScrollbarsComponent>
    );
  }
);


export default CustomScrollbars;
