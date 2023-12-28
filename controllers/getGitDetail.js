"use strict";
const noOfCommits= require("../models/gitQueries")
exports.gitDetail= async (req,res)=>{
    const func=(noOfCommits(req.body.userName, req.body.year));
    const obj={"query": func};
    try{
        const data = await fetch("https://api.github.com/graphql",
            {
                method:"POST",
                headers:{
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
                },
                body:JSON.stringify(obj)
            }
        );
        const result= await data.json();
        return result.data.user.contributionsCollection.contributionCalendar.totalContributions;
    }
    catch(error){
        return error;
    }
}
