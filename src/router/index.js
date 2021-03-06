import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Toast from '@/components/Toast'
import Loading from '@/components/Loading'
import PullDown from '@/components/PullDown'
import PullUp from '@/components/PullUp'
import Scroll from '@/components/Scroll'
import Message from '@/components/Message'
import Action from '@/components/Action'
import Popup from '@/components/Popup'
import Swiper from '@/components/Swiper'
import Lazy from '@/components/Lazy'
import Badge from '@/components/Badge'
import Btn from '@/components/Btn'
import Cell from '@/components/cell'
import CellSwiper from '@/components/CellSwiper'
import CheckList from '@/components/checklist'
import DateTimePicker from '@/components/datetime-picker'
import Field from '@/components/field'
import Header from '@/components/header'
import IndexList from '@/components/index-list'
import Navbar from '@/components/navbar'
import Palette from '@/components/palette-button'
import Picker from '@/components/picker'
import Progress from '@/components/progress'
import Radio from '@/components/radio'
import Range from '@/components/range'
import Search from '@/components/search'
import Spinner from '@/components/spinner'
import Switch from '@/components/switch'
import TabContainer from '@/components/tab-container'
import TabBar from '@/components/tabbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/toast',
      name: 'Toast',
      component: Toast
    }, {
      path: '/loading',
      name: 'Loading',
      component: Loading
    }, {
      path: '/pulldown',
      name: 'PullDown',
      component: PullDown
    }, {
      path: '/pullup',
      name: 'PullUp',
      component: PullUp
    }, {
      path: '/scroll',
      name: 'Scroll',
      component: Scroll
    }, {
      path: '/message',
      name: 'Message',
      component: Message
    }, {
      path: '/action',
      name: 'Action',
      component: Action
    }, {
      path: '/popup',
      name: 'Popup',
      component: Popup
    }, {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper
    }, {
      path: '/lazy',
      name: 'Lazy',
      component: Lazy
    }, {
      path: '/badge',
      name: 'Badge',
      component: Badge
    }, {
      path: '/button',
      name: 'Btn',
      component: Btn
    }, {
      path: '/cell',
      name: 'Cell',
      component: Cell
    }, {
      path: '/cell-swiper',
      name: 'CellSwiper',
      component: CellSwiper
    }, {
      path: '/checklist',
      name: 'CheckList',
      component: CheckList
    }, {
      path: '/datetime-picker',
      name: 'DateTimePicker',
      component: DateTimePicker
    }, {
      path: '/field',
      name: 'Field',
      component: Field
    }, {
      path: '/header',
      name: 'Header',
      component: Header
    }, {
      path: '/index-list',
      name: 'IndexList',
      component: IndexList
    }, {
      path: '/navbar',
      name: 'Navbar',
      component: Navbar
    }, {
      path: '/palette-button',
      name: 'Palette',
      component: Palette
    }, {
      path: '/picker',
      name: 'Picker',
      component: Picker
    }, {
      path: '/progress',
      name: 'Progress',
      component: Progress
    }, {
      path: '/radio',
      name: 'Radio',
      component: Radio
    }, {
      path: '/range',
      name: 'Range',
      component: Range
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }, {
      path: '/switch',
      name: 'Switch',
      component: Switch
    }, {
      path: '/spinner',
      name: 'Spinner',
      component: Spinner
    }, {
      path: '/tab-container',
      name: 'TabContainer',
      component: TabContainer
    }, {
      path: '/tabbar',
      name: 'TabBar',
      component: TabBar
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  }
})
