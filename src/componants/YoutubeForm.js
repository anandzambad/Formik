import React from 'react'
import { Formik, Form, Field, ErrorMessage,FieldArray } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumber: ['',''],
    phNumbers: ['']

}
const onSubmit = values => {
    console.log('Form data', values)
}


const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format').required('Required!'),
    channel: Yup.string().required('Required!')
})


export const YoutubeForm = () => {


    //console.log('Visited fieled', formik.touched)

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className='form-control'><label htmlFor='name'>Name</label>
                    <Field type='text' id='name' name='name' />
                    <ErrorMessage name='name' component={TextError} />
                </div>
                <div className='form-control' ><label htmlFor='email'>Email</label>
                    <Field type='email' id='email' name='email' />
                    <ErrorMessage name='email'>
                        {errMsg => <div className='errors'>{errMsg}</div>}
                    </ErrorMessage>
                </div>
                <div className='form-control'> <label htmlFor='channel'>Channel</label>
                    <Field type='text' id='channel' name='channel' />
                    <ErrorMessage name='channel' />
                </div>
                <div className='form-control'> <label htmlFor='channel'>Comments</label>
                    <Field type='text' as='textarea' id='comments' name='comments' />
                </div>
                <div className='form-control'><label htmlFor='facebook profile'>facebook</label>
                    <Field type='text' id='facebook' name='social.facebook' />
                </div>
                <div className='form-control'><label htmlFor='twitter profile'>twitter</label>
                    <Field type='text' id='twitter' name='social.twitter' />
                </div>
                <div className='form-control'><label htmlFor='primaryPh'>Primary Phone Number</label>
                    <Field type='text' id='primaryPh' name='phoneNumber[0]' />

                </div>
                <div className='form-control'><label htmlFor='secondaryPh'>secondary Phone Number</label>
                    <Field type='text' id='secondaryPh' name='phoneNumber[1]' />

                </div>
                <div className='form-control'><label>List of phone number</label>
                <FieldArray name='phNumbers'>
                    {fildArrayProps =>{
                        console.log('filedArrayProps',fildArrayProps)
                        const { push, remove, form }= fildArrayProps
                        const { values }= form
                        const { phNumbers }=values
                        return(
                            <div>
                                { phNumbers.map((phNumber, index) => (
                                        <div key={index}>
                                            <Field name={`phNumber[${index}]`} />
                                            {index >0 && (
                                                <button type='button' onClick={( )=> remove(index)}>
                                                    {' '}
                                                    -{' '}
                                                </button>
                                            )}
                                            <button type='button' onClick={()=>push('')}>
                                                {' '}
                                                +{' '}
                                            </button>
                                            </div>
                                    ))
                                }
                            </div>
                        )
                    }}

                </FieldArray>

                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}
