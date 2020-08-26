import React, { useContext } from "react"
import Context from "../../Context"
import style from "./CitySearchForm.module.scss"

const CitySearchForm = () => {
    const { api_call } = useContext(Context)
    return (
        <div className={ style.city-search }>
            <form onSubmit={ api_call } className={ style.city-search__form, style.form }>
                <label className={ style.form__label }>Введите город</label>
                <div className={ style.form__field }>
                    <input autoComplete="off" name="city" type="text" />
                </div>
                <div className={ style.form__action, style.city-search__submit }>
                    <button className={ style.btn, style.btn_search }>поиск</button>
                </div>
            </form>
        </div>
    )
}

export default CitySearchForm