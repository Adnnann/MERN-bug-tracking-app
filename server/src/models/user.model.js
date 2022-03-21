import mongoose from 'mongoose'
import crypto from 'crypto'

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:'Username is required',
        trim: true,
        match:[/^[a-zA-Z0-9 ]*$/g, 'Only letters and number are allowed for name']   
    },
    hashed_password:{
        type:String,
        required: 'Password is required'
    },
    role:{
        type:Number
    },
    salt:String
})

UserSchema.virtual('password')
.set(function(password){
    this._password = password,
    this.salt = this.makeSalt(),
    this.hashed_password = this.encryptPassword(password)
})

UserSchema.methods = {
    authenticate: function(plainText){
        return this.encryptPassword(plainText) === this.hashed_password
    },
    encryptPassword: function(password){
        if(!password) return ''
        try{
            return crypto
            .createHmac('sha1', this.salt)
            .update(password)
            .digest('hex')
        }catch(err){
            return err
        }
    },
    makeSalt: function(){
        return Math.round((new Date().valueOf() * Math.random())) + ''
    }
}

UserSchema.path('hashed_password').validate(function(v){
    if(this._password && this._password.length < 6){
        this.invalidate('password', 'Password must be at least 6 characters')
    }
}, null)

export default mongoose.model('User', UserSchema)
