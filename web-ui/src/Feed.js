// Feed.js
import { Row, Col, Card, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


function Post({post}) {
 
  return (
    <Col>
      <Card>
        
        <Card.Text>
          
          Posted by {post.user.name} <br />
          {post.body}
        </Card.Text>
      </Card>
    </Col>
  );
}

function Submit(post) {
 return (
   <div>
     what
   </div>
 )
}

function Feed({posts}) {
  let rows = posts.map((post) => (
    <tr key={post.id}>
      <td>{post.name}</td>
      <td>{post.date}</td>
      <td>{post.user.name}</td>
      <td>{post.body}</td>
      <td>
        
        < Link to={{
          pathname: `${/events/}/${post.id}`,
          search: `chosenPost=${JSON.stringify({ ...post })}` //dog is the object to pass along
        }
        } >
          View Post
        </Link>
      </td>
    </tr>
  ));

  return (
    <div>
      <Row>
        <Col>
          <h2>List Events</h2>
          <p>
            <Link to="/events/new">
              New Event
            </Link>
          </p>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
                <th>Posted By</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { rows }
            </tbody>
          </table>
        </Col>
      </Row>
    </div>
  );

}

function other({posts}) {
  
  let cards = posts.map((post) => <Post post={post} key={post.id} />);
  return (
    <div>
      <p>
        <Link to="/events/new">
            New Event
        </Link>
      </p>
      <Row>
        { cards }
      </Row>
    </div>
  );
}

export default connect(({posts}) => ({posts}))(Feed);