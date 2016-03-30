function sandwitchMaker() {
    var magicIngredient = "peanut better";
    function make(filling) {
        return magicIngredient + " and " + filling;
    }
    return make;
}
var f = sandwitchMaker();
f("jelly");
f("bananas");



console.log( makeSandwitch());