import React, { Component } from 'react'
import {Alert,View,ActivityIndicator,Text} from 'react-native';
import { LogBox } from 'react-native';
import {getNews} from '../getScienceNews';
import DataItems from '../dataItems';
import { Container, Content, List } from 'native-base';

export class Tab3 extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading:true,
      data:null
    }
  }

  

  componentDidMount(){
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    getNews().then(data=>{
      this.setState({
        isLoading:false,
        data:data
      });
    })
  }

  render() {
      let view = this.state.isLoading ? (<View>
        <ActivityIndicator animating={this.state.isLoading}/>
        <Text>Please Wait</Text>
      </View>
      ):(
        <List 
        dataArray={this.state.data}
        renderRow={(item)=>{
          return <DataItems data={item}/>
        }}>
         
        </List>
      )
    return (
      <Container>
      <Content>
        {view}
      </Content>
    </Container>
    )
  }
}

export default Tab3
