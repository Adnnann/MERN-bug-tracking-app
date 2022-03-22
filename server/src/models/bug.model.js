import moongose from 'mongoose'

const BugsSchema = new moongose.Schema({
    userId:{
       type:String
    },
    name:{
        type: String,
        trim:true,
        required: 'Name is required',
        match:[/^[a-zA-Z0-9 ]*$/g, 'Only letters and number are allowed for name']
    },
    details:{
        type: String,
        required:'Details need to be entered'
    },
    steps:{
        type: String,
        required: 'Steps required',

    },
    version:{
        type: String,
        required:'Version is required'
    },
    priority:{
        type:String,
        required: 'Priority level is required',
    },
    assigned:{
        type: String,
        required: 'Task must be assigned to someone',
    },
    creator: {
        type: String,
        required: 'Creator must be entered',
    },
    date:{
        type:Date,
        default: Date.now
    },
    status:{
        type: String,
        default:'Active'
    },
    updated: Date
})

export default moongose.model('Bug', BugsSchema)