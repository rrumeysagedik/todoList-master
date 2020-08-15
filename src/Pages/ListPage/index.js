import React, {Component} from 'react';
import {View, Text, FlatList,TextInput,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { Input, Button } from '../../Input';

// actions
import {removeItem} from './../../Redux/actions/todoActions';
import {addItem} from './../../Redux/actions/todoActions';
import {updateItem} from './../../Redux/actions/todoActions';

class ListPage extends Component {
    constructor(props){
      super(props);
      this.state={
        title: '',
        desc: '',
        date:''
      }
    }

  renderItem = ({item}) => {
    
    return (
      <View
        style={{
          borderBottomWidth: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 12,
          flexDirection: 'column',
          flex:0.5
        }}>
        <View>
          <Text>{item.title}</Text>
          <Text>{item.desc}</Text>
          <Text>{item.date}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            alert('Silmek istediğinize emin misiniz?')
            this.props.removeItem(1);
          }}>
          <Text>Sil</Text>
        </TouchableOpacity>
         <View>
        
        <TouchableOpacity 
          onPress={() => {
            this.props.updateItem();
         }}>
           <Text>Güncelle</Text>
        </TouchableOpacity>
        </View> 
         
      </View>
      
    );
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor:'red'}}>
        <FlatList
        style={{backgroundColor:'green', flexGrow: 0}}
          data={this.props.list}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        
        <View style={{backgroundColor:'yellow', alignItems:'center'}} >
       <Input
            placeholder='Title'
            value={this.state.title}
            onChangeText={(value) => this.setState(  {title: value})}
          />

          <Input
            placeholder='Description'
            value={this.state.desc}
            onChangeText={(value) => this.setState({desc: value })}
          />
          <Input
            placeholder='Date'
            value={this.state.date}
            onChangeText={(value) => this.setState({date: value })}
          />
       </View>
          <TouchableOpacity style={styles.addstyle}
        
          onPress={() => {
            this.props.addItem(1);

         }}>
           <Text>Ekle</Text>
          </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    list: state.todo.list,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'gray'

  },
  title: {
    fontSize: 18,
  },
  desc: {
    fontSize: 14,
    color: 'gray'
  },
  addstyle:{
    fontSize:70,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:3
  }
});
export default connect(mapStateToProps, {removeItem ,addItem,updateItem})(ListPage);
