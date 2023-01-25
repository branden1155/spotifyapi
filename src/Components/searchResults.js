const Songs = ({ search }) => {

    return (
      <div>
        <a href={search.artistUrl}>
            <h1>{search.title}</h1>
            <h2>{search.artist}</h2>
            <img width="200"  src={search.albumImage} alt={search.title}/>
        </a>
      </div>
    );
  };
  

  export default Songs;