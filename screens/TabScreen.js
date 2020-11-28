import React from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Subtitle,
  Content,
  Tab,
  Tabs,
} from 'native-base';
import {View, Text} from 'react-native';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const TabScreen = () => {
  return (
    <Container>
      <Header hasTabs>
        <Left />
        <Body>
          <Title>Boring News</Title>
          <Subtitle>Made by | Abhishek</Subtitle>
        </Body>
        <Right />
      </Header>
      <Tabs>
        <Tab heading="Business">
          <Tab1 />
        </Tab>
        <Tab heading="Sports">
          <Tab2 />
        </Tab>
        <Tab heading="Science">
          <Tab3 />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default TabScreen;
