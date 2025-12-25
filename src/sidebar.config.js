/**
 * Sidebar Configuration
 * Defines the structure of the Developer Control Panel and Documentation.
 * This is "Config-Driven UI" with explicit Routing Paths.
 */
export const sidebarConfig = [
  // =========================================================================
  // 🟦 CONTEXT: DOCS
  // =========================================================================

  // 1. GETTING STARTED
  {
    navSection: "Docs",
    section: "Getting Started",
    items: [
      { label: "Overview", id: "getting-started-overview", path: "/getting-started/overview" },
      { label: "Introduction", id: "getting-started-introduction", path: "/getting-started/introduction" },
      { label: "Download", id: "getting-started-download", path: "/getting-started/download" },
      { label: "Contents", id: "getting-started-contents", path: "/getting-started/contents" },
      { label: "Browsers & Devices", id: "getting-started-browsers-devices", path: "/getting-started/browsers-devices" },
      { label: "JavaScript", id: "getting-started-javascript", path: "/getting-started/javascript" },
      { label: "Webpack", id: "getting-started-webpack", path: "/getting-started/webpack" },
      { label: "Parcel", id: "getting-started-parcel", path: "/getting-started/parcel" },
      { label: "Vite", id: "getting-started-vite", path: "/getting-started/vite" },
      { label: "Accessibility", id: "getting-started-accessibility", path: "/getting-started/accessibility" },
      { label: "RFS", id: "getting-started-rfs", icon: "Type", path: "/getting-started/rfs" },
      { label: "RTL", id: "getting-started-rtl", icon: "Type", path: "/getting-started/rtl" },
      { label: "Contribute", id: "getting-started-contribute", icon: "FileCode", path: "/getting-started/contribute" },
      { label: "Examples", id: "getting-started-examples", icon: "Layout", path: "/examples", badge: "New" },
      { label: "Templates", id: "getting-started-templates", icon: "Layers", path: "/templates", badge: "Hot" }
    ]
  },

  // 2. CUSTOMIZE
  {
    navSection: "Docs",
    section: "Customize",
    items: [
      { label: "Overview", id: "customize-overview", path: "/customize/overview" },
      { label: "Sass", id: "customize-sass", path: "/customize/sass" },
      { label: "Options", id: "customize-options", path: "/customize/options" },
      { label: "Color", id: "customize-color", path: "/customize/color" },
      { label: "Color Modes", id: "customize-color-modes", path: "/customize/color-modes" },
      { label: "Components", id: "customize-components", path: "/customize/components" }, // Placeholder for now
      { label: "CSS Variables", id: "customize-css-variables", path: "/customize/css-variables" },
      { label: "Optimize", id: "customize-optimize", path: "/customize/optimize" }
    ]
  },

  // 3. LAYOUT
  {
    navSection: "Docs",
    section: "Layout",
    items: [
      { label: "Breakpoints", id: "layout-breakpoints", path: "/layout/breakpoints" },
      { label: "Containers", id: "layout-containers", path: "/layout/containers" },
      { label: "Grid", id: "layout-grid", path: "/layout/grid" },
      { label: "Columns", id: "layout-columns", path: "/layout/columns" },
      { label: "Gutters", id: "layout-gutters", path: "/layout/gutters" },
      { label: "Utilities", id: "layout-utilities", path: "/layout/utilities" },
      { label: "Z-index", id: "layout-z-index", path: "/layout/z-index" },
      { label: "CSS Grid", id: "layout-css-grid", path: "/layout/css-grid" }
    ]
  },

  // 4. CONTENT
  {
    navSection: "Docs",
    section: "Content",
    items: [
      { label: "Reboot", id: "content-reboot", path: "/content/reboot" },
      { label: "Typography", id: "content-typography", path: "/content/typography" },
      { label: "Images", id: "content-images", path: "/content/images" },
      { label: "Tables", id: "content-tables", path: "/content/tables" },
      { label: "Figures", id: "content-figures", path: "/content/figures" }
    ]
  },

  // 5. FORMS
  {
    navSection: "Docs",
    section: "Forms",
    items: [
      { label: "Overview", id: "forms-overview", path: "/forms/overview" },
      { label: "Form Control", id: "forms-form-control", path: "/forms/form-control" },
      { label: "Select", id: "forms-select", path: "/forms/select" },
      { label: "Checks & Radios", id: "forms-checks-radios", path: "/forms/checks-radios" },
      { label: "Range", id: "forms-range", path: "/forms/range" },
      { label: "Input Group", id: "forms-input-group", path: "/forms/input-group" },
      { label: "Floating Labels", id: "forms-floating-labels", path: "/forms/floating-labels" },
      { label: "Layout", id: "forms-layout", path: "/forms/layout" },
      { label: "Validation", id: "forms-validation", path: "/forms/validation" }
    ]
  },

  // 6. COMPONENTS (The Heart ❤️)
  {
    navSection: "Docs",
    section: "Components",
    items: [
      { label: "Accordion", id: "components-accordion", path: "/components/accordion" },
      { label: "Alerts", id: "components-alerts", path: "/components/alerts" },
      { label: "Badge", id: "components-badge", path: "/components/badge" },
      { label: "Breadcrumb", id: "components-breadcrumb", path: "/components/breadcrumb" },
      { label: "Buttons", id: "components-buttons", path: "/components/buttons" },
      { label: "Button Group", id: "components-button-group", path: "/components/button-group" },
      { label: "Card", id: "components-card", path: "/components/card" },
      { label: "Carousel", id: "components-carousel", path: "/components/carousel" },
      { label: "Close Button", id: "components-close-button", path: "/components/close-button" },
      { label: "Collapse", id: "components-collapse", path: "/components/collapse" },
      { label: "Dropdowns", id: "components-dropdowns", path: "/components/dropdowns" },
      { label: "List Group", id: "components-list-group", path: "/components/list-group" },
      { label: "Modal", id: "components-modal", path: "/components/modal" },
      { label: "Navbar", id: "components-navbar", path: "/components/navbar" },
      { label: "Navs & Tabs", id: "components-navs-tabs", path: "/components/navs-tabs" },
      { label: "Offcanvas", id: "components-offcanvas", path: "/components/offcanvas" },
      { label: "Pagination", id: "components-pagination", path: "/components/pagination" },
      { label: "Placeholders", id: "components-placeholders", path: "/components/placeholders" },
      { label: "Popovers", id: "components-popovers", path: "/components/popovers" },
      { label: "Progress", id: "components-progress", path: "/components/progress" },
      { label: "Scrollspy", id: "components-scrollspy", path: "/components/scrollspy" },
      { label: "Spinners", id: "components-spinners", path: "/components/spinners" },
      { label: "Toasts", id: "components-toasts", path: "/components/toasts" },
      { label: "Tooltips", id: "components-tooltips", path: "/components/tooltips" }
    ]
  },

  // 7. HELPERS
  {
    navSection: "Docs",
    section: "Helpers",
    items: [
      { label: "Clearfix", id: "helpers-clearfix", path: "/helpers/clearfix" },
      { label: "Color & Background", id: "helpers-colored-background", path: "/helpers/color-background" },
      { label: "Colored Links", id: "helpers-colored-links", path: "/helpers/colored-links" },
      { label: "Focus Ring", id: "helpers-focus-ring", path: "/helpers/focus-ring" },
      { label: "Icon Link", id: "helpers-icon-link", path: "/helpers/icon-link" },
      { label: "Position", id: "helpers-position", path: "/helpers/position" },
      { label: "Ratio", id: "helpers-ratio", path: "/helpers/ratio" },
      { label: "Stacks", id: "helpers-stacks", path: "/helpers/stacks" },
      { label: "Stretched Link", id: "helpers-stretched-link", path: "/helpers/stretched-link" },
      { label: "Text Truncation", id: "helpers-text-truncation", path: "/helpers/text-truncation" },
      { label: "Vertical Rule", id: "helpers-vertical-rule", path: "/helpers/vertical-rule" },
      { label: "Visually Hidden", id: "helpers-visually-hidden", path: "/helpers/visually-hidden" }
    ]
  },

  // 8. UTILITIES
  {
    navSection: "Docs",
    section: "Utilities",
    items: [
      { label: "Overview", id: "utilities-overview", path: "/utilities/overview" },
      { label: "API", id: "utilities-api", path: "/utilities/api" },
      { label: "Background", id: "utilities-background", path: "/utilities/background" },
      { label: "Borders", id: "utilities-borders", path: "/utilities/borders" },
      { label: "Colors", id: "utilities-colors", path: "/utilities/colors" },
      { label: "Display", id: "utilities-display", path: "/utilities/display" },
      { label: "Flex", id: "utilities-flex", path: "/utilities/flex" },
      { label: "Float", id: "utilities-float", path: "/utilities/float" },
      { label: "Interactions", id: "utilities-interactions", path: "/utilities/interactions" },
      { label: "Link", id: "utilities-link", path: "/utilities/link" },
      { label: "Object Fit", id: "utilities-object-fit", path: "/utilities/object-fit" },
      { label: "Opacity", id: "utilities-opacity", path: "/utilities/opacity" },
      { label: "Overflow", id: "utilities-overflow", path: "/utilities/overflow" },
      { label: "Position", id: "utilities-position", path: "/utilities/position" },
      { label: "Shadows", id: "utilities-shadows", path: "/utilities/shadows" },
      { label: "Sizing", id: "utilities-sizing", path: "/utilities/sizing" },
      { label: "Spacing", id: "utilities-spacing", path: "/utilities/spacing" },
      { label: "Text", id: "utilities-text", path: "/utilities/text" },
      { label: "Vertical Align", id: "utilities-vertical-align", path: "/utilities/vertical-align" },
      { label: "Visibility", id: "utilities-visibility", path: "/utilities/visibility" },
      { label: "Z-index", id: "utilities-z-index", path: "/utilities/z-index" }
    ]
  },

  // 9. EXTEND
  {
    navSection: "Docs",
    section: "Extend",
    items: [
      { label: "Extend Overview", id: "extend-overview", path: "/extend/overview" },
      { label: "Approach", id: "extend-approach", path: "/extend/approach" },
      { label: "Icons", id: "extend-icons", path: "/extend/icons" },
      { label: "Plugins", id: "extend-plugins", path: "/extend/plugins" },
      { label: "Custom Components", id: "extend-custom-components", path: "/extend/custom-components" },
      { label: "Design Tokens", id: "extend-design-tokens", path: "/extend/design-tokens" },
      { label: "Integration Patterns", id: "extend-integration-patterns", path: "/extend/integration-patterns" },
      { label: "Best Practices", id: "extend-best-practices", path: "/extend/best-practices" }
    ]
  },

  // 10. ABOUT
  {
    navSection: "Docs",
    section: "About",
    items: [
      { label: "Overview", id: "about-overview", path: "/about/overview" },
      { label: "Team", id: "about-team", path: "/about/team" },
      { label: "Brand", id: "about-brand", path: "/about/brand" },
      { label: "License", id: "about-license", path: "/about/license" },
      { label: "Translations", id: "about-translations", path: "/about/translations" },
      { label: "Migration", id: "about-migration", path: "/about/migration" }
    ]
  },


  // =========================================================================
  // 🟩 CONTEXT: UI LIBRARY
  // =========================================================================
  {
    navSection: "UI Library",
    section: "Foundation",
    items: [
      { label: "Colors", icon: "Palette", id: "ui-colors", path: "/ui/colors" },
      { label: "Typography", icon: "Type", id: "ui-typography", path: "/ui/typography" },
      { label: "Icons", icon: "Grid", id: "ui-icons", path: "/ui/icons" },
      { label: "Layout Grid", icon: "Layout", id: "ui-layout-grid", path: "/ui/layout-grid" }
    ]
  },
  {
    navSection: "UI Library",
    section: "Components",
    items: [
      {
        label: "Inputs",
        // Flattening children logic or keeping it?
        // User requested deep linking. If children are just strings, they need paths.
        // I will convert string children to objects with paths to be consistent.
        children: [
          { label: "Button", path: "/ui/inputs/button" },
          { label: "Text Input", path: "/ui/inputs/text-input" },
          { label: "Select", path: "/ui/inputs/select" },
          { label: "Checkbox", path: "/ui/inputs/checkbox" },
          { label: "Switch", path: "/ui/inputs/switch" }
        ]
      },
      {
        label: "Data Display",
        children: [
          { label: "Card", path: "/ui/data-display/card" },
          { label: "Table", path: "/ui/data-display/table" },
          { label: "Badge", path: "/ui/data-display/badge" },
          { label: "Avatar", path: "/ui/data-display/avatar" },
          { label: "List", path: "/ui/data-display/list" }
        ]
      },
      {
        label: "Feedback",
        children: [
          { label: "Modal", path: "/ui/feedback/modal" },
          { label: "Toast", path: "/ui/feedback/toast" },
          { label: "Alert", path: "/ui/feedback/alert" },
          { label: "Progress", path: "/ui/feedback/progress" }
        ]
      },
      {
        label: "Navigation",
        children: [
          { label: "Navbar", path: "/ui/navigation/navbar" },
          { label: "Sidebar", path: "/ui/navigation/sidebar" },
          { label: "Tabs", path: "/ui/navigation/tabs" },
          { label: "Breadcrumb", path: "/ui/navigation/breadcrumb" }
        ]
      }
    ]
  },

  // =========================================================================
  // 🟨 CONTEXT: EXAMPLES
  // =========================================================================
  {
    navSection: "Examples",
    section: "Dashboards",
    items: [
      { label: "Analytics Dashboard", icon: "Layout", id: "examples-analytics", path: "/examples/analytics" },
      { label: "E-Commerce", icon: "Grid", id: "examples-ecommerce", path: "/examples/ecommerce" },
      { label: "SaaS Admin", icon: "Settings", id: "examples-saas", path: "/examples/saas" }
    ]
  },
  {
    navSection: "Examples",
    section: "Landing Pages",
    items: [
      { label: "Corporate", id: "examples-corporate", path: "/examples/corporate" },
      { label: "SaaS Product", id: "examples-product", path: "/examples/product" },
      { label: "Portfolio", id: "examples-portfolio", path: "/examples/portfolio" }
    ]
  }
];
