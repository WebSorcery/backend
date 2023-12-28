"use strict";
const cloudinaryConfig = require("../configs/cloudinary_config");
const domain=[
    "Data-Structure-Algorithms",
    "Competitive-Programming",
    "Web-Development",
    "Programming-Languages",
    "AI-and-ML",
    "Database",
    "Security",
    "Version-Control",
    "Mobile-Development",
    "Cloud-DevOps",
]
let result=[];
exports.getResources = async (res) => {
    try{
        const resourcesData = await Promise.all(
            domain.map(async (domain) => {
            const resourcesData = await cloudinaryConfig.v2.api.resources({
                type: 'upload',
                prefix: `addResources/${domain}`,
                context: 'true',
                max_results: 500,
            });
            result.push(resourcesData);
            return resourcesData;
            })
        );
        return resourcesData;
    }
    catch(error){
        console.log(error);
    }
}