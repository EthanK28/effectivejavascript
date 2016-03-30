function makeSandwitch(magicIngredient) {
    function make(filling) {
        return magicIngredient + " and " + filling;
    }
    return make;
}
var hamAnd = sandwitchMaker("ham");
hamAnd("cheese");


console.log( makeSandwitch());