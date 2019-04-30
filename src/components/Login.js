import React, { Component } from 'react'

class Login extends Component {

    userLogin = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        fetch("http://localhost:3001/authenticate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({ email, password })

        }).then(res => res.json())
            .then(data => {
                // remove console.log
                console.log(data)
                // if (statusCode is successful) {
                localStorage.setItem("auth_token", data.auth_token)

                // } else {
                //     // eventually display the error to user
                //     console.log(data.error)
                // }
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.userLogin}>
                    <label>Email:</label>
                    <input type="email" name="email" id="email" /><br />
                    <label>Password:</label>
                    <input type="password" name="password" id="password" /><br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login