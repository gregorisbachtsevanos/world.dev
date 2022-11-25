import Joi from 'joi'

const userSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(8).max(20).required(),
    repeatPassword: Joi.string().min(8).max(20).required()
})

export default { userSchema }