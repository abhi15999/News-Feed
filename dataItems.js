import React, {Component} from 'react';
import {
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';

export class dataItems extends Component {
    constructor(props){
        super(props);
        this.data = props.data;
    }
  render() {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri:
                  this.data.urlToImage ||'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
            }}
          />
        </Left>
        <Body>
          <Text>{this.data.title}</Text>
          <Text note numberOfLines={2}>
        {this.data.description}
          </Text>
        </Body>
        <Right>
         
        </Right>
      </ListItem>
    );
  }
}

export default dataItems;
