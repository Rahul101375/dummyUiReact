import * as React from 'react';
import * as MaterialModule from '../../common/Material'
import  {Link}  from "react-router-dom";
const drawerWidth = 240;
const navItems = ['carts', 'comments', 'images' ,'posts', 'products', 'quotes' , 'recipes' ,'todo','login'];

function HeaderComponent(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <MaterialModule.Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <MaterialModule.Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </MaterialModule.Typography>
      <MaterialModule.Divider />
      <MaterialModule.List>
        {navItems.map((item) => (
          <MaterialModule.ListItem key={item} disablePadding>
            <MaterialModule.ListItemButton sx={{ textAlign: 'center' }}>
              <MaterialModule.ListItemText primary={item} >
                <Link to={item}>{ item }</Link>
              </MaterialModule.ListItemText>
            </MaterialModule.ListItemButton>
          </MaterialModule.ListItem>
        ))}
      </MaterialModule.List>
    </MaterialModule.Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <MaterialModule.Box sx={{ display: 'flex' }}>
      <MaterialModule.CssBaseline />
      <MaterialModule.AppBar component="nav">
        <MaterialModule.Toolbar>
          <MaterialModule.IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MaterialModule.MenuIcon />
          </MaterialModule.IconButton>
          <MaterialModule.Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {/* MUI */}
          </MaterialModule.Typography>
          <MaterialModule.Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <MaterialModule.Button key={item} sx={{ color: '#fff' }}>
                <Link to={item}><span style={{color:'#fff',border:'none'}}>{ item }</span></Link>
              </MaterialModule.Button>
            ))}
          </MaterialModule.Box>
        </MaterialModule.Toolbar>
      </MaterialModule.AppBar>
      <nav>
        <MaterialModule.Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </MaterialModule.Drawer>
      </nav>
      {/* <MaterialModule.Box component="main" sx={{ p: 3 }}>
        <MaterialModule.Toolbar />
        <MaterialModule.Typography>
          Testing 
        </MaterialModule.Typography>
      </MaterialModule.Box> */}
    </MaterialModule.Box>
  );
}

HeaderComponent.propTypes = {
  window: MaterialModule.PropTypes.func,
};

export default HeaderComponent;