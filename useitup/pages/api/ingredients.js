    //get recipes by ingredients

export default async function handler(req, res) {
    //todo: get the api key from the environment
    var apiKey = process.env.NEXT_PUBLIC_KEY;
    var ingredients = await req.body;
    var bt = typeof(ingredients);
    if (!Array.isArray(ingredients)){
        res.status(400).json({error: "body must be an array of strings"});
    }

    var apiUri = "https://api.spoonacular.com/recipes/findByIngredients?apiKey="
                 + apiKey 
                 + "&ingredients="
                 + ingredients.join(",+")
                 + "&number=1"
                        //  specifies Whether to maximize used ingredients (1) or minimize missing ingredients (2) first
                 + "&ranking=1"
                        //Whether to ignore typical pantry items, such as water, salt, flour, etc.
                //  + "&ignorePantry=true";
    var r = await fetch(apiUri);
    var y = await r.json(); 
    res.status(200).json(y);
}




    //get recipe by id
// export default async function handler(req, res) {
//     //todo: get the api key from the environment
//     var apiKey = process.env.NEXT_PUBLIC_KEY;
//     var id = await req.body;

//     var apiUri = "https://api.spoonacular.com/recipes/"
//                     + id
//                     +"/information"
//                     + "?apiKey="
//                     + apiKey;
                 
//     var r = await fetch(apiUri);
//     var y = await r.json(); 
//     res.status(200).json(y);
// }




    //get recipe card by id
    // export default async function handler(req, res) {
    //     //todo: get the api key from the environment
    //     var apiKey = process.env.NEXT_PUBLIC_KEY;
    //     var id = await req.body;
    
    //     var apiUri = "https://api.spoonacular.com/recipes/"
    //                     + id
    //                     + "/card"
    //                     + "?apiKey="
    //                     + apiKey
    //                     ;
                     
    //     var r = await fetch(apiUri);
    //     var y = await r.json(); 
    //     res.status(200).json(y);
    // }




    //create recipe card by id
    // export default async function handler(req, res) {
    //     var apiKey = process.env.NEXT_PUBLIC_KEY;
