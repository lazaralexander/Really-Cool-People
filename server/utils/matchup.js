const MAX_POINTS = 9

// Favorite TA is most important q3
// - if users have the same 6 points
// favorite color is second most important - q1
// - if users have the same favorite color, they get 2 point
// fruit is least important - q2
// - if users have the same fruit, 1

const getMatchPercentage = (currentUser, matchedUser) => {

    let score = 0;
  
    if(currentUser.q1 == matchedUser.q1) {
        score+= 2
    }
    if(currentUser.q2 == matchedUser.q2) {
        score+= 1
    }
    if(currentUser.q3 == matchedUser.q3) {
        score+= 6
    }

    return score/MAX_POINTS
}

module.exports = { getMatchPercentage }