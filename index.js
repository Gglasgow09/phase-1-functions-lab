

function distanceFromHqInBlocks(num) {
    const block = 42
    let distance =  Math.abs(num - block)   
    return distance 
}

function distanceFromHqInFeet(feet) {
    const num = distanceFromHqInBlocks(feet)
    return num * 264
}

function distanceTravelledInFeet(start, end) {
    //start  and end are streets
    //find the distance between them then convert to feet
    const block = Math.abs(start - end) * 264
    return block
}

function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start, destination)
    
    if (feet <= 400) {
        return 0
    } else if (feet > 400 && feet < 2000) {
        return (feet - 400) * .02
    } else if (feet >= 2000 && feet <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}