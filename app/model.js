import APIEdit from './pages/apiedit';
import APIManage from './pages/apimanage';
import AppManage from './pages/appmanage';
import ClusterManage from './pages/clustermanage';
import ConfigureView from './pages/configureview';
import ExampleView from './pages/exampleview';
import NamespaceManage from './pages/namespacemanage';
import NodeManage from './pages/nodemanage';
import ServiceAdd from './pages/serviceadd';
import ServiceManage from './pages/servicemanage';
import ServiceMonitor from './pages/servicemonitor';
import Welcome from './pages/welcome';
export const appinit={
	brand: {
		title: 'Mars',
		subtitle: '测试环境',
		logo: 'http://10.110.200.180:8083/4,3e67867ccd',
	},
	navbar: {
		leftNav: null,
		rightNav: [
			{
				name: '用户',
				icon: 'user',
				href: '#/projectManage',
			},
			{
				name: '退出',
				icon: 'hand-o-right',
			},
		],
	},
	routers:[
		{
			url: '/',
			component: Welcome,
			title: 'welcome',
			leftIcon: 'html5',
			noMenu: false,
		},
		{
			url: '/frame/AppManage',
			component: AppManage,
			title: '应用管理',
			leftIcon: 'file',
			noMenu: false,
		},
		{
			url: '/frame/clusterManage',
			component: ClusterManage,
			title: '资源管理',
			leftIcon: 'th',
			noMenu: false,
		},
		{
			url: '/frame/namespace',
			component: NamespaceManage,
			title: '服务管理',
			leftIcon: 'codepen',
			noMenu: false,
		},
		{
			url: '/frame/NodeManage',
			component: NodeManage,
			title: '日志管理',
			leftIcon: 'file',
			noMenu: false,
		},
		{
			url: '/frame/ServiceMonitor',
			component: ServiceMonitor,
			title: '系统管理',
			leftIcon: 'cog',
			noMenu: false,
		},
		{
			url: '/frame/ServiceAdd',
			component: ServiceAdd,
			title: '添加服务',
			leftIcon: 'user',
			noMenu: false,
		},
		{
			url: '/frame/ServiceManage',
			component: ServiceManage,
			title: '服务管理',
			leftIcon: 'user',
			noMenu: false,
		},
		{
			url: '/frame/ConfigureManage',
			component: ConfigureView,
			title: '查看配置',
			leftIcon: 'user',
			noMenu: false,
		},
		{
			url: '/frame/APIManage',
			component: APIManage,
			title: '接口管理',
			leftIcon: 'user',
			noMenu: false,
		},
		{
			url: '/frame/exampleView',
			component: ExampleView,
			title: '查看实例',
			leftIcon: 'user',
			noMenu: false,
		},
		{
			url: '/frame/loginaa',
			component: APIEdit,
			title: 'susu',
			leftIcon: 'file',
			noMenu: false,
		},
	],
}