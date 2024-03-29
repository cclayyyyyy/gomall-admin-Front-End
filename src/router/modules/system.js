// Import components
const Layout = () => import('@/layout/index.vue')
const sysRole = () => import('@/views/system/sysRole.vue')
const sysUser = () => import('@/views/system/sysUser.vue')
const sysMenu = () => import('@/views/system/sysMenu.vue')

// Export this component
export default [
  {
    path: '/system',
    component: Layout,
    name: 'system',
    meta: {
      title: '系统管理',
    },
    icon: 'Location',
    children: [
      {
        path: '/sysRole',
        name: 'sysRole',
        component: sysRole,
        meta: {
          title: '角色管理',
        },
        hidden: false,
      },
      {
        path: '/sysUser',
        name: 'sysUser',
        component: sysUser,
        meta: {
          title: '用户管理',
        },
        hidden: false,
      },
      {
        path: '/menu',
        name: 'sysMenu',
        component: sysMenu,
        meta: {
          title: '菜单管理',
        },
        hidden: false,
      },
    ],
  },
]
