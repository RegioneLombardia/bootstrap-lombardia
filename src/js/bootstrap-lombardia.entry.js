import '../scss/bootstrap-italia.scss'

import { loadPlugin } from './load-plugin'
import init from './plugins/init'
import loadFonts from './plugins/fonts-loader'
import { cookies } from './plugins/util/cookies'
import * as icons from './icons'
import it25Header from './plugins/it25-header'
import it25 from './plugins/it25'
import flatpickr from 'flatpickr/dist/flatpickr.js'
import it from 'flatpickr/dist/l10n/it.js'

import {
  // Bootstrap
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Offcanvas,
  Popover,
  ScrollSpy,
  Tab,
  Toast,
  Tooltip,
  // Extra components
  Dimmer,
  Notification,
  Cookiebar,
  NavBarCollapsible,
  Accordion,
  NavScroll,
  CarouselBI,
  FormValidate,
  ValidatorSelectAutocomplete,
  Input,
  SelectAutocomplete,
  InputSearchAutocomplete,
  InputPassword,
  InputNumber,
  ProgressDonut,
  UploadDragDrop,
  BackToTop,
  AcceptOverlay,
  Sticky,
  HeaderSticky,
  HistoryBack,
  Forward,
  Masonry,
  List,
  Transfer,
  VideoPlayer,
} from './bootstrap-lombardia.esm'

loadPlugin(icons)
init()

export default {
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Offcanvas,
  Popover,
  ScrollSpy,
  Tab,
  Toast,
  Tooltip,
  VideoPlayer,
  AcceptOverlay,
  Accordion,
  BackToTop,
  CarouselBI,
  Cookiebar,
  Dimmer,
  FormValidate,
  Forward,
  HistoryBack,
  Input,
  InputNumber,
  InputPassword,
  InputSearchAutocomplete,
  List,
  Masonry,
  NavBarCollapsible,
  NavScroll,
  Notification,
  ProgressDonut,
  SelectAutocomplete,
  Sticky,
  HeaderSticky,
  Transfer,
  UploadDragDrop,
  ValidatorSelectAutocomplete,
  loadFonts,
  cookies,
  it25Header,
  it25,
  flatpickr,
  it,
}
