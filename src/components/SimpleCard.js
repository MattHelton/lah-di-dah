// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Choices from './Choices'
// import Paper from '@material-ui/core/Paper'

// const styles = {
//   card: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 32,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// };

// class Generate extends React.Component {
//     constructor(props) {
//         super(props)
//         let { classes } = props;
//         let bull = <span className={classes.bullet}>•</span>;
//         this.state = {
//             choices: Choices,
//             chosenIdea: ''

//         }       
//     }

//     randomizer() {
//         return Math.floor((Math.random() * 17))
//     }
//     chooseIdea = () => {
//         const chosenIdea = this.state.choices[this.randomizer()]
//         this.setState({ chosenIdea })
//     }
//     render(){
//         return (
//             <Paper>
//                 <Button onClick={this.chooseIdea}>Generate Happy Activity</Button>
//                     <Card className={classes.card}>
//                         <CardContent>
//                             <Typography className={classes.title} color="textSecondary" gutterBottom>
//                                 Maybe your would like to...
//                             </Typography>
//                             <Typography variant="h5" component="h2">
//                                 {this.state.chosenIdea}
//                             </Typography>
//                         </CardContent>
//                     </Card>
//             </Paper>
//   );
// }}

// Generate.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Generate);