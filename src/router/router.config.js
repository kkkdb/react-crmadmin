import Main from '../components/main/Main';
import About from '../components/main/About';
import VipLevelManage from '../components/main/VipLevelManage';
import VipLevelSetting from '../components/main/VipLevelSetting';
import BirthdayRights from '../components/main/BirthdayRights';

const routes = [
	{
        path: '/about',
        component: About,
        exact: true,
    },
    {
        path: '/vipLevelManage',
        component: VipLevelManage,
        exact: true,
    },
    {
        path: '/vipLevelSetting',
        component: VipLevelSetting,
        exact: true,
    },
    {
        path: '/birthdayRights',
        component: BirthdayRights,
        exact: true,
    },
	{
		component: Main
	}
]

export default routes;