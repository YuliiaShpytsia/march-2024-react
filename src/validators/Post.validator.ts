import Joi from "joi";

export const postValidator =
    Joi
        .object({
            title: Joi.string().pattern(/[a-zA-Z]+$/).required().messages({
                "string.pattern.base": "only words accepted",
                "string.required.base": "title cannot be empty",
            }),
            body: Joi.string().pattern(/[a-zA-Z]+$/).required().messages({
                "string.pattern.base": "only words accepted",
                "string.required.base": "body cannot be empty",
            }),
            userId: Joi.number().min(1).max(10).required().messages(
                {
                    'number.required': 'userId cannot be empty',
                    'number.min': 'min value = 1',
                    'number.max': 'max value = 10',
                },
            ),
        })