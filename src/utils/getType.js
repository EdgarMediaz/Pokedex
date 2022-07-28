
const getType = (type) => {
    if(type === "normal"){
        return 'silver'
    } else if(type === 'fighting'){
        return 'purple'
    } else {
        return 'orange'
    }
};

export default getType;