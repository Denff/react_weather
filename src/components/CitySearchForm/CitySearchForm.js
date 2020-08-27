import React, { useContext } from "react"
import Context from "../../Context"
import style from "./CitySearchForm.module.scss"
import styles from "../Form/Form.module.scss"
import cn from "classnames"


const CitySearchForm = () => {
    const { api_call } = useContext(Context)
    return (
        <div className={ style.citySearch }>
            <form onSubmit={ api_call } className={ cn(style.citySearch__form, styles.form) }>
                <label className={ styles.form__label }>Введите город</label>

                <div className={styles.form__box}>
                    <div className={ styles.form__field }>
                        <input autoComplete="off" name="city" type="text" placeholder="Чикаго"/>
                    </div>
                    <div className={ styles.form__action }>
                        <button className={ styles.btn }>поиск</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CitySearchForm