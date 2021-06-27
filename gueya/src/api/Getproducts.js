//productos hardcodeados para retornar promesas

export const Getproducts = () => {
    return new Promise((resolve, reject) => {
        resolve([
            {
                id: "1",
                name: "Camisa",
                price: 3000,
            },
            {
                id: "2",
                name: "Jean",
                price: 5000,
            },
            {
                id: "3",
                name: "Remera",
                price: 2000,
            },
        ]);
    });
};
