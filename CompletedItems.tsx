import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useAppDispatch, useAppSelector} from './hooks';
import {restoreItem} from './redux/toDoListSlice';

function CompletedItems() {
  const dispatch = useAppDispatch();
  const persistedItems = useSelector(state => state.completedItems);
  // const completedItems = useAppSelector(state => state.toDoList.completedItems);

  return (
    <View>
      {persistedItems.length > 0 ? (
        persistedItems.map(completedItem => (
          <View>
            <Text>{completedItem.itemTitle}</Text>
            <Button
              onPress={() => {
                const index = persistedItems
                  .map(item => item.id)
                  .indexOf(completedItem.id);
                dispatch(restoreItem({index: index}));
              }}
              title="Restore"
            />
          </View>
        ))
      ) : (
        <View>
          <Text>Sorry, you don't have any completed to do list items yet.</Text>
        </View>
      )}
    </View>
  );
}

export default CompletedItems;
