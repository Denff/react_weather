
import React, { Component } from 'react';

// const API_KEY = '';


let easeKey = 'e659141f96cf034901170e56e6407daa';
// let location = 'Челябинск';

class ApiKeyFormC extends Component {


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

        let apiKey = this.state.value;

        alert('Отправленное имя: ' + apiKey);
        if (!apiKey) {
            alert('Введите ключ!');

            return;
        }
        // fetch(`https://api.openweathermap.org/data/2.5/forecast?q=city&appid=${apiKey}&units=metric`)
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid=${apiKey}&units=metric`)

            .then(response => response.json())
            .then(result => {
                console.log(apiKey);
                // localStorage.setItem('api_key', apiKey);
                localStorage.setItem('api_key', result.apiKey);

                // location.reload();
            })
            .catch(error => alert('Неверный ключ'));
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Введите Ваш API_KEY или мой ключ: {easeKey}</label>
                <div>
                    <input autoComplete="off"
                        name={"api_key"}
                        type="text"
                        // value={this.state.apiKey}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>
                <div>

                    <button type="submit">
                        ApiKey in
                        </button>

                </div>
            </form>
        );
    }
}


export default ApiKeyFormC;
