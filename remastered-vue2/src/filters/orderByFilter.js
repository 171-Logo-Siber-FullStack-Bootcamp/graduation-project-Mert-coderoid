

export const orderByFilter = (arr, type ) => {
    if(!type) return arr;
    if(type === 'asc') {
        console.log("---", arr[0])
        return arr[0].slice().sort((el1, el2) => el1.price - el2.price);
    } else {
        return arr[0].slice().sort((el1, el2) => el2.price - el1.price);
    }
};
