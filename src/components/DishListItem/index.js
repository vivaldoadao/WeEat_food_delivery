import { StyleSheet, Text, View , Image , Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DishListItem = ({dish}) => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate("Dish", {id: dish.id})}  style={styles.container}>
            <View style={{flex: 1}}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text  style={styles.description} numberOfLines={2}>{dish.description}</Text>
            <Text  style={styles.title}>{dish.price}</Text>

            </View>
            {dish.image && <Image source={{ uri: dish.image}} style={styles.image} />}
           
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        
        paddingVertical:10,
        marginVertical:10,
        marginHorizontal:20,
        borderBottomColor: "lightgrey",
        
        borderBottomWidth: 1,
        flexDirection: "row",
    },
    name: {
        fontWeight: "600",
        fontSize: 16,
        letterSpacing: 0.5,
    },
    description: {
        color: "grey",
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
    },
    image: {
        aspectRatio: 1,
        height: 75,
    },
});
export default DishListItem ;