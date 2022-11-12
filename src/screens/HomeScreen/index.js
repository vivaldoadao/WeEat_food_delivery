
import { StyleSheet,FlatList, View} from 'react-native';
import RestauranteItem from '../../components/RestaurantItem';
import { DataStore } from 'aws-amplify';
import {Restaurant} from "../../models";
import { useState, useEffect } from 'react';



export default function HomeScreen() {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    const results = await DataStore.query(Restaurant);
    setRestaurants(results);
  }

  useEffect(() => {
      fetchRestaurants();
  },[]);
    
  return (
        <View style={styles.pages}>
        <FlatList data={restaurants} 
        renderItem={({item})=><RestauranteItem restaurant={item}/>}
        showsVerticalScrollIndicator={false}
        
        />
        </View>
  );
}

const styles = StyleSheet.create({
    pages: {
        padding: 10,
    },
});
