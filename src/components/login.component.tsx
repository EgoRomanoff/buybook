import {Component, useEffect, useState} from "react"
import { Navigate } from "react-router-dom"
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import AuthService from "../services/auth.service"

type State = {
    redirect: string | null,
    username: string,
    password: string,
    loading: boolean,
    message: string
};

function Login(props: {}) {

    const [state, setState] = useState<State>({
        redirect: null,
        username: "",
        password: "",
        loading: false,
        message: ""
    })
    // componentDidMount
    useEffect(() => {
        const currentUser = AuthService.getCurrentUser()

        if (currentUser) {
            setState({
                ...state,
                redirect: "/profile"
            })
        }
    }, [])

    // componentWillUnmount
    useEffect(() => {

        return () => {
            window.location.reload()
        }
    }, [state]) // ?????????????

    const validationSchema = () => {
        return Yup.object().shape({
            username: Yup.string().required("This field is required!"),
            password: Yup.string().required("This field is required!"),
        })
    }

    const handleLogin = (
        formValue: {
            username: string,
            password: string
        }
    ) => {
        const { username, password } = formValue

        setState({
            ...state,
            message: '',
            loading: true
        })

        AuthService.login(username, password)
            .then(() => {
                setState({
                    ...state,
                    redirect: '/profile'
                })
            }
                // error => {
                // ...
                // }
            )
    }

}