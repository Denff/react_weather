// import React, { Component } from 'react';

// export default class LoginApiKey extends Component {

//     handleSubmit(e) {
//         e.preventDefault();
//         const value = e.target.elements[0].value;

//         const API_KEY = '';
        
//         window.localStorage.setItem('api_key', value);


//     };


//     let loginUser = () => {
//         localStorage.setItem("api_key", "000-key-000");
//         API_KEY.push(value);
//     };

//     render() {
//         return (
//             <>
//                 <div>
//                     <form onSubmit={this.handleSubmit}>
//                         <label >Введите Ваш API_KEY</label>
//                         <div>
//                             <input autoComplete="off" name="api_key" type="text" />
//                         </div>
//                         <div>


//                             {!isAuth ? (
//                                 <button onClick={loginUser} type="submit">
//                                     ApiKey in
//                                 </button>
//                             ) : null }
//                         </div>
//                             {/* <button type="submit">войти</button></div> */}
//                     </form>
//                 </div>
//             </>
//         )
//     }
// }

