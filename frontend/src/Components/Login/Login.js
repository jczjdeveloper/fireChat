import React, {PropTypes} from 'react';

// Import css
import './Login';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import Button from 'material-ui/Button';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <CardTitle title="Card title" subtitle="Card subtitle"/>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <Button label="Action1"/>
            <Button label="Action2"/>
          </CardActions>
        </Card>
      </div>
    );
  }
}

Login.propTypes = {};
