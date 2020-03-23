import React from "react";
import SelectAllIcon from "@material-ui/icons/SelectAll";
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

import "./NestedList.scss";

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
  <PrintIcon className="icon" />,
  <ExplicitIcon className="icon" />,
  <DeckIcon className="icon" />,
  <ArtTrackIcon className="icon" />,
  <BookIcon className="icon" />,
  <ComputerIcon className="icon" />,
  <ToysIcon className="icon" />,
  <VpnLockIcon className="icon" />,
  <CastForEducationIcon className="icon" />,
  <EmojiPeopleIcon className="icon" />,
  <FastfoodIcon className="icon" />,
  <CasinoIcon className="icon" />,
  <CardGiftcardIcon className="icon" />,
  <HealingIcon className="icon" />,
  <FlightTakeoffIcon className="icon" />,
  <WatchIcon className="icon" />,
  <PetsIcon className="icon" />,
  <RoomServiceIcon className="icon" />,
  <VideogameAssetIcon className="icon" />,
  <SportsIcon className="icon" />,
  <ViewStreamIcon className="icon" />,
  <BuildIcon className="icon" />
];

export default function NestedList() {
  return (
    <div className="drawer-list">
      <p className="drawer-title">Categories</p>

      <div className="list-item">
        <SelectAllIcon className="icon" />
        <p>All</p>
      </div>

      <div className="list-item">
        <AppsIcon className="icon" />
        <p>Apps</p>
      </div>

      <div className="list-item">
        <StorageIcon className="icon" />
        <p>Hosts</p>
      </div>

      <div className="list-item">
        <MoneyOffIcon className="icon" />
        <p>Non-profits</p>
      </div>

      <div className="list-item">
        <StorefrontIcon className="icon" />
        <p>Merchants</p>
      </div>

      {merchantSubcategories.map((name, index) => (
        <div className="nested-list-item">
          {merchantSubcategoryIcons[index]}
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
}
