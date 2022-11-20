export const generateColor = () => {
    const colors = [
        "#feab90",
        "#ffcc81",
        "#e6ed99",
        "#82deeb",
        "#cf94d9",
        "#f48fb0",
        "#7fcbc5",
    ];
    return colors[Math.floor(Math.random() * 6)];
};
