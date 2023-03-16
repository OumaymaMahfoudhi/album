/** @format */

import "./App.css";
import Home from "./components/Home";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

import useStyles from "./styles"
const cards = [1,2,3,4,5,6,7,8,9]

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant='h6'>photoAlbum</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm' style={{ marginTop: "100px" }}>
            <Typography
              variant='h2'
              align='center'
              color='testPrimary'
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              hello every one this ids a photo album and i'm tryning to make
              this sentence as long as possible we can see does it lokk like on
              the screen
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card) =>(
              <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image='https://images.pexels.com/photos/3582219/pexels-photo-3582219.jpeg?cs=srgb&dl=pexels-eric-dekker-3582219.jpg&fm=jpg'
                  title='take photo'
                />
                <CardContent className={classes.CardContent}>
                  <Typography gutterBottom variant='h5'> Heading </Typography>
                  <Typography>
                     this is a media card. you can use this section to describe the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View</Button>
                  <Button size="small" color="primary">Edit</Button>

                </CardActions>
              </Card>
            </Grid>
            ))}
            
            
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                   Footer 
            </Typography>
            <Typography variant="subtitle1" align="center" color="testSecondary">
                     somthing important ! our art 
            </Typography>
      </footer>
    </>
  );
}

export default App;
