import UserCard from "./UserCard";

function UserList(props) {
    const userList = props.userProps?.map((user) => { return (<UserCard key={user.id} user={user} />) })
    console.log("UserList - render");
    return (
        <>
            <ul>{userList}</ul>
        </>
    );
}

export default UserList;