import React, { Component } from 'react';
import styles from '../Form/Form.module.scss';
import style from './Login.module.scss';
import cn from 'classnames';

let easeKey = 'bcf980ddad060235362e000190ac5da3'; //chelinvest

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const apiKey = this.state.value;

        if (!apiKey) {
            alert('Введите ключ!');

            return;
        }
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=miass&appid=${apiKey}&units=metric`)
            .then(response => response.json().then(data => ({ data, response })))
            .then(result => {
                if (result.response.ok) {
                    console.log(result.response.ok);
                    localStorage.setItem('api_key', apiKey);
                    window.location.reload();
                } else {
                    alert('Неверный ключ');
                }
            })
            .catch(error => {
                alert('Неверный ключ');
            });

    };

    render() {
        return (
            <div className={style.login__container}>
                <form onSubmit={this.handleSubmit} className={cn(styles.form, styles.form__login)}>
                    <label className={style.login__label}>Введите Ваш api_key или этот ключ: {easeKey}</label>
                    <div className={style.login__field}>
                        <input
                            name={"api_key"}
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className={style.login__action}>
                        <button type="submit" className={cn(styles.btn, styles.btn__login)}>Login</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default Login;
