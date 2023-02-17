import Card from 'react-bootstrap/Card';

function UserCard(props) {
    console.log("UserCard - render");

    return (
        <Card bg="light" border='light' className='m-5' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.user.img} />
            <Card.Body>
                <Card.Title>{props.user.name}</Card.Title>
                <Card.Text>
                    {props.user.email}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default UserCard;