import React, {ChangeEvent, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useAppDispatch} from './hooks';
import {
  completeToDoItem,
  deleteToDoItem,
  updateToDoItem,
} from './redux/toDoListSlice';

type toDoItemProps = {
  itemTitle: string;
  id: number;
  toDoItems: {itemTitle: string; id: number}[];
};

function ToDoItem(props: toDoItemProps) {
  const {itemTitle, id, toDoItems} = props;
  const [updateButtonPressed, setUpdateButtonPressed] = useState(false);
  const [updatedItemTitle, setUpdatedItemTitle] = useState(itemTitle);
  const index = toDoItems.map(item => item.id).indexOf(id);
  const dispatch = useAppDispatch();

  function deleteItem() {
    dispatch(deleteToDoItem({index: index}));
  }

  function updateToDoTitle() {
    dispatch(updateToDoItem({index: index, updatedTitle: updatedItemTitle}));
    setUpdateButtonPressed(false);
  }

  return (
    <View>
      {!updateButtonPressed ? (
        <View>
          <Text>{itemTitle}</Text>
          <Button
            onPress={() => {
              setUpdatedItemTitle(itemTitle);
              setUpdateButtonPressed(true);
            }}
            title="Update"
          />
        </View>
      ) : (
        <View>
          <TextInput
            value={updatedItemTitle}
            onChangeText={newText => setUpdatedItemTitle(newText)}
          />
          <View style={{flexDirection: 'row'}}>
            <Button
              onPress={() => {
                updateToDoTitle();
              }}
              title="Confirm Update"
            />
            <Button
              onPress={() => {
                setUpdateButtonPressed(false);
              }}
              title="Cancel Update"
            />
          </View>
        </View>
      )}
      <Button
        onPress={() => {
          deleteItem();
        }}
        title="Delete"
      />
      <Button
        onPress={() => {
          dispatch(completeToDoItem({index: index}));
        }}
        title="Complete"
      />
    </View>
  );
}

export default ToDoItem;
