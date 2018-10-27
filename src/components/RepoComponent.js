import React from 'react';

const RepoComponent = (props) => {


  //if props = nothing
  //return instructions to search
  if(props.items.length < 1){
    return (
      <h1 className="repo-list">Please use the search bar to search for Repo's</h1>
    )
  }else{
    //if props doesn't = nothing
    //return the props list
    return (
      <div className="repo-list">
        <ul>
          {props.items.map(repo => (
            <li key={repo.id}>Repo Name: {repo.name} | <a href={repo.url} id="links">Repo Link</a></li>
          ))}
        </ul>
      </div>
    )

  }



}

export default RepoComponent;
