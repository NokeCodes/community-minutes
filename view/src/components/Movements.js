import React from 'react';
import Movement from './Movement';
import InsetWrapper from './InsetWrapper';
import Loading from '../components/Loading';
import SearchContainer from '../containers/SearchContainer';
import _ from 'lodash';

import {Card} from 'material-ui/Card';

import axios from 'axios';

const Movements = React.createClass({
  getInitialState() {
    return {
      loading: true,
      data: []
    };
  },
  componentWillMount() {
    const suffix = this.props.location.pathname;
    const data = axios.get('http://10.10.17.247:8000/api/movements')
      .then(response => {
        console.log('got response');
        this.setState({
          data: response,
          loading:false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading:false
        })
      });
  },
  handleSubmit(e) {
    console.log('hit handle submit');
    this.setState({
      loading: true
    });

    let searchString = e.target.value
    const data = axios.get(`http://10.10.17.247:8000/api/movements/search?q=${searchString}`)
      .then(response => {
        console.log('got response');
        this.setState({
          data: response,
          loading:false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading:false
        })
      });

  },
  sortItems(){
    let criteria = event.target.value || 'date'
    console.log('sort');
    console.log(this.state.data);
    console.log(criteria);
    let sorted = _.sortBy(this.state.data.meeting, criteria)

    this.setState({
      data: sorted
    });
  },
  render() {
    console.log(this.state);
    return (
      <Card>
        <Loading loading={this.state.loading}>
        <SearchContainer
          onChange={this.handleChange}
          whenSubmit={this.handleSubmit}
          onSort={this.sortItems}
          data={this.state.data}>
            <InsetWrapper Container={Movement} title='Movements' data={this.state.data.data}/>
        </SearchContainer>
        </Loading>
      </Card>
    )
  }
});

export default Movements;
