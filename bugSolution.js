```javascript
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';

const App = () => {
  const [myData, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate asynchronous data fetching
    setTimeout(() => {
      setMyData([ 
        { name: 'Item 1' },
        { name: 'Item 2' },
        { name: 'Item 3' }
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View>
       {isLoading ? (
        <ActivityIndicator size="large" /> 
      ) : (
        <FlatList
          data={myData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default App; 
```