import style from './SearchCity.module.scss';
import styles from '../Form/Form.module.scss';

import React from 'react';
import Context from '../../Context';
import cn from 'classnames';

import Error from '../Error/Error';

const SearchCity = () => {
    const [city, setCity] = React.useState('');
    const [error, setError] = React.useState('');
    const { getWeather } = React.useContext(Context);

    const onChange = (e) => setCity(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        getWeather(city).then(() => {
            setError(null);
        }).catch(error => {
            setError(error.message);
        });
    }

    return (
        <div className={style.citySearch}>
            <form onSubmit={onSubmit} className={cn(style.citySearch__form, styles.form)}>
                <label className={styles.form__label}>Введите город</label>
                <div className={styles.form__box}>
                    <div className={styles.form__field}>
                        <input name="city" type="text" placeholder="Челябинск" value={city} onChange={onChange} />
                    </div>
                    <div className={styles.form__action}>
                        <button type="submit" className={cn(styles.btn, styles.btn_action)}>поиск</button>
                    </div>
                </div>
                {error !== null && <p>{<Error error={error} />}</p>}
            </form>
        </div>
    );

}

export default SearchCity;
