export function GetProducts() {
    return new Promise((result, error) => {
        const products = [
            { text: "braSpace", image: "bra-1.jpg" },
            { text: "braOlive", image: "bra-2.jpg" },
            { text: "braSpace", image: "bra-3.jpg" },
            { text: "braSport", image: "bra-4.jpg" },
            { text: "braSpace", image: "bra-1.jpg" },
            { text: "braOlive", image: "bra-2.jpg" },
            { text: "braSpace", image: "bra-3.jpg" },
            { text: "braSport", image: "bra-4.jpg" },
            { text: "braSpace", image: "bra-1.jpg" },
            { text: "braOlive", image: "bra-2.jpg" },
            { text: "braSpace", image: "bra-3.jpg" },
            { text: "braSport", image: "bra-4.jpg" },
            { text: "braSpace", image: "bra-1.jpg" },
            { text: "braOlive", image: "bra-2.jpg" },
            { text: "braSpace", image: "bra-3.jpg" },
            { text: "braSport", image: "bra-4.jpg" },
            { text: "braSpace", image: "bra-1.jpg" },
            { text: "braOlive", image: "bra-2.jpg" },
            { text: "braSpace", image: "bra-3.jpg" },
            { text: "braSport", image: "bra-4.jpg" },
        ];
        result(products);
    });
}
