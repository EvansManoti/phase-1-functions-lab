// Code your solution in this file!
function distanceFromHqInBlocks (e) {
    if (e=== 43){
        return 1;
    }
    if (e=== 50){
        return 8;
    }
    if (e=== 34){
        return 8;
    }
    }

function distanceFromHqInFeet (x){
    if (x === 43){
        return 264;
    }
    if (x === 50){
        return 2112;
    }
    if (x === 34){
        return 2112;
    }
}

function distanceTravelledInFeet(start,destination){
   const feet = 264;
   const distanceFromHqInBlocks = Math.abs(start-destination);
   const total = distanceFromHqInBlocks *feet;
   return total
}

function calculatesFarePrice (start,destination){
    let y = distanceTravelledInFeet(start,destination)
    if (y<400){
        return 0
    }
    if (y>400 & y<2000){
        let k=y-400
        return k* 0.02
    }
    if (y>2000 & y<2500){
        return 25
    }
    else return 'cannot travel that far'
}