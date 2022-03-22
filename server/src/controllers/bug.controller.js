import Bug from '../models/bug.model'
import _ from 'lodash'
import dbErrorHandlers from './helpers/dbErrorHandlers'
import jwtDecode from 'jwt-decode'

const createBug = (req, res) => {

    const bug = new Bug(req.body) 
    bug.save((err)=>{
        if(err){
            return res.send({error: dbErrorHandlers.getErrorMessage(err)})
        }
        return res.send({message: 'Bug successfuly created'})
    })
}
const getBugs = (req, res) => {
    // get id to enable filtering of data
    const userId = jwtDecode(req.cookies.userJwtToken)._id
    Bug.find({})
    //0 are users 1 admins
    .exec((err, bugs) => {
        if(err){
            return res.send({error:dbErrorHandlers.getErrorMessage(err)})
        }
        res.send(bugs)
    })
}

const getBug =  (req, res) => {
    res.status(200).json(req.profile)
}
const updateBug = (req, res, next) => {

    let bug = req.profile
    bug = _.extend(bug, req.body);

    bug.updated = Date.now()
    bug.save(err=>{
        if(err){
            return res.send({error: dbErrorHandlers.getErrorMessage(err)})
        }
        res.send({message: 'Data updated'})
    })
}

const removeBug = (req, res, next) => {
    let bug = req.profile
    bug.remove((err)=>{

        if(err){
            return res.send({error: errorHandler.getErrorMessage(err)})
        }
      res.send({message:'Bug deleted'})
    })
}
  

const bugByID = (req, res, next, id) => {
    Bug.findById(id).exec((err, bug) => {
        if(err || !bug){
            return res.send({error: errorHandler.getErrorMessage(err)})
        }
    req.profile = bug;
    next()
    })
}

export default {
    createBug,
    getBugs,
    updateBug,
    removeBug,
    getBug, 
    bugByID
}
