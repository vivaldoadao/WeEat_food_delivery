import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable} from "react-native";

import {AntDesign} from "@expo/vector-icons"
import BasketDishItem from "../../components/BasketDishitem";
import { useBasketContext } from "../../contexts/BasketContext";
import { useOrderContext } from "../../contexts/OrderContext";



const Basket= () => {
    const {restaurant, basketDishes, totalPrice } = useBasketContext();
    const {createOrder} = useOrderContext();
    
    return (
        <View style={styles.page} >
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={{fontWeight: "bold", marginTop: 20, fontSize: 19}}>Tuas Encomendas</Text>

            <View style={styles.separator}/>

            <FlatList data={basketDishes} renderItem={({item}) => <BasketDishItem basketDish={item}/>}/>
            

            

            
            <Pressable onPress={createOrder} style={styles.button}>
                <Text style={styles.buttonText}>
                    Encomendar - ${totalPrice.toFixed(2)}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        paddingVertical: 40,
        padding: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
        marginVertical: 10,
    },
    description: {
        color: "grey",
    },
    separator: {
        height: 1,
        backgroundColor: "lightgrey",
        marginVertical: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
       
    },
    quantity:{
        fontSize: 25,
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: "black",
        marginTop: "auto",
        padding: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 16 ,
    },
    quantityContainer: {
        backgroundColor: "lightgrey",
        paddingHorizontal: 5,
        marginRight: 10,
        paddingVertical: 2,
        borderRadius: 3,
    },

})

export default Basket;