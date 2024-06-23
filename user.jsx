export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    name,
    login,
    url,
    created_at,
    public_repos,
  } = user;
  const createddate = new Date(created_at);
  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="user" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          User joined on{" "}
          {`${createddate.getDate()} ${createddate.toLocaleString("en-us", {
            month: "short",
          })} ${createddate.getFullYear()}`}
        </p>
      </div>
      <div className="profile-info">
        <div>
          <p>public repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}
