import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import  styles  from "./styles";
import orders from "../../../assets/data/orders"
import restaurants from "../../../assets/data/restaurants"
import BasketDishItem from '../../components/BasketDishitem';


const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
        <View style={styles.page}>         
            <Image source={{ uri: order.Restaurant.image}} style={styles.image} />
            <View style={styles.container}>
                <Text style={styles.title}>{order.Restaurant.name}</Text>
                <Text style={styles.subtitle}> {order.status} &#8226; 2 dias atrás</Text>
                <Text style={styles.menuTitle}>Meus Pedidos</Text>
            </View>
        </View>
    </View>
  );
};

const OrderDetails = () => {
    return (
        <FlatList
        ListHeaderComponent={OrderDetailsHeader}
         data={restaurants[0].dishes} renderItem={({item}) => <BasketDishItem basketDish={item}/>}/>
    )
};

export default OrderDetails;

