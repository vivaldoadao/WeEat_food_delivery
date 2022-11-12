
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DEFAULT_IMAGE = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";
const RestauranteItem =({restaurant}) =>{

  const navigation = useNavigation();
  const onPress = () =>{
    navigation.navigate("Restaurante", {id: restaurant.id});
  };
    return(
      <Pressable onPress={onPress} style={styles.restaurantContainer}>
            <Image source={{ uri: restaurant.image.startsWith('http') ? restaurant.image : DEFAULT_IMAGE, }} 
            style={styles.image}/>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.subtitle}> {restaurant.deliveryFee.toFixed(1)} Kz  &#8226; {restaurant.minDeliveryTime} 
            - {restaurant.maxDeliveryTime} minutos
            </Text>
        </Pressable>
    )
  };
  

  export default RestauranteItem;

  const styles = StyleSheet.create({
    
    restaurantContainer: { 
      width: '100%',
      marginVertical: 10,
  
     },
     image: {
      width: '100%',
      aspectRatio: 5 / 3,
      marginBottom: 5,
     }, 
     title: {
      fontSize: 16,
      fontWeight: '500',
      marginVertical: 5,
     },
     subtitle: {
      color: "grey",
     }
  
  });
  