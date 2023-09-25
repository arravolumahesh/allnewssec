import {ThemeOptions} from "@mui/material";
import {CssBaselineTheme} from "./cssBaseline.theme";
import {ButtonVariants} from "./button.theme";
import {TypographyVariants} from "./typography.theme";
import {LinkVariants} from "./link.theme";
import {BreadcrumbsVariants} from "./breadcrumbs.theme";
import {AppBarVariants} from "./appBar.theme";
import {AvatarGroupVariants} from "./avatarGroup.theme";
import {AvatarVariants} from "./avatar.theme";
import {CardVariants} from "./card.theme";
import {CardHeaderVariants} from "./cardHeader.theme";
import {TabVariants} from "./tab.theme";
import {TabsVariants} from "./tabs.theme";
import {TextFieldVariants} from "./textField.theme";
import {ToggleButtonGroupVariants} from "./toggleButtonGroup.theme";
import {ToggleButtonVariants} from "./toggleButton.theme";
import {SelectVariants} from "./select.theme";
import {BackdropVariants} from "./backdropVariants";
import {DialogVariants} from "./dialogVariants";
import {IconButtonVariants} from "./iconButton.theme";

/**
 * @ThemeOptions['commonComponents']
 * Here we can define the commonComponents theme
 *
 * @see https://material-ui.com/customization/components/#components
 */
export const ComponentTheme: ThemeOptions["components"] = {
    MuiCssBaseline: CssBaselineTheme,
    MuiButton: ButtonVariants,
    MuiTypography: TypographyVariants,
    MuiLink: LinkVariants,
    MuiBreadcrumbs: BreadcrumbsVariants,
    MuiAppBar: AppBarVariants,
    MuiAvatarGroup: AvatarGroupVariants,
    MuiAvatar: AvatarVariants,
    MuiCard: CardVariants,
    MuiCardHeader: CardHeaderVariants,
    MuiTab: TabVariants,
    MuiTabs: TabsVariants,
    MuiTextField: TextFieldVariants,
    MuiToggleButtonGroup: ToggleButtonGroupVariants,
    MuiToggleButton: ToggleButtonVariants,
    MuiSelect: SelectVariants,
    MuiBackdrop: BackdropVariants,
    MuiDialog: DialogVariants,
    MuiIconButton: IconButtonVariants,
};
