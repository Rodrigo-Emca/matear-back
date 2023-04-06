import Joi from "joi-oid"

const schema = Joi.object({
    title: Joi
        .string()
        .required()
        .min(3)
        .messages(
            {
                'string.min': 'The title must be at least 3 characters',
                'string.empty': 'The title cannot be empty',
                'any.required': 'A title is required',
            }
        ),
    cover_photo: Joi
        .string()
        .required()
        .min(8)
        .messages(
            {
                'string.min': 'The photo must be at least 8 characters',
                'string.empty': 'The photo cannot be empty',
                'any.required': 'A photo is required',
                'string.uri': 'A valid URL is necessary'
            }
        ),
    price: Joi
        .string()
        .required()
        .min(1)
        .messages(
            {
                'string.empty': 'The price cannot be empty',
                'string.min': 'The price must be  greater than 1 ',
            }
        ),
    stock: Joi
        .number()
        .required(),

    category_id: Joi
        .objectId()
        .required(),
    description: Joi
        .string()
        .required()
        .min(3)
        .messages(
            {
                'string.min': 'The title must be at least 3 characters',
                'string.empty': 'The title cannot be empty',
                'any.required': 'A title is required',
            }
        )
})

export default schema