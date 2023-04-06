import Joi from "joi"

const schema = Joi.object({
    name: Joi
        .string()
        .required()
        .min(3)
        .messages(
            {
                'string.min': 'The name must be at least 3 characters',
                'string.empty': 'The name cannot be empty',
                'any.required': 'A name is required'
            },
        ),
    mail: Joi
        .string()
        .required()
        .min(8)
        .email({ minDomainSegments: 2  })
        .messages(
            {
                'string.min': 'The mail must be at least 8 characters',
                'string.empty': 'The mail cannot be empty',
                'any.required': 'A mail is required',
                'string.email': 'A valid mail is necessary'
            }
        ),
    password: Joi
        .string()
        .required()
        .min(8)
        .max(50)
        .messages(
            {
                'string.min': 'The password must be at least 8 characters',
                'string.max': 'The password cannot exceed 50 characters',
                'string.empty': 'The password cannot be empty',
                'any.required': 'A password is required',
            }
        ),
        country: Joi
        .string()
        .required()
        .messages(
        {

            'string.empty': 'The country cannot be empty',
            'any.required': 'A country is required',
        }),
        address: Joi
        .string()
        .required()
        .messages(
        {
            'string.empty': 'The address cannot be empty',
            'any.required': 'A address is required',
        }),
        mailing_address: Joi
        .string()
        .required()
        .messages(
        {
            
            'string.empty': 'The mailing_address cannot be empty',
            'any.required': 'A mailing_address is required',
        })
})

export default schema