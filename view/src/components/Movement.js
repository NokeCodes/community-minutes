import React from 'react';
import { ListItem } from 'material-ui/List';
import _ from 'lodash';
import {Flex, Box} from 'reflexbox';
// import InsetWrapper from './InsetWrapper';
const Movement = ({data, i, key, isOpen}) => {
  console.log(data.meeting.title);
  return (
      <ListItem
        key={key}
        value={i}
        primaryText={
          <Flex col={12}>
            <Box col={6}>{`${data.meeting.date} - ${data.meeting.organization.name}`}</Box>
            <Box col={6}>{
              `Num Aye: ${_.sumBy(data.votes, e => {
                return e.yay
              })}
                Num Nay: ${_.sumBy(data.votes, e => {
                return !e.yay
              })}`
            }</Box>
          </Flex>
        }
        secondaryText={data.title}
        secondaryTextLines={3}
        primaryTogglesNestedList={true}
        open={isOpen}
        nestedItems={
          data.votes.map((e, i) => {
            return (
              <ListItem
                value={i}
                primaryText={e.person}
                secondaryText={`vote: ${e.yay ? 'aye' : 'nay'}`}
              />
            )
          })
        }>
      </ListItem>
  );
}
Movement.propTypes = {
  data: React.PropTypes.object.isRequired
};

export default Movement;
