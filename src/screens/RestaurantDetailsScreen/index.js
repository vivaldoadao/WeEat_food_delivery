import { View, Text, Image, FlatList, StyleSheet, ActivityIndicator , Pressable } from "react-native"
import { useState, useEffect } from "react";
import {Ionicons} from "@expo/vector-icons"
import DishListItem from "../../components/DishListItem";
import  Header  from "./Header";
import  styles  from "./styles";
import { useRoute , useNavigation } from "@react-navigation/native";
import { DataStore } from 'aws-amplify';
import {Restaurant, Dish} from "../../models";
import { useBasketContext } from "../../contexts/BasketContext";

//const restaurant = restaurants[0];



const RestaurantDetailsPage = () => {
    const [restaurant , setRestaurant] = useState(null);
    const [dishes , setDishes] = useState([]);
    const route = useRoute();
    const id = route.params?.id;

    const {setRestaurant: setBasketRestaurant,  basket, basketDishes} = useBasketContext();

    useEffect(() => {
        if(!id){
            return;
        }
        setBasketRestaurant(null);
        DataStore.query(Restaurant, id).then(setRestaurant);
        DataStore.query(Dish , (dish) => dish.restaurantID("eq" , id)).then(setDishes);
    },[id]);

    useEffect(() => {

        setBasketRestaurant(restaurant);

    }, [restaurant]);


    const navigation = useNavigation();

    if(!restaurant) {
        return <ActivityIndicator size={45} />;
    }
   
    return (
        <View style={styles.page}>
           
            <FlatList
                ListHeaderComponent={() => <Header restaurant={restaurant} />}
                data={dishes}
                renderItem={({item}) => <DishListItem dish={item}  />}
                keyExtractor={(item) => item.name}
            />
             <Ionicons onPress={() => navigation.goBack()} name="arrow-back-circle" size={45} color="white" style={styles.iconContainer} />
            {basket && (
                <Pressable onPress={() => navigation.navigate("Basket")} style={styles.button}>
                <Text style={styles.buttonText}>
                    Open Basket ({basketDishes.length})
                </Text>
                </Pressable>
            )}
           
            
        </View>
    );
};

export default RestaurantDetailsPage;