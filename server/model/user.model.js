import mongooes from 'mongoose';

const Userschema = new mongooes.Schema({
    fname: {
        type: String,
        required: true
    }, lname: {
        type: String,
        required: true
    }, email: {
        type: String,
        required: true
    }, password: {
        type: String,
        required: true
    }
});

const user = mongooes.model('user', Userschema);

export default user;