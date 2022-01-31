import  Mongoose  from 'mongoose';
/* 
Adding model for todo's
TodoName - Name
TodoDescription- description
TodeCreated date
TodoUpdated Date

*/

const todoschema = new Mongoose.Schema({
    "Name": {
        type: String,
        required: "todo is required field"
    },
    "Description": {
        type: String,
        required: "description is required field"
    },
    "createdDate": {
        type: Date,
        default: Date.now
    },
    "lastModifiedDate": {
        type: Date,
        default: Date.now
    }
},
    {
    versionKey:false
});

todoschema.virtual("id", () => {
    return this._id.toHexString()
});

todoschema.set('toJSON', {virtuals: true});


const Todo = Mongoose.model('todo', todoschema);

export default Todo;