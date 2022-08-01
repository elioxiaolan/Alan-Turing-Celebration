const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: {type : String, required: true},
    jobType: {type : String, required: true},
    employeeType: {type : String, required: true},
    description : {type : String, required: true},
    responsibility : {type : String, required: false},
    minimumQualification : {type : String, required: true},
    preferredQualification: {type : String, require: true},
    company :{type : String, required: true},
    email : {type : String, required: true},
    companyDescription : {type : String, required: false},
    mentorDescription : {type : String, required: false},
    appliedCandidates : {type : [] , required: true},
    postedBy : {type : String, required: true},
},{
    timestamps : true,
})

const jobModel = new mongoose.model('jobs' , jobSchema)
module.exports = jobModel