const  USER = 'i960107'
const EMAIL = 'i960107@naver.com'

fetch('https://api.github.com/users/i960107/events',{
    headers : {"Content-Type" : "application/json"}
    // body : {
        // since:,
        // until:,
    // }
}).then(events => {
    let lastCommit
    events.some(event =>{
        return event.type == 'PushEvent' && event.payload.commits.reverse().some(commit => {
          if (commit.author.email == EMAIL) {
              lastCommit = {
                  message: commit.message
              }
              return true
          } 
          return false
        })
    })
    console.log(lastCommit)
    return lastCommit
})

console.log("안녕")