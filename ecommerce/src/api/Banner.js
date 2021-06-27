export function GetBanners(){
    return new Promise((result, error) =>{
        const banners= [
            { text: "Summer Season", image: "beach-1.jpg", promo:"15%"},
            { text: "Back to school", image: "study-1.jpg", promo:"30%"},
            { text: "Passionate", image: "roses.jpg", promo:"50%"},
        ];
        result(banners);
    });
}