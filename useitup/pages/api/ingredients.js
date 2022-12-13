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
                 + ingredients.join(",+");
    var r = await fetch(apiUri);
    var y = await r.json(); 
    res.status(200).json(y);
}