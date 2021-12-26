/********************************************************************************** 
* 
* You have information about n different recipes. 
* You are given a string array recipes and a 2D string array ingredients. 
* The ith recipe has the name recipes[i], 
* and you can create it if you have all the needed ingredients from ingredients[i].
* Ingredients to a recipe may need to be created from other recipes, 
* i.e., ingredients[i] may contain a string that is in recipes.
*
* You are also given a string array supplies containing all the ingredients that you initially have,
* and you have an infinite supply of all of them.
*
* Return a list of all the recipes that you can create. You may return the answer in any order.
*
* Note that two recipes may contain each other in their ingredients.
* 
**********************************************************************************/

var findAllRecipes = function(recipes, ingredients, supplies) {
    const suppliesSet = new Set(supplies);
    const recipesData = []; 
    const result = [];
    let initialCount;
    let index;
    let j;
    
    for (let i = 0; i < recipes.length; i++) {
        recipesData.push([i, recipes[i]]);
    }
    
    while (recipesData.length) {
        initialCount = recipesData.length;
        
        for (let i = recipesData.length - 1; i >= 0; i--) {
            index = recipesData[i][0];
            for (j = 0; j < ingredients[index].length; j++) {
                if (suppliesSet.has(ingredients[index][j])) continue;
                break;
            }
            
            if (j === ingredients[index].length) { 
                suppliesSet.add(recipesData[i][1]);
                result.push(recipesData[i][1]);
                recipesData.splice(i, 1);
            }
        }
        
        if (recipesData.length === initialCount) break;
    }
    
    return result;
};
