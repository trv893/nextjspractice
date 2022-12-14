    //get recipe card by id
// export default async function handler(req, res) {
//     var apiKey = process.env.NEXT_PUBLIC_KEY;
//     var id = await req.body.id;
//     var params = "&mask=starMask&backgroundImage=none&backgroundColor=ffffff&fontColor=333333";

//     var apiUri = "https://api.spoonacular.com/recipes/"
//                     + id
//                     + "/card"
//                     + "?apiKey="
//                     + apiKey
//                     + params
//                     ;
                    
//     var r = await fetch(apiUri);
//     var y = await r.json(); 
//     res.status(200).json(y);
// }

// export default async function handler(req, res) {
//     var apiKey = process.env.NEXT_PUBLIC_KEY;
//     var id = await req.body.id;
//     var params = "&mask=starMask&backgroundImage=none&backgroundColor=ffffff&fontColor=333333";

//     var apiUri = "https://api.spoonacular.com/recipes/"
//                     + id
//                     + "/card"
//                     + "?apiKey="
//                     + apiKey
//                     + params
//                     ;
                    
//     var r = await fetch(apiUri);
//     var y = await r.json(); 
//     res.status(200).json(y);
// }

//Generate a recipe card for a recipe
export default async function handler(req, res) {
    var apiKey = process.env.NEXT_PUBLIC_KEY;
    const formData = new formData();
    var apiUri = "https://api.spoonacular.com/recipes/visualizeRecipe/"
                    + "?apiKey="
                    + apiKey;

    var r = await fetch(apiUri);
    var y = await r.json(); 
    res.status(200).json(y);


    // formData.append('title', 'Recipe Title');
    // formData.append('image', 'https://spoonacular.com/recipeImages/716429-556x370.jpg');
    // formData.append('instructions', '1.Heat the oven the to 400F. Place the plums on a rimmed cookie sheet (lined with parchment paper for easier cleanup) and sprinkle with 2 tablespoons of the sugar. Roast until the plums are browning and tender but not falling apart, about 15 minutes.\n2.Bring about 2 inches of water to a bare simmer in a saucepan over medium-high heat. Reduce the heat to maintain a bare simmer. Combine the egg yolks, the remaining 4 tablespoons sugar, the plum brandy mixture, and a pinch of salt in a round-bottomed metal mixing bowl; whisk thoroughly.\n3.Set the bowl over the simmering waterthe base of the bowl should not touch the waterand whisk continuously. The egg yolks will begin to froth, lighten, and grow greatly in volume. If you sense that the yolks are at risk of scrambling, quickly remove the bowl from the heat and whisk to cool slightly, then continue. When soft peaks form, after 5 to10 minutes, the zabaglione is done. Transfer to a clean bowl, cover, and refrigerate.\n4.To serve, place 6 plum halves in the bottom of each of 4 glasses. Give the zabaglione a quick whisk and spoon it on top of the plums. Serve immediately.');
    // formData.append('ingredients', '2 cups greenbeans \n22 plums \n2 cups sugar \n4 egg yolks');
    // formData.append('servings', '4');
    // formData.append('time', '30');
    // formData.append('fontColor', '333333');
    // formData.append('backgroundColor', 'ffffff');
    // formData.append('backgroundImage', 'none');
    // formData.append('mask', 'ellipseMask');
    

