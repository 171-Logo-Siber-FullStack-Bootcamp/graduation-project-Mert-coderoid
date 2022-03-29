export const brandFilter = (arr, category) => {
    if (!category) return arr;

    var list = [];
    arr.forEach(element => {
        for (let i of element) {
            if (i.category == category) {
                list.push(i);
            }
        }
    });
    list[0] = list
    return list;

    // return arr.filter(product => brand.includes(product.brand));
};