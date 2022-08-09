//survey page
//kick people out if they've already taken survey

//question options//
ROLES = ["frontend, backend, fullstack"] // complementary role is 5 points
VALUES = ["ab", "ac", "ad", "communication", "hungry"] // worth 1 point ea
IDENTIFIERS = ["straight", "gay"] // worth 2 points ea
// max 9 points

const MAX_POINTS = 9

//match algorithm//
const match = () => {
  
  // has all unmatched users
  otherUsers = []

  bob = {
    role: "frontend",
    values: ["communication", "hungry"],
  }

  scoredUsers = []

  otherUsers.forEach(otherUser => {
    let runningScore = 0;

    if(otherUser.role !== bob.role) {
      runningScore+= 5
    }
    
    otherUser.values.forEach(value => {
      if (bob.values.includes(value)) {
        runningScore+= 1
      }
    })

    otherUser.identifiers.forEach(identifier => {
        if (bob.identifiers.includes(identifier)) {
          runningScore+= 2
        }
      })

    scoredUser.push({
      id: otherUser.id,
      score: runningScore / MAX_POINTS
    })
  })

  [{
    id: "xxx",
    score: 1.5
  }]
}