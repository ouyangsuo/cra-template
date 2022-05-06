import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../store/actions';

function WithAuth(Com) {
    const mapStateToProps = (state) => {
        console.log("mapStateToProps state", state);
        return {
            username: state.username
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            doLogout: (e) => dispatch(logout())
        }
    }

    function NewCom(props) {
        const navigate = useNavigate()

        /* 当低阶组件被加载时 判断全局有没有username 没有则直接踹到登录页 */
        /* 有全局的username则渲染低阶组件 */
        useEffect(() => {
            console.log("props.username", props.username);
            if (!props.username) {
                navigate("/login")
            }
        }, [props.username])

        return <Com {...props} />
    }

    return connect(mapStateToProps, mapDispatchToProps)(NewCom)
}

export default WithAuth