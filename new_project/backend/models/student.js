var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudentSchema = new Schema(
    {
        username: {type: String, required: true, maxlength: 30},
        password: {type: String, required: true, maxlength: 20},
        name: {type: String, required: true, maxlength: 100}
    }
);

StudentSchema
.virtual('url')
.get(function () {
    return 'student/' + this._id;
});

module.exports = mongoose.model('Student', StudentSchema);