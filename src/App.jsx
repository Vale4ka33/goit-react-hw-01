import Profile from "./components/Profile/Profile";

import usersData from "./data/userData.json";

function App() {
  return (
    <>
      <Profile
        name={usersData.username}
        tag={usersData.tag}
        location={usersData.location}
        image={usersData.avatar}
        stats={usersData.stats}
      />
    </>
  );
}

export default App;
