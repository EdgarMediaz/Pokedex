
const getType = (type) => {
    if(type === "normal"){
        return '#A8A77A'
    } else if(type === 'fighting'){
        return '#C22E28'
    } else if(type === 'flying'){
        return '#A98FF3'
    } else if(type === 'poison'){
        return '#A33EA1'
    } else if(type === 'ground'){
        return '#E2BF65'
    } else if(type === 'rock'){
        return '#B6A136'
    } else if(type === 'bug'){
        return '#A6B91A'
    } else if(type === 'ghost'){
        return '#735797'
    } else if(type === 'steel'){
        return '#B7B7CE'
    } else if(type === 'fire'){
        return '#EE8130'
    } else if(type === 'water'){
        return '#6390F0'
    } else if(type === 'grass'){
        return '#7AC74C'
    } else if(type === 'electric'){
        return '#F7D02C'
    } else if(type === 'psychic'){
        return '#F95587'
    } else if(type === 'ice'){
        return '#96D9D6'
    } else if(type === 'dragon'){
        return '#6F35FC'
    } else if(type === 'dark'){
        return '#605A68'
    } else if(type === 'fairy'){
        return '#D685AD'
    } else {
        return '#fff'
    }
};

export default getType;