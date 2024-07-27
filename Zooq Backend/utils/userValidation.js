const Joi = require("joi");

const userRegisterValidate = (req, res, next) => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        mobileNumber: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    });

    const { error, value } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "Bad Request", error });
    }
    next();
};

const userLoginValidate=(req,res,next)=>{
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    });

    const { error, value } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "Bad Request", error });
    }
    next();
}

module.exports = {
    userRegisterValidate,
    userLoginValidate
};
