import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikContainer() {
    const dropdownOptions = [
        { key: 'select an option', value: '' },
        { key: 'Option1', value: 'option1' },
        { key: 'Option2', value: 'option2' },
        { key: 'Option3', value: 'option3' }
    ]
    const radioOptions = [
        { key: 'Option1', value: 'rOption1' },
        { key: 'Option2', value: 'rOption2' },
        { key: 'Option3', value: 'rOption3' }
    ]
    const checkboxOptions = [
        { key: 'Option1', value: 'cOption1' },
        { key: 'Option2', value: 'cOption2' },
        { key: 'Option3', value: 'cOption3' }
    ]
    const initialValues = {
        email: '',
        discription: '',
        selectOption: '',
        radioOptions: '',
        checkboxOptions: [],
        birthDate: null
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        discription: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkboxOptions: Yup.array().required('Required'),
        birthDate: Yup.date().required('Required').nullable()
    })
    const onSubmit = values => console.log('Form data', values)
    return (

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>

            {
                formik => (
                    <Form>
                        <FormikControl
                            control='input'
                            type='email'
                            label='Email'
                            name='email' />

                        <FormikControl
                            control='textarea'
                            //type='textarea'
                            label='Description'
                            name='discription' />

                        <FormikControl
                            control='select'
                            label='Select a Topic'
                            name='selectOption '
                            options={dropdownOptions} />

                        <FormikControl
                            control='radio'
                            label='Radio Topic'
                            name='radioOption'
                            options={radioOptions} />

                        <FormikControl
                            control='checkbox'
                            label='Checkbox Topic'
                            name='checkboxOptions'
                            options={checkboxOptions} />

                        <FormikControl
                            control='date'
                            label='Pick a date'
                            name='birthDate' />    

                        <button type='submit'>Submit</button>
                    </Form>)

            }


        </Formik>

    )
}

export default FormikContainer