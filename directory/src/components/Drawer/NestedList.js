import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import SelectAllIcon from '@material-ui/icons/SelectAll';
import AppsIcon from "@material-ui/icons/Apps";
import StorageIcon from "@material-ui/icons/Storage";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
import StorefrontIcon from "@material-ui/icons/Storefront";
import PrintIcon from "@material-ui/icons/Print";
import ExplicitIcon from "@material-ui/icons/Explicit";
import DeckIcon from "@material-ui/icons/Deck";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import BookIcon from "@material-ui/icons/Book";
import ComputerIcon from "@material-ui/icons/Computer";
import ToysIcon from "@material-ui/icons/Toys";
import VpnLockIcon from "@material-ui/icons/VpnLock";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import CasinoIcon from "@material-ui/icons/Casino";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import HealingIcon from "@material-ui/icons/Healing";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import WatchIcon from "@material-ui/icons/Watch";
import PetsIcon from "@material-ui/icons/Pets";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import SportsIcon from "@material-ui/icons/Sports";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import BuildIcon from "@material-ui/icons/Build";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const merchantSubcategories = [
  "3D Printing",
  "Adult",
  "Appliances & Furniture",
  "Art",
  "Books",
  "Computers & Electronics",
  "Cryptocurrency Paraphernalia",
  "Domain Names, Hosting and VPNs",
  "Education",
  "Fashion",
  "Food & Drink",
  "Gambling",
  "Gift Cards",
  "Health & Household",
  "Holiday & Travel",
  "Jewelry",
  "Pets",
  "Services",
  "Software & Video Games",
  "Sports",
  "Streaming",
  "Tools"
];

const merchantSubcategoryIcons = [
  <PrintIcon />,
  <ExplicitIcon />,
  <DeckIcon />,
  <ArtTrackIcon />,
  <BookIcon />,
  <ComputerIcon />,
  <ToysIcon />,
  <VpnLockIcon />,
  <CastForEducationIcon />,
  <EmojiPeopleIcon />,
  <FastfoodIcon />,
  <CasinoIcon />,
  <CardGiftcardIcon />,
  <HealingIcon />,
  <FlightTakeoffIcon />,
  <WatchIcon />,
  <PetsIcon />,
  <RoomServiceIcon />,
  <VideogameAssetIcon />,
  <SportsIcon />,
  <ViewStreamIcon />,
  <BuildIcon />
];

export default function NestedList() {
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Categories
        </ListSubheader>
      }
      className={classes.root}
    >

      <ListItem button>
        <ListItemIcon>
          <SelectAllIcon />
        </ListItemIcon>
        <ListItemText primary="All" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText primary="Apps" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <StorageIcon />
        </ListItemIcon>
        <ListItemText primary="Hosts" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <MoneyOffIcon />
        </ListItemIcon>
        <ListItemText primary="Non-profits" />
      </ListItem>

      <ListItem button className={classes.root}>
        <ListItemIcon>
          <StorefrontIcon />
        </ListItemIcon>
        <ListItemText primary="Merchants" />
      </ListItem>

      {merchantSubcategories.map((name, index) => (
        <ListItem button className={classes.nested}>
          <ListItemIcon>{merchantSubcategoryIcons[index]}</ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  );
}
