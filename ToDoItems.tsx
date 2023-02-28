import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import ToDoItem from './ToDoItem';

type toDoItemsProps = {};

function ToDoItems(props: toDoItemsProps) {
  const persistedItems = useSelector(state => state.toDoItems);

  return (
    <View>
      {persistedItems.length > 0 ? (
        persistedItems.map(item => (
          <ToDoItem
            itemTitle={item.itemTitle}
            id={item.id}
            toDoItems={persistedItems}
            key={item.itemTitle}
          />
        ))
      ) : (
        <View>
          <Text>
            You don't have any to do list items yet. Why not make one?
          </Text>
        </View>
      )}
    </View>
  );
}

export default ToDoItems;
