import React from 'react';
import Meeting from '../components/Meeting';
import _ from 'lodash';
import SearchContainer from './SearchContainer';
import data from '../config/data.js';

export default React.createClass({
	renderMeetings(filteredData) {
		return filteredData.map((e,i) => {
			const {date, place, attendance, movements} = e
			return (
				<Meeting
					key={i}
					i={i}
					meeting={{place, date}}
					attendees={attendance}
					movements={movements}
				/>
			)
		})
	},
	getInitialState() {
		return {
			filteredData: data,
			sortBy: 'date',
			loading: true
		};
	},
	componentDidMount() {
		this.setState({
			loading: false
		})
	},
	handleChange(e) {
		this.filterItems(e);
	},
	sortItems(event) {
		let criteria = event.target.value || 'date'
		let filtered = _.sortBy(this.state.filteredData, criteria)

		this.setState({
			filteredItems: filtered
		});
	},
  filterItems (e) {
    const filterText = e.target.value
    const reg = new RegExp(`\\b${filterText}\\b`, "gi")

    const filtered = data.filter(datum => {
      return _.find(datum, function(o, key) {
        if (filterText) {
          if (typeof o === 'string') {
            return o.search(reg) > -1;
          }
        } else {
          return true;
        }
      })
    });

    this.setState({
      filteredData: filtered
    })
  },
	render() {
		return (
			<SearchContainer
				onChange={this.handleChange}
				onSort={this.sortItems}
				data={this.state.data}>
				<div>
					{!this.state.loading && this.renderMeetings(this.state.filteredData)}
				</div>
			</SearchContainer>
		);
	}
});
