const noOfCommits = (username, year)=>{
    
    return (`query {
        user(login: "${username}") {
        contributionsCollection(from: "${year}-01-01T00:00:00Z", to: "${parseInt(year) + 1}-01-01T00:00:00Z") {
            contributionCalendar {
            totalContributions
            }
        }
        }
    }
`);
}
module.exports= noOfCommits;
