import Introduction from './pages/docs/Introduction';
import Download from './pages/docs/Download';
import Contents from './pages/docs/Contents';
import BrowsersDevices from './pages/docs/BrowsersDevices';
import JavaScript from './pages/docs/JavaScript'; // Capitalized J and S
import WebpackPage from './pages/docs/WebpackPage';
import ParcelPage from './pages/docs/ParcelPage';
import VitePage from './pages/docs/VitePage';
import AccessibilityDocs from './pages/docs/AccessibilityDocs';
import RfsPage from './pages/docs/RfsPage';
import RtlPage from './pages/docs/RtlPage';
import ContributePage from './pages/docs/ContributePage';
import Overview from './pages/docs/Overview';
import CustomizeOverviewPage from './pages/docs/CustomizeOverviewPage';
import SassPage from './pages/docs/SassPage';
import OptionsPage from './pages/docs/OptionsPage';
import ColorPage from './pages/docs/ColorPage';
import ColorModesPage from './pages/docs/ColorModesPage';
import OptimizePage from './pages/docs/OptimizePage';
import CssVariablesPage from './pages/docs/CssVariablesPage';
import BreakpointsPage from './pages/docs/BreakpointsPage';
import ContainersPage from './pages/docs/ContainersPage';
import GridPage from './pages/docs/GridPage';
import ColumnsPage from './pages/docs/ColumnsPage';
import GuttersPage from './pages/docs/GuttersPage';
import UtilitiesLayoutPage from './pages/docs/UtilitiesLayoutPage';
import ZIndexPage from './pages/docs/ZIndexPage';
import CssGridPage from './pages/docs/CssGridPage';
import RebootPage from './pages/docs/RebootPage';
import TypographyPage from './pages/docs/TypographyPage';
import ImagesPage from './pages/docs/ImagesPage';
import TablesPage from './pages/docs/TablesPage';
import FiguresPage from './pages/docs/FiguresPage';
import FormsOverview from './pages/docs/FormsOverview';
import FormControlPage from './pages/docs/FormControlPage';
import SelectPage from './pages/docs/SelectPage';
import ChecksRadiosPage from './pages/docs/ChecksRadiosPage';
import RangePage from './pages/docs/RangePage';
import InputGroupPage from './pages/docs/InputGroupPage';
import FloatingLabelsPage from './pages/docs/FloatingLabelsPage';
import FormLayoutPage from './pages/docs/FormLayoutPage';
import ValidationPage from './pages/docs/ValidationPage';
import ComponentsIndex from './pages/docs/ComponentsIndex'; // Renamed matching file
import AccordionPage from './pages/docs/AccordionPage';
import AlertsPage from './pages/docs/AlertsPage';
import BadgePage from './pages/docs/BadgePage';
import BreadcrumbPage from './pages/docs/BreadcrumbPage';
import ButtonsPage from './pages/docs/ButtonsPage';
import ButtonGroupPage from './pages/docs/ButtonGroupPage';
import CardPage from './pages/docs/CardPage';
import CarouselPage from './pages/docs/CarouselPage';
import CloseButtonPage from './pages/docs/CloseButtonPage';
import CollapsePage from './pages/docs/CollapsePage';
import DropdownsPage from './pages/docs/DropdownsPage';
import ListGroupPage from './pages/docs/ListGroupPage';
import ModalPage from './pages/docs/ModalPage';
import NavbarPage from './pages/docs/NavbarPage';
import NavsTabsPage from './pages/docs/NavsTabsPage';
import OffcanvasPage from './pages/docs/OffcanvasPage';
import PaginationPage from './pages/docs/PaginationPage';
import PlaceholdersPage from './pages/docs/PlaceholdersPage';
import PopoversPage from './pages/docs/PopoversPage';
import ProgressPage from './pages/docs/ProgressPage';
import ScrollspyPage from './pages/docs/ScrollspyPage';
import SpinnersPage from './pages/docs/SpinnersPage';
import ToastsPage from './pages/docs/ToastsPage';
import TooltipsPage from './pages/docs/TooltipsPage';
import HelpersPage from './pages/docs/HelpersPage'; // Renamed matching file
import ClearfixPage from './pages/docs/ClearfixPage';
import ColorBackgroundPage from './pages/docs/ColorBackgroundHelpersPage'; // Check filename step 1305: ColorBackgroundHelpersPage.jsx
import ColoredLinksPage from './pages/docs/ColoredLinksPage';
import FocusRingPage from './pages/docs/FocusRingPage';
import IconLinkPage from './pages/docs/IconLinkPage';
import PositionPage from './pages/docs/PositionPage';
import RatioPage from './pages/docs/RatioPage';
import StacksPage from './pages/docs/StacksPage';
import StretchedLinkPage from './pages/docs/StretchedLinkPage';
import TextTruncationPage from './pages/docs/TextTruncationPage';
import VerticalRulePage from './pages/docs/VerticalRulePage';
import VisuallyHiddenPage from './pages/docs/VisuallyHiddenPage';
import UtilitiesOverviewPage from './pages/docs/UtilitiesOverviewPage';
import UtilitiesApiPage from './pages/docs/UtilitiesApiPage';
import BackgroundPage from './pages/docs/BackgroundPage';
import BordersPage from './pages/docs/BordersPage';
import ColorsPage from './pages/docs/ColorsPage';
import DisplayPage from './pages/docs/DisplayPage';
import FlexPage from './pages/docs/FlexPage';
import FloatPage from './pages/docs/FloatPage';
import InteractionsPage from './pages/docs/InteractionsPage';
import LinkPage from './pages/docs/LinkPage';
import ObjectFitPage from './pages/docs/ObjectFitPage';
import OpacityPage from './pages/docs/OpacityPage';
import OverflowPage from './pages/docs/OverflowPage';
import ShadowsPage from './pages/docs/ShadowsPage';
import SizingPage from './pages/docs/SizingPage';
import SpacingPage from './pages/docs/SpacingPage';
import TextPage from './pages/docs/TextPage';
import VerticalAlignPage from './pages/docs/VerticalAlignPage';
import VisibilityPage from './pages/docs/VisibilityPage';
import AboutOverviewPage from './pages/docs/AboutOverviewPage';
import AboutTeamPage from './pages/docs/AboutTeamPage';
import AboutBrandPage from './pages/docs/AboutBrandPage';
import AboutLicensePage from './pages/docs/AboutLicensePage';
import AboutTranslationsPage from './pages/docs/AboutTranslationsPage';
import AboutMigrationPage from './pages/docs/AboutMigrationPage';
import HomePage from './pages/HomePage';
import ExamplesPage from './pages/examples/ExamplesPage';
import TemplatesPage from './pages/templates/TemplatesPage';
import BlogPage from './pages/blog/BlogPage';
import BlogPostPage from './pages/blog/BlogPostPage';

const routes = [
    // Landing Page
    { path: '/', component: HomePage },

    // Examples Landing
    { path: '/examples', component: ExamplesPage },
    // Templates Landing
    { path: '/templates', component: TemplatesPage },
    // Blog
    { path: '/blog', component: BlogPage },
    { path: '/blog/:id', component: BlogPostPage },

    // Getting Started
    { path: '/getting-started/overview', component: Overview },
    { path: '/getting-started/introduction', component: Introduction },
    { path: '/getting-started/download', component: Download },
    { path: '/getting-started/contents', component: Contents },
    { path: '/getting-started/browsers-devices', component: BrowsersDevices },
    { path: '/getting-started/javascript', component: JavaScript },
    { path: '/getting-started/webpack', component: WebpackPage },
    { path: '/getting-started/parcel', component: ParcelPage },
    { path: '/getting-started/vite', component: VitePage },
    { path: '/getting-started/accessibility', component: AccessibilityDocs },
    { path: '/getting-started/rfs', component: RfsPage },
    { path: '/getting-started/rtl', component: RtlPage },
    { path: '/getting-started/contribute', component: ContributePage },

    // Customize
    { path: '/customize/overview', component: CustomizeOverviewPage },
    { path: '/customize/sass', component: SassPage },
    { path: '/customize/options', component: OptionsPage },
    { path: '/customize/color', component: ColorPage },
    { path: '/customize/color-modes', component: ColorModesPage },
    { path: '/customize/optimize', component: OptimizePage },
    { path: '/customize/css-variables', component: CssVariablesPage },

    // Layout
    { path: '/layout/breakpoints', component: BreakpointsPage },
    { path: '/layout/containers', component: ContainersPage },
    { path: '/layout/grid', component: GridPage },
    { path: '/layout/columns', component: ColumnsPage },
    { path: '/layout/gutters', component: GuttersPage },
    { path: '/layout/utilities', component: UtilitiesLayoutPage },
    { path: '/layout/z-index', component: ZIndexPage },
    { path: '/layout/css-grid', component: CssGridPage },

    // Content
    { path: '/content/reboot', component: RebootPage },
    { path: '/content/typography', component: TypographyPage },
    { path: '/content/images', component: ImagesPage },
    { path: '/content/tables', component: TablesPage },
    { path: '/content/figures', component: FiguresPage },

    // Forms
    { path: '/forms/overview', component: FormsOverview },
    { path: '/forms/form-control', component: FormControlPage },
    { path: '/forms/select', component: SelectPage },
    { path: '/forms/checks-radios', component: ChecksRadiosPage },
    { path: '/forms/range', component: RangePage },
    { path: '/forms/input-group', component: InputGroupPage },
    { path: '/forms/floating-labels', component: FloatingLabelsPage },
    { path: '/forms/layout', component: FormLayoutPage },
    { path: '/forms/validation', component: ValidationPage },

    // Components
    { path: '/components/overview', component: ComponentsIndex },
    { path: '/components/accordion', component: AccordionPage },
    { path: '/components/alerts', component: AlertsPage },
    { path: '/components/badge', component: BadgePage },
    { path: '/components/breadcrumb', component: BreadcrumbPage },
    { path: '/components/buttons', component: ButtonsPage },
    { path: '/components/button-group', component: ButtonGroupPage },
    { path: '/components/card', component: CardPage },
    { path: '/components/carousel', component: CarouselPage },
    { path: '/components/close-button', component: CloseButtonPage },
    { path: '/components/collapse', component: CollapsePage },
    { path: '/components/dropdowns', component: DropdownsPage },
    { path: '/components/list-group', component: ListGroupPage },
    { path: '/components/modal', component: ModalPage },
    { path: '/components/navbar', component: NavbarPage },
    { path: '/components/navs-tabs', component: NavsTabsPage },
    { path: '/components/offcanvas', component: OffcanvasPage },
    { path: '/components/pagination', component: PaginationPage },
    { path: '/components/placeholders', component: PlaceholdersPage },
    { path: '/components/popovers', component: PopoversPage },
    { path: '/components/progress', component: ProgressPage },
    { path: '/components/scrollspy', component: ScrollspyPage },
    { path: '/components/spinners', component: SpinnersPage },
    { path: '/components/toasts', component: ToastsPage },
    { path: '/components/tooltips', component: TooltipsPage },

    // Helpers
    { path: '/helpers/overview', component: HelpersPage },
    { path: '/helpers/clearfix', component: ClearfixPage },
    { path: '/helpers/color-background', component: ColorBackgroundPage },
    { path: '/helpers/colored-links', component: ColoredLinksPage },
    { path: '/helpers/focus-ring', component: FocusRingPage },
    { path: '/helpers/icon-link', component: IconLinkPage },
    { path: '/helpers/position', component: PositionPage },
    { path: '/helpers/ratio', component: RatioPage },
    { path: '/helpers/stacks', component: StacksPage },
    { path: '/helpers/stretched-link', component: StretchedLinkPage },
    { path: '/helpers/text-truncation', component: TextTruncationPage },
    { path: '/helpers/vertical-rule', component: VerticalRulePage },
    { path: '/helpers/visually-hidden', component: VisuallyHiddenPage },

    // Utilities
    { path: '/utilities/overview', component: UtilitiesOverviewPage },
    { path: '/utilities/api', component: UtilitiesApiPage },
    { path: '/utilities/background', component: BackgroundPage },
    { path: '/utilities/borders', component: BordersPage },
    { path: '/utilities/colors', component: ColorsPage },
    { path: '/utilities/display', component: DisplayPage },
    { path: '/utilities/flex', component: FlexPage },
    { path: '/utilities/float', component: FloatPage },
    { path: '/utilities/interactions', component: InteractionsPage },
    { path: '/utilities/link', component: LinkPage },
    { path: '/utilities/object-fit', component: ObjectFitPage },
    { path: '/utilities/opacity', component: OpacityPage },
    { path: '/utilities/overflow', component: OverflowPage },
    { path: '/utilities/shadows', component: ShadowsPage },
    { path: '/utilities/sizing', component: SizingPage },
    { path: '/utilities/spacing', component: SpacingPage },
    { path: '/utilities/text', component: TextPage },
    { path: '/utilities/vertical-align', component: VerticalAlignPage },
    { path: '/utilities/visibility', component: VisibilityPage },

    // About
    { path: '/about/overview', component: AboutOverviewPage },
    { path: '/about/team', component: AboutTeamPage },
    { path: '/about/brand', component: AboutBrandPage },
    { path: '/about/license', component: AboutLicensePage },
    { path: '/about/translations', component: AboutTranslationsPage },
    { path: '/about/migration', component: AboutMigrationPage },

    // Default / Fallback
    // { path: '/', component: ExamplesPage }, 
];

export default routes;
