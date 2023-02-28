import React, {useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import {useAppDispatch} from './hooks';
import {addToDoItem} from './redux/toDoListSlice';

function AddItem({route, navigation}) {
  const [toDoItemTitle, setToDoItemTitle] = useState('');
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text style={{fontSize: 24, fontWeight: '600'}}>Title</Text>
      <TextInput
        placeholder="add your title here"
        value={toDoItemTitle}
        onChangeText={newTitle => setToDoItemTitle(newTitle)}
      />
      <Button
        onPress={() => {
          dispatch(addToDoItem({itemTitle: toDoItemTitle}));
          navigation.goBack();
        }}
        title="Add Item"
      />
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        title="Cancel"
      />
    </View>
  );
}

export default AddItem;
