import React, { useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos'
import { Link } from 'react-router-dom';
import GithubContext from '../context/github/githubContext'



const User = ({ match }) => {
    const githubContext = useContext(GithubContext)

    const { getUser, loading, user, repos, getUserRepos } = githubContext;

    //useEffect funciona como um loop. Ele faz requests, faz infinitas requests.
    //Para useEffect parar o loop, é precios adicionar [] após a arrow funciona do parâmetro.
    // Dentro do [] posso escrever em quais condições desejo executar o loop
    // [] vazio, faz a mesma coisa que o componentDidMount
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
    }, []);
    
  
   
        const { 
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            company,
            html_url,
            following,
            followers,
            public_repos,
            public_gists,
            hireable
         } = user;


         if(loading) return <Spinner />;

        return (
            <>
              <Link to='/' className='btn btn-light'>Back To Search</Link>  
              Hireable: {' '}
              {hireable ? (
              <i className="fas fa-check text-success" />              
               ) : (
               <i className="fas fa-times-circle text-danger" />
               )}
               <div className="card grid-2">
                   <div className="all-center">
                       <img  src={avatar_url} className="round-img"
                        alt="" style={{width: '150px'}}
                       />
                       <h2>{name}</h2>
                       <p>Location: {location}</p>
                   </div>
                   <div>
                    {bio && ( <>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </> 
                    )}
                    <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                    <ul>
                        <li>
                            {login && <>
                                <strong>Username: </strong> {login}
                                </>}
                        </li>
                        <li>
                            {company && <>
                                <strong>Company: </strong> {company}
                                </>}
                        </li>
                        <li>
                            {blog && <>
                                <strong>Blog: </strong> {blog}
                                </>}
                        </li>
                    </ul>
                   </div>
               </div>

               <div className="card text-center">
                   <div className="badge badge-primary">
                       Followers: {followers}
                   </div>
                   <div className="badge badge-success">
                       Following: {following}
                   </div>
                   <div className="badge badge-light">
                       Public Repos: {public_repos}
                   </div>
                   <div className="badge badge-dark">
                       Public Gists: {public_gists}
                   </div>
               </div>

               <Repos repos={repos} />
            </>
        );    
}

export default User;
