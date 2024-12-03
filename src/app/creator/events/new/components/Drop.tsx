

"use client";
import * as React from "react";
import { useState, MouseEvent } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { styled } from "@mui/material/styles";
import { Button,useTheme } from "@mui/material";
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';

interface SubCategory {
  name: string;
}

interface Category {
  name: string;
  subCategories: SubCategory[];
}

const StyledMenu = styled((props) => (
  <Menu
    open
    elevation={0}
    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    transformOrigin={{ vertical: "top", horizontal: "right" }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: '5px',

    minWidth: 180,
    background: "#151618",
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
        boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.22)}`,
    "&:hover": { backgroundColor: theme.palette.action.hover },
  },
})) as typeof Menu;

const categories: Category[] = [
  {
    name: "Festival",
    subCategories: [
      { name: "festival" },
      { name: "Food & Drink Festivals" },
      { name: "Pre-party" },
    ],
  },
  {
    name: "Nightlife",
    subCategories: [
      { name: "Party" },
      { name: "Birthday" },
      { name: "Concert" },
      { name: "Holiday Party" },
    ],
  },
  // Add other categories here...
];

const MultiLevelMenu: React.FC = () => {

  const theme = useTheme()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState<null | HTMLElement>(
    null
  );
  // const [selectedValue, setSelectedValue] = useState<string>("");
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [isNameSelect, setIsNameSelect] = useState<string>("");

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubMenuAnchorEl(null);
    setCurrentCategory(null);
  };

  const handleSubMenuOpen = (
    event: MouseEvent<HTMLElement>,
    category: Category
  ) => {
    setSubMenuAnchorEl(event.currentTarget);
    setCurrentCategory(category);
  };

  const handleSubMenuClose = (value: string) => {
    // setSelectedValue(value);
    setIsNameSelect(value);
    handleClose();
  };

  return (
    <Box>
      <Button
        variant="outlined"
        sx={{
          background: `${hexToRGBA(theme.palette.customColors.primaryDark1,0.2)}`,
          boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
          borderRadius:'5px',
          backdropFilter: "blur( 4px )",
          color: theme.palette.customColors.primaryWhite,
          margin: "3% 0%",
          width: "100%",
          textTransform: "capitalize",
          border: `1px solid ${theme.palette.customColors.primaryWhite}`,
        }}
        onClick={handleClick}
      >
        {isNameSelect ? isNameSelect : "Choose a Category (Optional)"}{" "}
        <KeyboardArrowRightIcon />
      </Button>
      <StyledMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {categories.map((category) => (
          <MenuItem
            sx={{ background: theme.palette.customColors.primaryDark1, color: theme.palette.customColors.primaryWhite }}
            key={category.name}
            onMouseEnter={(event) => handleSubMenuOpen(event, category)}
          >
            {category.name}
          </MenuItem>
        ))}
        <StyledMenu
          anchorEl={subMenuAnchorEl}
          open={Boolean(subMenuAnchorEl)}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          {currentCategory &&
            currentCategory.subCategories.map((subCategory) => (
              <MenuItem
                sx={{ background: theme.palette.customColors.primaryDark1, color: theme.palette.customColors.primaryWhite }}
                key={subCategory.name}
                onClick={() => handleSubMenuClose(subCategory.name)}
              >
                {subCategory.name}
              </MenuItem>
            ))}
        </StyledMenu>
      </StyledMenu>
    </Box>
  );
};

export default MultiLevelMenu;

