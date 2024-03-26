import { useDispatch, useSelector, Provider  } from "react-redux";
import { setLogin } from '../redux/auth/authSlice';
import { store } from "../redux/store/store";
import "bootstrap/dist/css/bootstrap.min.css"; // import cass bootstrap
import parse from 'html-react-parser'; // import parse untuk prasing string html ke html murni

function LoginCheck() {
    const { isLogin } = useSelector((state : any ) => state.auth);
    const dispatch = useDispatch();

    function handleAuth(type = 'logout') {
        if (type === 'logout' || type === 'login') {
            dispatch(setLogin({ isLogin: type === 'login' ? true : false }));
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card mt-3">
                        <div className="card-header">Status Login</div>
                        <div className="card-body">
                            { isLogin ?
                                [ // jika berhasil login (isLogin = true)
                                parse('<div class="alert alert-success">Yay, berhasil login!!!</div>'),
                                <button className="btn btn-md btn-danger" onClick={() => handleAuth('logout')}>Log Out</button>
                                ]
                                :
                                [ // jika berhasil login (isLogin = true)
                                parse('<div class="alert alert-success">Anda telah logout!</div>'),
                                <button className="btn btn-md btn-primary" onClick={() => handleAuth('login')}>Log In</button>
                                ]
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <Provider store={store}>
            <LoginCheck />
        </Provider>
    );
}

export default App;
