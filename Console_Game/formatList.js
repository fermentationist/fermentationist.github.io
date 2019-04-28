// Utility function formats a given list of terms (directions) as a string, separating them with commas, and a conjunction ("and"), or a disjunction ("or"), before the final term.
const formatList = function (itemArray, disjunction = false){
    const length = itemArray.length;
    const conjunction = disjunction ? "or" : "and";
    if (length === 1) {
        return itemArray[0];
    } 
    if (length === 2) {
        return `${itemArray[0]} ${conjunction} ${itemArray[1]}`;
        // return itemArray[0] + conjunction + itemArray[1];
    }
    return `${itemArray[0]}, ${formatList(itemArray.slice(1), disjunction)}`
}
export default formatList;