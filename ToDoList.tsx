import React from 'react';
import {View, Button} from 'react-native';
import ToDoItems from './ToDoItems';

function ToDoList({navigation}) {
  return (
    <View>
      <Button
        onPress={() => {
          navigation.navigate('AddItem');
        }}
        title="Add Item"
      />
      <Button
        onPress={() => {
          navigation.navigate('CompletedItems');
        }}
        title="View Completed Items"
      />
      <ToDoItems />
    </View>
  );
}

export default ToDoList;
