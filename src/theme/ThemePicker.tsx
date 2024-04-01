import { Box, Menu, MenuItem, Typography } from '@mui/material';
import { FiMoon, FiSettings, FiSun } from 'react-icons/fi';
import React, { useEffect, useState } from 'react';

type ThemeOption = 'light' | 'dark' | 'system';

const applyTheme = (theme: ThemeOption) => {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (theme === 'system') {
    document.documentElement.classList.toggle('dark', isDarkMode);
  } else {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }
};

export const ThemePicker: React.FC = () => {
  const [theme, setTheme] = useState<ThemeOption>('system');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeOption | null;
    const initialTheme = savedTheme ? savedTheme : 'system';
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const handleMenuItemClick = (newTheme: ThemeOption) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    setAnchorEl(null);
  };

  const openMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const getIcon = (theme: ThemeOption) => {
    switch (theme) {
      case 'light':
        return <FiSun />;
      case 'dark':
        return <FiMoon />;
      case 'system':
      default:
        return <FiSettings />;
    }
  };

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        onClick={openMenu}
        aria-controls="theme-menu"
        aria-haspopup="true"
        sx={{cursor: 'pointer'}}
      >
        <Box>{getIcon(theme)}</Box>
        <Typography sx={{paddingLeft:0.5}}>Theme</Typography>
      </Box>
      <Menu
        id="theme-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {['light', 'dark', 'system'].map((option) => (
          <MenuItem
            key={option}
            onClick={() => handleMenuItemClick(option as ThemeOption)}
          >
            {getIcon(option as ThemeOption)}
            <span className="ml-2">{option}</span>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default ThemePicker;
