import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import searchImage from './../../Icons/search.png';

const styles = () => {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '0px',
      height: '99%',
      width: '99%',
    },
    input: {
      width: '100%',
      height: '100%',
      backgroundColor: '#F7F7F7',
      paddingLeft: '43px',
      paddingRight: '5px',
      padding: '0px 21px 0px 5px',
      cursor: 'auto',
      outline: 'none',
      borderWidth: '0px',
      boxSizing: 'border-box',
      background: `url(${searchImage}) no-repeat left 19px center`,
    },
  };
};

class NetwardenSearchModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleChange = event => {
    const { handleChange } = this.props;
    this.setState({ search: event.target.value }, () =>
      handleChange(this.state.search)
    );
  };

  render() {
    const { classes, placeHolder = '', borderRadius = false } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <input
          className={classes.input}
          value={this.state.value}
          placeholder={placeHolder}
          onChange={this.handleChange}
          style={{ borderRadius: borderRadius || '' }}
        />
      </form>
    );
  }
}

export default withStyles(styles)(NetwardenSearchModal);
