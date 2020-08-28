import React, { useContext } from 'react';
import Context from '../../Context';




const LoginApiKey = () => {

   const { api_call } = useContext(Context);

    return (
        <div className={style.citySearch}>
            <form onSubmit={api_call} className={style.citySearch__form, style.form}>
                <label className={style.form__label}>Введите Ваш API_KEY</label>
                <div className={style.form__field}>
                    <input autoComplete="off" name="api_key" type="text" />
                </div>
                <div className={style.form__action}>
                    <button className={style.btn}>войти</button>
                </div>
            </form>
        </div>
    );
}

export default LoginApiKey;