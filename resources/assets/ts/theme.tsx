/// <reference path="./typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts"/>
import { Styles, Utils } from 'material-ui';

export default {
  spacing: Styles.Spacing,
    zIndex: {
    menu: 1000,
    appBar: 1100,
    leftNavOverlay: 1200,
    leftNav: 1300,
    dialogOverlay: 1400,
    dialog: 1500,
    layer: 2000,
    popover: 2100,
    snackbar: 2900,
    tooltip: 3000,
  },
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Styles.Colors.red500,
    primary2Color: Styles.Colors.red700,
    primary3Color: Styles.Colors.lightBlack,
    accent1Color: Styles.Colors.pinkA200,
    accent2Color: Styles.Colors.grey100,
    accent3Color: Styles.Colors.grey500,
    textColor: Styles.Colors.darkBlack,
    alternateTextColor: Styles.Colors.white,
    canvasColor: Styles.Colors.white,
    borderColor: Styles.Colors.grey300,
    disabledColor: Utils.ColorManipulator.fade(Styles.Colors.darkBlack, 0.3),
    pickerHeaderColor: Styles.Colors.red500,
  }
};
