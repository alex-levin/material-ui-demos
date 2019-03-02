import React, { Component } from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Form from "./Form";
import TableDemo from './TableDemo';

const styles = {
  div: {
    display: "flex",
    flexDirection: "row wrap",
    padding: 20,
    width: "100%"
  },
  paperLeft: {
    flex: 1,
    height: "100%",
    margin: 10,
    textAlign: "center",
    padding: 10
  },
  paperRight: {
    height: 600,
    flex: 4,
    margin: 10,
    textAlign: "center"
  }
};

class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <div style={styles.div}>
            <Paper zDepth={3} style={styles.paperLeft}>
              <h4>Links</h4>
              <div><Link to="/">Form</Link></div>
              <div><Link to="/tableDemo">Table Demo</Link></div>
            </Paper>
            <Paper zDepth={3} style={styles.paperRight}>
              <h4>Components</h4>
              <Route exact path="/" render={props => (
                <Form />
              )} />
              <Route path="/tableDemo" component={TableDemo} />
            </Paper>
          </div>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(Home);
