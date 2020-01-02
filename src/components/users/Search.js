
import React, { useState, useContext} from 'react'
// import PropTypes from 'prop-types';
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/alertContext'

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext)

    const [text, setText] = useState('');

    //Se for uma normal function, é preciso utilizar o .bind no momento de evocá-la
    const onSubmit = (e) => {
        e.preventDefault();
        if( text === '') {
            alertContext.setAlert('light', 'Please enter something...')
        } else {
            githubContext.searchUsers(text)
            setText('');
        }
    }

    const onChange = (e) => {
        setText(e.target.value)
    }
    
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users..." value={text}
                    onChange={onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                    {
                        githubContext.users.length > 0 && (
                            <button className="btn btn-light btn-block"
                            onClick={githubContext.clearUsers}>Clear</button>     
                        )
                    }
                    
                </form>
            </div>
        )
}

// Search.propTypes = {
//     searchUsers: PropTypes.func.isRequired,
//     clearUsers: PropTypes.func.isRequired,
//     showClear: PropTypes.bool.isRequired,
//     setAlert: PropTypes.func.isRequired
// }

export default Search;