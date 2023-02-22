import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";

import { CATEGORIES } from "../data/dummy-data";

// move to inside to component Categories to have access to `props.navigation`
// const renderCategoryItem = (itemData) => {
//     function pressHandler(){

//     }
//     return <CategoryGridTitle title={itemData.item.title}
//                               color={itemData.item.color}
//                                whenPressExecute={pressHandler}/>;
// }

// props.navigation is special prop send by Navigator.Screen
function CategoriesScreen(props){
    
    function renderCategoryItem(itemData) {
       
        return <CategoryGridTitle title={itemData.item.title}
                                  color={itemData.item.color}
                                  whenPressExecute={() => { 
                                    props.navigation.navigate("MealsOverview", {
                                      categoryId: itemData.item.id,
                                  }) } } />;
    }

    return <FlatList data={CATEGORIES} 
                     keyExtractor={(item)=> item.id}
                     renderItem={renderCategoryItem} 
                     numColumns={2}/>

}

export default CategoriesScreen

// numColumns={2} in two columns
