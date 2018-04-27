import React, {PropTypes} from 'react';

// Import css
import './Login.css';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Button from 'material-ui/Button';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      THIS IS THE LOGIN COMPONENT
      </div>
    );
  }
}

Login.propTypes = {};

// <Card>
//   <CardTitle title="Card title" subtitle="Card subtitle"/>
//   <CardText>
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
//   </CardText>
//   <CardActions>
//   <Button variant="raised" color="primary">
//     LOGIN
//   </Button>
//   <Button variant="raised" color="secondary">
//     SIGNUP
//   </Button>
//   </CardActions>
// </Card>
