var material_ui_1 = require('material-ui');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    spacing: material_ui_1.Styles.Spacing,
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
        primary1Color: material_ui_1.Styles.Colors.red500,
        primary2Color: material_ui_1.Styles.Colors.red700,
        primary3Color: material_ui_1.Styles.Colors.lightBlack,
        accent1Color: material_ui_1.Styles.Colors.pinkA200,
        accent2Color: material_ui_1.Styles.Colors.grey100,
        accent3Color: material_ui_1.Styles.Colors.grey500,
        textColor: material_ui_1.Styles.Colors.darkBlack,
        alternateTextColor: material_ui_1.Styles.Colors.white,
        canvasColor: material_ui_1.Styles.Colors.white,
        borderColor: material_ui_1.Styles.Colors.grey300,
        disabledColor: material_ui_1.Utils.ColorManipulator.fade(material_ui_1.Styles.Colors.darkBlack, 0.3),
        pickerHeaderColor: material_ui_1.Styles.Colors.red500,
    }
};
