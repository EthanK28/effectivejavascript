function makeSandwitch() {
    var magicIngredient = "peanut better"
    function make(filling) {
        return magicIngredient + " and " + filling;
    }
    return make("jelly");
}

console.log( makeSandwitch());