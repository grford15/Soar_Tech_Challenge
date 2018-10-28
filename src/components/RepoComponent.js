import React from 'react';

const RepoComponent = (props) => {


  //if props = nothing
  //return instructions to search
  if(props.items === undefined || props.items.length < 1  ){
    return (
      <h1 className="repo-list">Please use the search bar to search for Repo's</h1>
    )
  }else{
    //if props doesn't = nothing
    //return the props list
    return (
      <div className="repo-list">
        <ul className="u-list">
          {props.items.map(repo => (
            <li key={repo.id}><b>Repo Name:</b> {repo.name} |
            <b> Language: </b> {repo.language} |
            <b> Stars: </b> {repo.stargazers_count} |
            <b> Forks: </b> {repo.forks} |
            <a href={repo.html_url} id="links"> Repo Link</a>
            </li>
          ))}
        </ul>
      </div>
    )

  }



}

export default RepoComponent;
