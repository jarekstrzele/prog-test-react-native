import { View, FlatList, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen(props){

 const catId = props.route.params.categoryId;
 const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
 });

function renderMealItem(itemData){
    const mealItemProps = {
        title: itemData.item.title,
        imageUrl: itemData.item.imageUrl,
        affordability: itemData.item.affordability,
        complexity: itemData.item.complexity,
        duration: itemData.item.duration
    }
    return  <MealItem {...mealItemProps}   />
}

    return(
        <View style={styles.container}>
            <FlatList data={displayedMeals} 
                      keyExtractor={(item) => item.id}
                      renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsOverviewScreen ;

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 16 ,
    }
})