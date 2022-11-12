import { View, Text, Image, FlatList, StyleSheet } from "react-native"
import restaurants from"../../../assets/data/restaurants"
import {Ionicons} from "@expo/vector-icons"
import DishListItem from "../../components/DishListItem";
import  styles  from "./styles";
const restaurant = restaurants[0];

const DEFAULT_IMAGE = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";
const RestaurantHeader = ({restaurant}) => {
    return (
        <View style={styles.page}>

            
            <Image source={{ uri: restaurant.image.startsWith('http') ? restaurant.image : DEFAULT_IMAGE,}} style={styles.image} />
           
                
           
            <View style={styles.container}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.subtitle}> {restaurant.deliveryFee.toFixed(1)} 
            Kz  &#8226; {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} minutos</Text>
            <Text style={styles.menuTitle}>Menu</Text>
            </View>

      
            
        </View>
    );
};



export default RestaurantHeader;