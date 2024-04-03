import { Button, Menu, MenuItem } from '@mui/material';
import { IThemeContext, IThemeMode, ThemeContext } from '../../theme';
import React, { useContext, useRef, useState } from 'react';

import PaletteIcon from '@mui/icons-material/Palette';

export const ThemeSwitcher: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const { themeMode, switchThemeMode } = useContext(ThemeContext) as IThemeContext;

  const handleOpen = () => {
    setOpenMenu(true);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  const handleSwitchTheme = (mode: IThemeMode) => {
    switchThemeMode(mode);
    setOpenMenu(false);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        startIcon={<PaletteIcon />}
        ref={buttonRef}
      >
        Theme Mode
      </Button>
      <Menu open={openMenu} anchorEl={buttonRef.current} onClose={handleClose}>
        <MenuItem onClick={() => handleSwitchTheme(IThemeMode.LIGHT)} selected={themeMode === IThemeMode.LIGHT}>
          Light
        </MenuItem>
        <MenuItem onClick={() => handleSwitchTheme(IThemeMode.DARK)} selected={themeMode === IThemeMode.DARK}>
          Dark
        </MenuItem>
        <MenuItem onClick={() => handleSwitchTheme(IThemeMode.SYSTEM)} selected={themeMode === IThemeMode.SYSTEM}>
          System
        </MenuItem>
      </Menu>
    </>
  );
};
