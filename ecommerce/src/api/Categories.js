export function GetCategories(){
    return new Promise((result, error) =>{
        const categories = [
            {text: "All"},
            {text: "bras"},
            {text: "panties"},
            {text: "bodysuits"},
            {text: "corsettes"},
            {text: "fantasy"},
        ];
        result(categories);
    });
}