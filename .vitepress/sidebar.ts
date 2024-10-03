import type { ThemeConfig } from "@vue/theme";


export const sidebar: ThemeConfig['sidebar'] = {
  '/guide/': [
    {
      text: 'Getting Started',
      items: [
        { text: 'Introduction', link: '/guide/introduction' },
        {
          text: 'Quick Start',
          link: '/guide/quick-start'
        }
      ]
    },
    {
      text: 'material',
      items: [
        {
          text: 'building-from-source',
          link: '/guide/material/building-from-source'
        },
        {
          text: 'catalog-app',
          link: '/guide/material/catalog-app'
        },
        {
          text: 'contributing',
          link: '/guide/material/contributing'
        },
        {
          text: 'directorystructure',
          link: '/guide/material/directorystructure'
        },
        {
          text: 'getting-started',
          link: '/guide/material/getting-started'
        },
        {
          text: 'theming',
          link: '/guide/material/theming'
        },
        {
          text: 'using-snapshot-version',
          link: '/guide/material/using-snapshot-version'
        },
        {
          text: 'CanonicalLayouts',
          link: '/guide/material/CanonicalLayouts'
        },
        {
          text: 'PredictiveBack',
          link: '/guide/material/PredictiveBack'
        }
      ]
    },
    {
      text: 'theming',
      items: [
        {
          text: 'Color',
          link: '/guide/theming/Color'
        },
        {
          text: 'Dark',
          link: '/guide/theming/Dark'
        },
        {
          text: 'Motion',
          link: '/guide/theming/Motion'
        },
        {
          text: 'Shape',
          link: '/guide/theming/Shape'
        },
        {
          text: 'Typography',
          link: '/guide/theming/Typography'
        }
      ]
    },
    {
      text: 'components',
      items: [
        {
          text: 'async',
          link: '/guide/components/async'
        },
        {
          text: 'attrs',
          link: '/guide/components/attrs'
        },
        {
          text: 'BadgeDrawable',
          link: '/guide/components/BadgeDrawable'
        },
        {
          text: 'Banner',
          link: '/guide/components/Banner'
        },
        {
          text: 'BottomAppBar',
          link: '/guide/components/BottomAppBar'
        },
        {
          text: 'BottomNavigation',
          link: '/guide/components/BottomNavigation'
        },
        {
          text: 'BottomSheet',
          link: '/guide/components/BottomSheet'
        },
        {
          text: 'Button',
          link: '/guide/components/Button'
        },
        {
          text: 'Card',
          link: '/guide/components/Card'
        },
        {
          text: 'Carousel',
          link: '/guide/components/Carousel'
        },
        {
          text: 'Checkbox',
          link: '/guide/components/Checkbox'
        },
        {
          text: 'Chip',
          link: '/guide/components/Chip'
        },
        {
          text: 'DataTable',
          link: '/guide/components/DataTable'
        },
        {
          text: 'DatePicker',
          link: '/guide/components/DatePicker'
        },
        {
          text: 'Dialog',
          link: '/guide/components/Dialog'
        },
        {
          text: 'Divider',
          link: '/guide/components/Divider'
        },
        {
          text: 'events',
          link: '/guide/components/events'
        },
        {
          text: 'FloatingActionButton',
          link: '/guide/components/FloatingActionButton'
        },
        {
          text: 'ImageList',
          link: '/guide/components/ImageList'
        },
        {
          text: 'List',
          link: '/guide/components/List'
        },
        {
          text: 'LoadingIndicator',
          link: '/guide/components/LoadingIndicator'
        },
        {
          text: 'MaterialTextView',
          link: '/guide/components/MaterialTextView'
        },
        {
          text: 'Menu',
          link: '/guide/components/Menu'
        },
        {
          text: 'NavigationDrawer',
          link: '/guide/components/NavigationDrawer'
        },
        {
          text: 'NavigationRail',
          link: '/guide/components/NavigationRail'
        },
        {
          text: 'ProgressIndicator',
          link: '/guide/components/ProgressIndicator'
        },
        {
          text: 'props',
          link: '/guide/components/props'
        },
        {
          text: 'provide-inject',
          link: '/guide/components/provide-inject'
        },
        {
          text: 'RadioButton',
          link: '/guide/components/RadioButton'
        },
        {
          text: 'registration',
          link: '/guide/components/registration'
        },
        {
          text: 'Search',
          link: '/guide/components/Search'
        },
        {
          text: 'SideSheet',
          link: '/guide/components/SideSheet'
        },
        {
          text: 'Slider',
          link: '/guide/components/Slider'
        },
        {
          text: 'slots',
          link: '/guide/components/slots'
        },
        {
          text: 'Snackbar',
          link: '/guide/components/Snackbar'
        },
        {
          text: 'Switch',
          link: '/guide/components/Switch'
        },
        {
          text: 'Tabs',
          link: '/guide/components/Tabs'
        },
        {
          text: 'TextField',
          link: '/guide/components/TextField'
        },
        {
          text: 'TimePicker',
          link: '/guide/components/TimePicker'
        },
        {
          text: 'Tooltip',
          link: '/guide/components/Tooltip'
        },
        {
          text: 'TopAppBar',
          link: '/guide/components/TopAppBar'
        },
        {
          text: 'v-model',
          link: '/guide/components/v-model'
        }
      ]
    },
    {
      text: 'Essentials',
      items: [
        {
          text: 'Creating an Application',
          link: '/guide/essentials/application'
        },
        {
          text: 'Template Syntax',
          link: '/guide/essentials/template-syntax'
        },
        {
          text: 'Reactivity Fundamentals',
          link: '/guide/essentials/reactivity-fundamentals'
        },
        {
          text: 'Computed Properties',
          link: '/guide/essentials/computed'
        },
        {
          text: 'Class and Style Bindings',
          link: '/guide/essentials/class-and-style'
        },
        {
          text: 'Conditional Rendering',
          link: '/guide/essentials/conditional'
        },
        { text: 'List Rendering', link: '/guide/essentials/list' },
        {
          text: 'Event Handling',
          link: '/guide/essentials/event-handling'
        },
        { text: 'Form Input Bindings', link: '/guide/essentials/forms' },
        {
          text: 'Lifecycle Hooks',
          link: '/guide/essentials/lifecycle'
        },
        { text: 'Watchers', link: '/guide/essentials/watchers' },
        { text: 'Template Refs', link: '/guide/essentials/template-refs' },
        {
          text: 'Components Basics',
          link: '/guide/essentials/component-basics'
        }
      ]
    },
    {
      text: 'Components In-Depth',
      items: [
        {
          text: 'Registration',
          link: '/guide/components/registration'
        },
        { text: 'Props', link: '/guide/components/props' },
        { text: 'Events', link: '/guide/components/events' },
        { text: 'Component v-model', link: '/guide/components/v-model' },
        {
          text: 'Fallthrough Attributes',
          link: '/guide/components/attrs'
        },
        { text: 'Slots', link: '/guide/components/slots' },
        {
          text: 'Provide / inject',
          link: '/guide/components/provide-inject'
        },
        {
          text: 'Async Components',
          link: '/guide/components/async'
        }
      ]
    },
    {
      text: 'Reusability',
      items: [
        {
          text: 'Composables',
          link: '/guide/reusability/composables'
        },
        {
          text: 'Custom Directives',
          link: '/guide/reusability/custom-directives'
        },
        { text: 'Plugins', link: '/guide/reusability/plugins' }
      ]
    },
    {
      text: 'Built-in Components',
      items: [
        { text: 'Transition', link: '/guide/built-ins/transition' },
        {
          text: 'TransitionGroup',
          link: '/guide/built-ins/transition-group'
        },
        { text: 'KeepAlive', link: '/guide/built-ins/keep-alive' },
        { text: 'Teleport', link: '/guide/built-ins/teleport' },
        { text: 'Suspense', link: '/guide/built-ins/suspense' }
      ]
    },
    {
      text: 'Scaling Up',
      items: [
        { text: 'Single-File Components', link: '/guide/scaling-up/sfc' },
        { text: 'Tooling', link: '/guide/scaling-up/tooling' },
        { text: 'Routing', link: '/guide/scaling-up/routing' },
        {
          text: 'State Management',
          link: '/guide/scaling-up/state-management'
        },
        { text: 'Testing', link: '/guide/scaling-up/testing' },
        {
          text: 'Server-Side Rendering (SSR)',
          link: '/guide/scaling-up/ssr'
        }
      ]
    },
    {
      text: 'Best Practices',
      items: [
        {
          text: 'Production Deployment',
          link: '/guide/best-practices/production-deployment'
        },
        {
          text: 'Performance',
          link: '/guide/best-practices/performance'
        },
        {
          text: 'Accessibility',
          link: '/guide/best-practices/accessibility'
        },
        {
          text: 'Security',
          link: '/guide/best-practices/security'
        }
      ]
    },
    {
      text: 'TypeScript',
      items: [
        { text: 'Overview', link: '/guide/typescript/overview' },
        {
          text: 'TS with Composition API',
          link: '/guide/typescript/composition-api'
        },
        {
          text: 'TS with Options API',
          link: '/guide/typescript/options-api'
        }
      ]
    },
    {
      text: 'Extra Topics',
      items: [
        {
          text: 'Ways of Using Vue',
          link: '/guide/extras/ways-of-using-vue'
        },
        {
          text: 'Composition API FAQ',
          link: '/guide/extras/composition-api-faq'
        },
        {
          text: 'Reactivity in Depth',
          link: '/guide/extras/reactivity-in-depth'
        },
        {
          text: 'Rendering Mechanism',
          link: '/guide/extras/rendering-mechanism'
        },
        {
          text: 'Render Functions & JSX',
          link: '/guide/extras/render-function'
        },
        {
          text: 'Vue and Web Components',
          link: '/guide/extras/web-components'
        },
        {
          text: 'Animation Techniques',
          link: '/guide/extras/animation'
        }
      ]
    }
  ],
  '/api/': [
    {
      text: 'components',
      items: [
        {
          text: 'button',
          link: '/api/components/button'
        },
        {
          text: 'checkbox',
          link: '/api/components/checkbox'
        },
        {
          text: 'chip',
          link: '/api/components/chip'
        },
        {
          text: 'dialog',
          link: '/api/components/dialog'
        },
        {
          text: 'divider',
          link: '/api/components/divider'
        },
        {
          text: 'elevation',
          link: '/api/components/elevation'
        },
        {
          text: 'fab',
          link: '/api/components/fab'
        },
        {
          text: 'focus-ring',
          link: '/api/components/focus-ring'
        },
        {
          text: 'icon',
          link: '/api/components/icon'
        },
        {
          text: 'icon-button',
          link: '/api/components/icon-button'
        },
        {
          text: 'list',
          link: '/api/components/list'
        },
        {
          text: 'menu',
          link: '/api/components/menu'
        },
        {
          text: 'progress',
          link: '/api/components/progress'
        },
        {
          text: 'radio',
          link: '/api/components/radio'
        },
        {
          text: 'ripple',
          link: '/api/components/ripple'
        },
        {
          text: 'select',
          link: '/api/components/select'
        },
        {
          text: 'slider',
          link: '/api/components/slider'
        },
        {
          text: 'switch',
          link: '/api/components/switch'
        },
        {
          text: 'tabs',
          link: '/api/components/tabs'
        },
        {
          text: 'text-field',
          link: '/api/components/text-field'
        }
      ]
    },
    {
      text: 'theming',
      items: [
        {
          text: 'color',
          link: '/api/theming/color'
        },
        {
          text: 'intro',
          link: '/api/theming/intro'
        },
        {
          text: 'quick-start',
          link: '/api/theming/quick-start'
        },
        {
          text: 'README',
          link: '/api/theming/README'
        },
        {
          text: 'roadmap',
          link: '/api/theming/roadmap'
        },
        {
          text: 'shape',
          link: '/api/theming/shape'
        },
        {
          text: 'size',
          link: '/api/theming/size'
        },
        {
          text: 'support',
          link: '/api/theming/support'
        },
        {
          text: 'typography',
          link: '/api/theming/typography'
        }
      ]
    },
    {
      text: 'Global API',
      items: [
        { text: 'Application', link: '/api/application' },
        {
          text: 'General',
          link: '/api/general'
        }
      ]
    },
    {
      text: 'Composition API',
      items: [
        { text: 'setup()', link: '/api/composition-api-setup' },
        {
          text: 'Reactivity: Core',
          link: '/api/reactivity-core'
        },
        {
          text: 'Reactivity: Utilities',
          link: '/api/reactivity-utilities'
        },
        {
          text: 'Reactivity: Advanced',
          link: '/api/reactivity-advanced'
        },
        {
          text: 'Lifecycle Hooks',
          link: '/api/composition-api-lifecycle'
        },
        {
          text: 'Dependency Injection',
          link: '/api/composition-api-dependency-injection'
        },
        {
          text: 'Helpers',
          link: '/api/composition-api-helpers'
        }
      ]
    },
    {
      text: 'Options API',
      items: [
        { text: 'Options: State', link: '/api/options-state' },
        { text: 'Options: Rendering', link: '/api/options-rendering' },
        {
          text: 'Options: Lifecycle',
          link: '/api/options-lifecycle'
        },
        {
          text: 'Options: Composition',
          link: '/api/options-composition'
        },
        { text: 'Options: Misc', link: '/api/options-misc' },
        {
          text: 'Component Instance',
          link: '/api/component-instance'
        }
      ]
    },
    {
      text: 'Built-ins',
      items: [
        { text: 'Directives', link: '/api/built-in-directives' },
        { text: 'Components', link: '/api/built-in-components' },
        {
          text: 'Special Elements',
          link: '/api/built-in-special-elements'
        },
        {
          text: 'Special Attributes',
          link: '/api/built-in-special-attributes'
        }
      ]
    },
    {
      text: 'Single-File Component',
      items: [
        { text: 'Syntax Specification', link: '/api/sfc-spec' },
        { text: '<script setup>', link: '/api/sfc-script-setup' },
        { text: 'CSS Features', link: '/api/sfc-css-features' }
      ]
    },
    {
      text: 'Advanced APIs',
      items: [
        { text: 'Custom Elements', link: '/api/custom-elements' },
        { text: 'Render Function', link: '/api/render-function' },
        { text: 'Server-Side Rendering', link: '/api/ssr' },
        { text: 'TypeScript Utility Types', link: '/api/utility-types' },
        { text: 'Custom Renderer', link: '/api/custom-renderer' },
        { text: 'Compile-Time Flags', link: '/api/compile-time-flags' }
      ]
    }
  ],
  '/angular/': [
    {
      sidebar: 'auto',
    }
  ],
  '/flutter/': [
    {
      text: 'about',
      items: [
        {
          text: 'case-of-emergency',
          link: '/flutter/about/case-of-emergency'
        },
        {
          text: 'Engine-architecture',
          link: '/flutter/about/Engine-architecture'
        },
        {
          text: 'Flutter-Self-Service-Index',
          link: '/flutter/about/Flutter-Self-Service-Index'
        },
        {
          text: 'Framework-architecture',
          link: '/flutter/about/Framework-architecture'
        },
        {
          text: 'Glossary',
          link: '/flutter/about/Glossary'
        },
        {
          text: 'Project-teams',
          link: '/flutter/about/Project-teams'
        },
        {
          text: 'repository-architecture',
          link: '/flutter/about/repository-architecture'
        },
        {
          text: 'separate-engine-repo',
          link: '/flutter/about/separate-engine-repo'
        },
        {
          text: 'Values',
          link: '/flutter/about/Values'
        }
      ]
    },
    {
      text: 'contributing',
      items: [
        {
          text: 'Chat',
          link: '/flutter/contributing/Chat'
        },
        {
          text: 'Contributor-access',
          link: '/flutter/contributing/Contributor-access'
        },
        {
          text: 'Data-driven-Fixes',
          link: '/flutter/contributing/Data-driven-Fixes'
        },
        {
          text: 'Design-Documents',
          link: '/flutter/contributing/Design-Documents'
        },
        {
          text: 'development-environment',
          link: '/flutter/contributing/development-environment'
        },
        {
          text: 'Driver-tests-with-Web',
          link: '/flutter/contributing/Driver-tests-with-Web'
        },
        {
          text: 'Flutter-Test-Fonts',
          link: '/flutter/contributing/Flutter-Test-Fonts'
        },
        {
          text: 'for-package-flutter',
          link: '/flutter/contributing/for-package-flutter'
        },
        {
          text: 'GIFs-of-Flutter-apps',
          link: '/flutter/contributing/GIFs-of-Flutter-apps'
        },
        {
          text: 'Labeling-PRs',
          link: '/flutter/contributing/Labeling-PRs'
        },
        {
          text: 'package-flutter',
          link: '/flutter/contributing/package-flutter'
        },
        {
          text: 'Popular-issues',
          link: '/flutter/contributing/Popular-issues'
        },
        {
          text: 'README',
          link: '/flutter/contributing/README'
        },
        {
          text: 'Running-and-writing-tests',
          link: '/flutter/contributing/Running-and-writing-tests'
        },
        {
          text: 'Signing-commits',
          link: '/flutter/contributing/Signing-commits'
        },
        {
          text: 'speed-test-for-Flutter',
          link: '/flutter/contributing/speed-test-for-Flutter'
        },
        {
          text: 'Style-guide-for-Flutter-repo',
          link: '/flutter/contributing/Style-guide-for-Flutter-repo'
        },
        {
          text: 'test-for-Flutter',
          link: '/flutter/contributing/test-for-Flutter'
        },
        {
          text: 'Tree-hygiene',
          link: '/flutter/contributing/Tree-hygiene'
        },
        {
          text: 'use-reliable-links',
          link: '/flutter/contributing/use-reliable-links'
        },
        {
          text: 'Using-the-Dart-analyzer',
          link: '/flutter/contributing/Using-the-Dart-analyzer'
        },
        {
          text: 'What-should-I-work-on',
          link: '/flutter/contributing/What-should-I-work-on'
        },
        {
          text: 'Writing-Effective-Tests',
          link: '/flutter/contributing/Writing-Effective-Tests'
        }
      ]
    },
    {
      text: 'ecosystem',
      items: [
        {
          text: 'contributing',
          link: '/flutter/ecosystem/contributing'
        },
        {
          text: 'development-environment',
          link: '/flutter/ecosystem/development-environment'
        },
        {
          text: 'Package-migration-to',
          link: '/flutter/ecosystem/Package-migration-to'
        },
        {
          text: 'Plugins-and-Packages',
          link: '/flutter/ecosystem/Plugins-and-Packages'
        },
        {
          text: 'Plugins-development',
          link: '/flutter/ecosystem/Plugins-development'
        },
        {
          text: 'Plugin-Tests',
          link: '/flutter/ecosystem/Plugin-Tests'
        },
        {
          text: 'README',
          link: '/flutter/ecosystem/README'
        },
        {
          text: 'Understanding-Packages',
          link: '/flutter/ecosystem/Understanding-Packages-tests'
        },
        {
          text: 'Updating-Packages-repo',
          link: '/flutter/ecosystem/Updating-Packages-repo'
        }
      ]
    },
    {
      text: 'infra',
      items: [
        {
          text: 'Autorollers',
          link: '/flutter/infra/Autorollers'
        },
        {
          text: 'Autosubmit',
          link: '/flutter/infra/Autosubmit'
        },
        {
          text: 'Autosubmit-bot',
          link: '/flutter/infra/Autosubmit-bot'
        },
        {
          text: 'Dashboards',
          link: '/flutter/infra/Dashboards'
        },
        {
          text: 'Flutter-FirebaseLab',
          link: '/flutter/infra/Flutter-FirebaseLab'
        },
        {
          text: 'Flutter-Framework',
          link: '/flutter/infra/Flutter-Framework'
        },
        {
          text: 'Framework-CI',
          link: '/flutter/infra/Framework-CI'
        },
        {
          text: 'from-a-benchmark',
          link: '/flutter/infra/from-a-benchmark'
        },
        {
          text: 'GitHub-Action-Workflows',
          link: '/flutter/infra/GitHub-Action-Workflows'
        },
        {
          text: 'Infrastructure-Foundation',
          link: '/flutter/infra/Infrastructure-Foundation'
        },
        {
          text: 'Infra-Ticket-Queue',
          link: '/flutter/infra/Infra-Ticket-Queue'
        },
        {
          text: 'Installation-Bundles',
          link: '/flutter/infra/Installation-Bundles'
        },
        {
          text: 'LUCI-build-failure',
          link: '/flutter/infra/LUCI-build-failure'
        },
        {
          text: 'new-Test-Shard',
          link: '/flutter/infra/new-Test-Shard'
        },
        {
          text: 'Packages-Gardener',
          link: '/flutter/infra/Packages-Gardener'
        },
        {
          text: 'README',
          link: '/flutter/infra/README'
        },
        {
          text: 'Reducing-Test-Flakiness',
          link: '/flutter/infra/Reducing-Test-Flakiness'
        },
        {
          text: 'Rolling-Dart',
          link: '/flutter/infra/Rolling-Dart'
        },
        {
          text: 'Security',
          link: '/flutter/infra/Security'
        },
        {
          text: 'Running-examples',
          link: '/flutter/infra/Running-examples'
        },
        {
          text: 'Understanding-Google',
          link: '/flutter/infra/Understanding-Google'
        },
        {
          text: 'Updating-dependencies',
          link: '/flutter/infra/Updating-dependencies'
        }
      ]
    },
    {
      text: 'ecosystem',
      items: [
        {
          text: 'contributing',
          link: '/flutter/ecosystem/contributing'
        },
        {
          text: 'development-environment',
          link: '/flutter/ecosystem/development-environment'
        },
        {
          text: 'Package-migration-to',
          link: '/flutter/ecosystem/Package-migration-to'
        },
        {
          text: 'Plugins-and-Packages',
          link: '/flutter/ecosystem/Plugins-and-Packages'
        },
        {
          text: 'Plugins-development',
          link: '/flutter/ecosystem/Plugins-development'
        },
        {
          text: 'Plugin-Tests',
          link: '/flutter/ecosystem/Plugin-Tests'
        },
        {
          text: 'README',
          link: '/flutter/ecosystem/README'
        },
        {
          text: 'Understanding-Packages',
          link: '/flutter/ecosystem/Understanding-Packages-tests'
        },
        {
          text: 'Updating-Packages-repo',
          link: '/flutter/ecosystem/Updating-Packages-repo'
        }
      ]
    },
    {
      text: 'platforms',
      items: [
        {
          text: 'Accessibility-on-Windows',
          link: '/flutter/platforms/Accessibility-on-Windows'
        },
        {
          text: 'Android-Multidex-support',
          link: '/flutter/platforms/Android-Multidex-support'
        },
        {
          text: 'Android-Platform-Views',
          link: '/flutter/platforms/Android-Platform-Views'
        },
        {
          text: 'Android-projects',
          link: '/flutter/platforms/Android-projects'
        },
        {
          text: 'build-with-gradle',
          link: '/flutter/platforms/build-with-gradle'
        },
        {
          text: 'Debugging-issues',
          link: '/flutter/platforms/Debugging-issues'
        },
        {
          text: 'Gradle-for-Android',
          link: '/flutter/platforms/Gradle-for-Android'
        },
        {
          text: 'Hybrid-Composition',
          link: '/flutter/platforms/Hybrid-Composition'
        },
        {
          text: 'New-Android-version',
          link: '/flutter/platforms/New-Android-version'
        },
        {
          text: 'Resolving-common',
          link: '/flutter/platforms/Resolving-common'
        },
        {
          text: 'Testing-Android-Changes',
          link: '/flutter/platforms/Testing-Android-Changes'
        },
        {
          text: 'Texture-Layer-Hybrid',
          link: '/flutter/platforms/Texture-Layer-Hybrid'
        },
        {
          text: 'Updating-Material',
          link: '/flutter/platforms/Updating-Material'
        },
        {
          text: 'Upgrading-Engine',
          link: '/flutter/platforms/Upgrading-Engine'
        },
        {
          text: 'Upgrading-Flutter-projects',
          link: '/flutter/platforms/Upgrading-Flutter-projects'
        },
        {
          text: 'Virtual-Display',
          link: '/flutter/platforms/Virtual-Display'
        }
      ]
    },
    {
      text: 'postmortems',
      items: [
        {
          text: 'Postmortem-AndroidX',
          link: '/flutter/postmortems/Postmortem-AndroidX'
        },
        {
          text: 'Postmortem-Beta',
          link: '/flutter/postmortems/Postmortem-Beta'
        },
        {
          text: 'Postmortem-Build',
          link: '/flutter/postmortems/Postmortem-Build'
        },
        {
          text: 'Postmortem-flutte',
          link: '/flutter/postmortems/Postmortem-flutte'
        },
        {
          text: 'README',
          link: '/flutter/postmortems/README'
        },
        {
          text: 'Retrospective-Flutter',
          link: '/flutter/postmortems/Retrospective-Flutter'
        },
        {
          text: 'Widespread-Gradle',
          link: '/flutter/postmortems/Widespread-Gradle'
        },
        {
          text: 'Windows-Defender',
          link: '/flutter/postmortems/Windows-Defender'
        }
      ]
    },
    {
      text: 'releases',
      items: [
        {
          text: 'Bad-Builds',
          link: '/flutter/releases/Bad-Builds'
        },

        {
          text: 'Flutter-build-release',
          link: '/flutter/releases/Flutter-build-release'
        },
        {
          text: 'Flutter-Cherrypick-Process',
          link: '/flutter/releases/Flutter-Cherrypick-Process'
        },
        {
          text: 'Hotfix-Documentation',
          link: '/flutter/releases/Hotfix-Documentation'
        },
        {
          text: 'Notes---Flutter-1.2.1',
          link: '/flutter/releases/Notes---Flutter-1.2.1'
        },
        {
          text: 'Notes-Flutter-1.5.4',
          link: '/flutter/releases/Notes-Flutter-1.5.4'
        },
        {
          text: 'Notes-Flutter-1.7.8',
          link: '/flutter/releases/Notes-Flutter-1.7.8'
        },
        {
          text: 'Notes-Flutter-1.9.1',
          link: '/flutter/releases/Notes-Flutter-1.9.1'
        },
        {
          text: 'PRs-addressed-between',
          link: '/flutter/releases/PRs-addressed-between'
        },
        {
          text: 'Quality-Assurance',
          link: '/flutter/releases/Quality-Assurance'
        },
        {
          text: 'Release-process',
          link: '/flutter/releases/Release-process'
        },
        {
          text: 'Release-versioning',
          link: '/flutter/releases/Release-versioning'
        },
        {
          text: 'Upgrading-from',
          link: '/flutter/releases/Upgrading-from'
        },
        {
          text: 'Where-my-commit',
          link: '/flutter/releases/Where-my-commit'
        }
      ]
    },
    {
      text: 'tool',
      items: [
        {
          text: 'Fast-Start',
          link: '/flutter/tool/Fast-Start'
        },
        {
          text: 'Managing-template',
          link: '/flutter/tool/Managing-template'
        },
        {
          text: 'Old-Roadmaps',
          link: '/flutter/tool/Old-Roadmaps'
        },
        {
          text: 'README',
          link: '/flutter/tool/README'
        },
        {
          text: 'Roadmap',
          link: '/flutter/tool/Roadmap'
        },
        {
          text: 'The-flutter-run-variants',
          link: '/flutter/tool/The-flutter-run-variants'
        },
        {
          text: 'Using-custom-embedders',
          link: '/flutter/tool/Using-custom-embedders'
        }
      ]
    },
    {
      text: 'triage',
      items: [
        {
          text: 'across-screens',
          link: '/flutter/triage/across-screens'
        },
        {
          text: 'Add-Flutter-View',
          link: '/flutter/triage/Add-Flutter-View'
        },
        {
          text: 'Breaking-Commits',
          link: '/flutter/triage/Breaking-Commits'
        },
        {
          text: 'documentation-index',
          link: '/flutter/triage/documentation-index'
        },
        {
          text: 'Experimental-Add-Flutter',
          link: '/flutter/triage/Experimental-Add-Flutter'
        },
        {
          text: 'Flutter-migrate',
          link: '/flutter/triage/Flutter-migrate'
        },
        {
          text: 'Flutter-Web-Triage',
          link: '/flutter/triage/Flutter-Web-Triage'
        },
        {
          text: 'Multi-device-debugging',
          link: '/flutter/triage/Multi-device-debugging'
        },
        {
          text: 'new-embedding',
          link: '/flutter/triage/new-embedding'
        },
        {
          text: 'non-main-entrypoint',
          link: '/flutter/triage/non-main-entrypoint'
        },
        {
          text: 'README',
          link: '/flutter/triage/README'
        },
        {
          text: 'using-channels',
          link: '/flutter/triage/using-channels'
        },
        {
          text: 'Workarounds-for-common',
          link: '/flutter/triage/Workarounds-for-common'
        }
      ]
    }
  ],
  '/examples/': [
    {
      text: 'Basic',
      items: [
        {
          text: 'Hello World',
          link: '/examples/#hello-world'
        },
        {
          text: 'Handling User Input',
          link: '/examples/#handling-input'
        },
        {
          text: 'Attribute Bindings',
          link: '/examples/#attribute-bindings'
        },
        {
          text: 'Conditionals and Loops',
          link: '/examples/#conditionals-and-loops'
        },
        {
          text: 'Form Bindings',
          link: '/examples/#form-bindings'
        },
        {
          text: 'Simple Component',
          link: '/examples/#simple-component'
        }
      ]
    },
    {
      text: 'Practical',
      items: [
        {
          text: 'Markdown Editor',
          link: '/examples/#markdown'
        },
        {
          text: 'Fetching Data',
          link: '/examples/#fetching-data'
        },
        {
          text: 'Grid with Sort and Filter',
          link: '/examples/#grid'
        },
        {
          text: 'Tree View',
          link: '/examples/#tree'
        },
        {
          text: 'SVG Graph',
          link: '/examples/#svg'
        },
        {
          text: 'Modal with Transitions',
          link: '/examples/#modal'
        },
        {
          text: 'List with Transitions',
          link: '/examples/#list-transition'
        },
        {
          text: 'TodoMVC',
          link: '/examples/#todomvc'
        }
      ]
    },
    {
      // https://eugenkiss.github.io/7guis/
      text: '7 GUIs',
      items: [
        {
          text: 'Counter',
          link: '/examples/#counter'
        },
        {
          text: 'Temperature Converter',
          link: '/examples/#temperature-converter'
        },
        {
          text: 'Flight Booker',
          link: '/examples/#flight-booker'
        },
        {
          text: 'Timer',
          link: '/examples/#timer'
        },
        {
          text: 'CRUD',
          link: '/examples/#crud'
        },
        {
          text: 'Circle Drawer',
          link: '/examples/#circle-drawer'
        },
        {
          text: 'Cells',
          link: '/examples/#cells'
        }
      ]
    }
  ],
  '/style-guide/': [
    {
      text: 'Style Guide',
      items: [
        {
          text: 'Overview',
          link: '/style-guide/'
        },
        {
          text: 'A - Essential',
          link: '/style-guide/rules-essential'
        },
        {
          text: 'B - Strongly Recommended',
          link: '/style-guide/rules-strongly-recommended'
        },
        {
          text: 'C - Recommended',
          link: '/style-guide/rules-recommended'
        },
        {
          text: 'D - Use with Caution',
          link: '/style-guide/rules-use-with-caution'
        }
      ]
    }
  ]
};
