import { AppBar, IconButton, Toolbar, Icon, Typography } from "@material-ui/core"

const Header = () => {
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            FIRE Calculator
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}


export default Header