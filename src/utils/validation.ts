import * as yup from 'yup'
import { SchemaLike } from 'yup/lib/types'

yup.setLocale({
	mixed: {
		required: () => ({key: 'validation.required', values: {}})
	},
	string: {
		// @ts-ignore
		min: ({min}) => ({key: 'validation.min', values: {min}}),
		email: () => ({key: 'validation.email', values: {}}),
		required: () => ({key: 'validation.required', values: {}})
	}
})

const signInSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required().min(8),
}) 

const signUpSchema = yup.object().shape({
	username: yup.string().required().min(3),
	email: yup.string().email().required(),
	password: yup.string().required().min(8)
})

export function validateSignin(values: any, t: any) {
	return validate(signInSchema, values, t)
}

export async function validateSignup(values: any, t: any) {
	return validate(signUpSchema, values, t)
}

async function validate(schema: SchemaLike, values: any, t: any) {
	const message: any = {};

	try {
		await schema.validate(values, {abortEarly: false, stripUnknown: true});
	} catch ({ inner }) {
		// @ts-ignore
		inner.map(({ path, errors }) => {
		const error: any = errors[0]

		if (!message[path]) {
			message[path] = t(error.key, error.values)
		}
	});	
	} finally {
		return message;
	}
}
