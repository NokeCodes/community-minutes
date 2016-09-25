import React from 'react';
import {Link} from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import {Flex, Box } from 'reflexbox';

export default React.createClass({
  getDefaultProps() {
    return {
      location: {},
      params: {},
      menu:[]
    };
  },
  getInitialState() {
    return {
      activeIndex: 0,
      loading: true
    };
  },
  componentDidMount() {
    this.setState({
      loading: false
    })
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  handleSubmit(e) {
    this.context.router.push({
      pathname: '/'
    })
  },
  render() {
    return (
        <Flex col={12} style={{
              margin: '0',
              padding: '10px',
              width: '100%',
              backgroundColor: 'white',
              whiteSpace: 'nowrap'
          }}>
          {this.props.menu.map((element,i) => {
            return (
              <Box key={i} col={4}>
                <Link key={i} to={element.path}>
                  <FlatButton
                    href={element.path}
                    label={element.title}
                    onTouchTap={this.clickHandler}
                  >
                  </FlatButton>
                </Link>
              </Box>
            )
          })}
        </Flex>
    );
  }

});
