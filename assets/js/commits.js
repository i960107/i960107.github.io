const  USER = 'i960107'
const EMAIL = 'i960107@naver.com'

const response = fetch('https://api.github.com/users/i960107/events',{
    headers : {"Content-Type" : "application/json"}
    // body : {
        // since:,
        // until:,
    // }
})
// .then(events => {
//     let lastCommit 
//     console.log(typeof JSON.stringify(events))
//    (events, event =>{
//         return event.type == 'PushEvent'
//     })
//     events.some(event =>{
//         // return event.type == 'PushEvent' && event.payload.commits.reverse().some(commit => {
//         //   if (commit.author.email == EMAIL) {
//         //       lastCommit = {
//         //           message: commit.message
//         //       }
//         //       return true
//         //   } 
//         //   return false
//         // })
//         // console.log(event)
//         return event.type == 'PushEvent'
//     })
//     console.log(lastCommit)
//     return lastCommit
// })

.then(events=>{
    return events.json()
})
.then(events=>{
    console.log( events)
})
console.log(response)