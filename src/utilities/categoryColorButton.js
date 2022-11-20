export const categoryColorButton = (category) => {
    const parseCategory = category.toLowerCase();
    if (parseCategory === "home") return "#feab90";
    if (parseCategory === "work") return "#ffcc81";
    if (parseCategory === "personal") return "#e6ed99";
    return "#82deeb";
};
