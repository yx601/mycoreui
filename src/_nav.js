export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    // {
    //   title: true,
    //   name: '数据管理',
    //   class: '',
    //   wrapper: {
    //     element: '',
    //     attributes: {}
    //   }
    // },
    {
      name: '销售数据',
      url: '/sale',
      icon: 'cui-cart',
      children: [
        {
          name: '销售数据统计',
          url: '/sale/statistics',
          icon: 'cui-cart'
        },
        {
          name: '销售数据管理',
          url: '/sale/manage',
          icon: 'cui-cart'
        },
      ]
    },
    {
      name: '经营数据',
      url: '/operation',
      icon: 'icon-graph',
      children: [
        {
          name: '经营数据统计',
          url: '/operation/statistics',
          icon: 'icon-graph'
        },
        {
          name: '经营数据管理',
          url: '/operation/manage',
          icon: 'icon-graph',
          children: [
            {
              name: '厅店基本信息',
              url: '/operation/manage/baseinfo',
              icon: 'icon-graph',
            },
            {
              name: '佣金展示',
              url: '/operation/manage/yj',
              icon: 'icon-graph',
              children: [
                {
                  name: '佣金查询',
                  url: '/operation/manage/yj/yjquery',
                  icon: 'icon-graph',
                },
                {
                  name: '积分查询',
                  url: '/operation/manage/yj/jfquery',
                  icon: 'icon-graph',
                },
                {
                  name: '结算汇总查询',
                  url: '/operation/manage/yj/jsquery',
                  icon: 'icon-graph',
                },
                {
                  name: '运营补贴查询',
                  url: '/operation/manage/yj/yyquery',
                  icon: 'icon-graph',
                },
              ]
            },
          ]
        },
      ]
    },
    {
      name: '存量用户维系',
      url: '/stock',
      icon: 'cui-people',
      children: [
        {
          name: '存量数据统计',
          url: '/stock/statistics',
          icon: 'cui-people'
        },
        {
          name: '存量数据管理',
          url: '/stock/manage',
          icon: 'cui-people'
        },
      ]
    },
    {
      title: true,
      name: '主题',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Colors',
      url: '/theme/colors',
      icon: 'icon-drop'
    },
    {
      name: 'Typography',
      url: '/theme/typography',
      icon: 'icon-pencil'
    },
    {
      title: true,
      name: 'Components',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Base',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Cards',
          url: '/base/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'Carousels',
          url: '/base/carousels',
          icon: 'icon-puzzle'
        },
        {
          name: 'Collapses',
          url: '/base/collapses',
          icon: 'icon-puzzle'
        },
        {
          name: 'Forms',
          url: '/base/forms',
          icon: 'icon-puzzle'
        },
        {
          name: 'Jumbotrons',
          url: '/base/jumbotrons',
          icon: 'icon-puzzle'
        },
        {
          name: 'List Groups',
          url: '/base/list-groups',
          icon: 'icon-puzzle'
        },
        {
          name: 'Navs',
          url: '/base/navs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Navbars',
          url: '/base/navbars',
          icon: 'icon-puzzle'
        },
        {
          name: 'Paginations',
          url: '/base/paginations',
          icon: 'icon-puzzle'
        },
        {
          name: 'Popovers',
          url: '/base/popovers',
          icon: 'icon-puzzle'
        },
        {
          name: 'Progress Bars',
          url: '/base/progress-bars',
          icon: 'icon-puzzle'
        },
        {
          name: 'Switches',
          url: '/base/switches',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tables',
          url: '/base/tables',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tabs',
          url: '/base/tabs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/buttons/standard-buttons',
          icon: 'icon-cursor'
        },
        {
          name: 'Button Dropdowns',
          url: '/buttons/dropdowns',
          icon: 'icon-cursor'
        },
        {
          name: 'Button Groups',
          url: '/buttons/button-groups',
          icon: 'icon-cursor'
        },
        {
          name: 'Brand Buttons',
          url: '/buttons/brand-buttons',
          icon: 'icon-cursor'
        }
      ]
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart'
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW'
          }
        },
        {
          name: 'Flags',
          url: '/icons/flags',
          icon: 'icon-star'
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'icon-bell'
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'icon-bell'
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'icon-bell'
        }
      ]
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/pages/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/pages/register',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/pages/404',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/pages/500',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Download CoreUI',
      url: 'http://coreui.io/vue/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success'
    },
    {
      name: 'Try CoreUI PRO',
      url: 'http://coreui.io/pro/vue/',
      icon: 'icon-layers',
      variant: 'danger'
    }
  ]
}
