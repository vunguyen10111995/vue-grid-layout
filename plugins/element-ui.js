import Vue from 'vue';

import locale from 'element-ui/lib/locale';
import langEn from 'element-ui/lib/locale/lang/en';

import Container from 'element-ui/lib/container';
import Aside from 'element-ui/lib/aside';
import Header from 'element-ui/lib/header';
import Main from 'element-ui/lib/main';

import Message from 'element-ui/lib/message';
import Notification from 'element-ui/lib/notification';
import MessageBox from 'element-ui/lib/message-box';

import Input from 'element-ui/lib/input';
import Select from 'element-ui/lib/select';
import Option from 'element-ui/lib/option';
import OptionGroup from 'element-ui/lib/option-group';
import Switch from 'element-ui/lib/switch';
import Checkbox from 'element-ui/lib/checkbox';
import Radio from 'element-ui/lib/radio';
import RadioButton from 'element-ui/lib/radio-button';
import RadioGroup from 'element-ui/lib/radio-group';
import Autocomplete from 'element-ui/lib/autocomplete';
import Pagination from 'element-ui/lib/pagination';

import Button from 'element-ui/lib/button';
import Dialog from 'element-ui/lib/dialog';

import Form from 'element-ui/lib/form';
import FormItem from 'element-ui/lib/form-item';
import Alert from 'element-ui/lib/alert';
import Badge from 'element-ui/lib/badge';

import Popover from 'element-ui/lib/popover';
import Dropdown from 'element-ui/lib/dropdown';
import DropdownMenu from 'element-ui/lib/dropdown-menu';
import DropdownItem from 'element-ui/lib/dropdown-item';

import Tabs from 'element-ui/lib/tabs';
import TabPane from 'element-ui/lib/tab-pane';

import Scrollbar from 'element-ui/lib/scrollbar';
import Table from 'element-ui/lib/table';
import TableColumn from 'element-ui/lib/table-column';
import Card from 'element-ui/lib/card';
import Menu from 'element-ui/lib/menu';
import Submenu from 'element-ui/lib/submenu';
import MenuItem from 'element-ui/lib/menu-item';
import Slider from 'element-ui/lib/slider';
import DatePicker from 'element-ui/lib/date-picker';
import Tag from 'element-ui/lib/tag';
import BreadCrumb from 'element-ui/lib/breadcrumb';
import BreadCrumbItem from 'element-ui/lib/breadcrumb-item';

import Loading from 'element-ui/lib/loading';
import Progress from 'element-ui/lib/progress';

export default function () {
    locale.use(langEn);

    Vue.prototype.$message = Message;
    Vue.prototype.$notify = Notification;
    Vue.prototype.$confirm = MessageBox;

    Vue.use(Loading.directive);

    Vue.component('ElContainer', Container);
    Vue.component('ElAside', Aside);
    Vue.component('ElHeader', Header);
    Vue.component('ElMain', Main);
    Vue.component('ElPagination', Pagination);

    Vue.component('ElInput', Input);
    Vue.component('ElSelect', Select);
    Vue.component('ElOption', Option);
    Vue.component('ElOptionGroup', OptionGroup);
    Vue.component('ElSwitch', Switch);
    Vue.component('ElCheckbox', Checkbox);
    Vue.component('ElRadio', Radio);
    Vue.component('ElRadioButton', RadioButton);
    Vue.component('ElRadioGroup', RadioGroup);
    Vue.component('ElAutocomplete', Autocomplete);

    Vue.component('ElButton', Button);
    Vue.component('ElDialog', Dialog);

    Vue.component('ElForm', Form);
    Vue.component('ElFormItem', FormItem);
    Vue.component('ElAlert', Alert);
    Vue.component('ElBadge', Badge);

    Vue.component('ElPopover', Popover);
    Vue.component('ElDropdown', Dropdown);
    Vue.component('ElDropdownMenu', DropdownMenu);
    Vue.component('ElDropdownItem', DropdownItem);

    Vue.component('ElTabs', Tabs);
    Vue.component('ElTabPane', TabPane);

    Vue.component('ElScrollbar', Scrollbar);
    Vue.component('ElTable', Table);
    Vue.component('ElTableColumn', TableColumn);
    Vue.component('ElCard', Card);
    Vue.component('ElMenu', Menu);
    Vue.component('ElSubmenu', Submenu);
    Vue.component('ElMenuItem', MenuItem);
    Vue.component('ElSlider', Slider);
    Vue.component('ElDatePicker', DatePicker);
    Vue.component('ElTag', Tag);
    Vue.component('ElBreadcrumb', BreadCrumb);
    Vue.component('ElBreadcrumbItem', BreadCrumbItem);

    Vue.component('ElProgress', Progress);
}
