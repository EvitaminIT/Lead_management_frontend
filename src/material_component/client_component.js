

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    CardHeader,
    CardBody,
    CardFooter,
    Tooltip,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Badge,
    Popover,
    PopoverHandler,
    PopoverContent,
    SpeedDial,
    SpeedDialAction,
    SpeedDialContent,
    SpeedDialHandler,
    Avatar,
    IconButton, 
    ButtonGroup, 
    Progress,
    Textarea,
    Option,
    Select,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Stepper,
    Step,
    Radio,
    Collapse,
    Switch,
    Navbar,
  
  } from "@material-tailwind/react";
  import GroupsIcon from '@mui/icons-material/Groups';
  import PestControlIcon from '@mui/icons-material/PestControl';
  import AccessTimeIcon from '@mui/icons-material/AccessTime';
  import PermIdentityIcon from '@mui/icons-material/PermIdentity';
  import Inventory2Icon from '@mui/icons-material/Inventory2';
  import CottageIcon from '@mui/icons-material/Cottage';
  import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
  import ExploreIcon from '@mui/icons-material/Explore';
  import { ChevronRightIcon, ChevronDownIcon,RocketLaunchIcon,PlusIcon, ArrowRightIcon, ArrowLeftIcon,HomeIcon,CogIcon,UserIcon,Bars3Icon, XMarkIcon, } from "@heroicons/react/24/outline";
  import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
  import EditCalendarIcon from '@mui/icons-material/EditCalendar';
  import ImportContactsIcon from '@mui/icons-material/ImportContacts';
  import TelegramIcon from '@mui/icons-material/Telegram';
  import TextSnippetIcon from '@mui/icons-material/TextSnippet';
  import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
  import TrendingUpIcon from '@mui/icons-material/TrendingUp';
  import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
  import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
  import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
  import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
  import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
  import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
  import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
  import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
  import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
  import MoreVertIcon from '@mui/icons-material/MoreVert';
  import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
  import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
  import SubjectIcon from '@mui/icons-material/Subject';
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    Bars4Icon,
    GlobeAmericasIcon,
    NewspaperIcon,
    PhoneIcon,
    RectangleGroupIcon,
    SquaresPlusIcon,
    SunIcon,
    TagIcon,
    UserGroupIcon,
  } from "@heroicons/react/24/solid";

  import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
  import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
  import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
  import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

  import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
  // import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
  import InventorySharpIcon from '@mui/icons-material/InventorySharp';
  import NavigateBeforeSharpIcon from '@mui/icons-material/NavigateBeforeSharp';
  import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
  import AddIcon from '@mui/icons-material/Add';
  import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
  import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
  import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
  import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
  import { Spinner } from "@material-tailwind/react";
  import GroupIcon from '@mui/icons-material/Group';
  import WavingHandIcon from '@mui/icons-material/WavingHand';
  import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
  import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
  import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
  import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
  import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
  import InterpreterModeOutlinedIcon from '@mui/icons-material/InterpreterModeOutlined';
  import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
  import SearchIcon from '@mui/icons-material/Search';
  import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
  import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
  import {CheckIcon} from "@heroicons/react/24/outline";
  import DownloadIcon from '@mui/icons-material/Download';
  import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
  import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
  import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
  import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
  import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

const Index ={
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    ChevronRightIcon, 
    ChevronDownIcon,
    CottageIcon,
    PermIdentityIcon,
    BusinessCenterIcon,
    Inventory2Icon,
    FormatListBulletedIcon,
    AccessTimeIcon,
    ExploreIcon,
    EditCalendarIcon,
    ImportContactsIcon,
    TelegramIcon,
    TextSnippetIcon,
    CalendarTodayIcon,
    TrendingUpIcon,
    VideocamOutlinedIcon,
    SettingsOutlinedIcon,
    LogoutOutlinedIcon,
    CottageOutlinedIcon,
    BusinessCenterOutlinedIcon,
    Inventory2OutlinedIcon,
    ExploreOutlinedIcon,
    EditCalendarOutlinedIcon,
    TextSnippetOutlinedIcon,
    MenuHandler,
    MenuItem,
    MenuList,
    Menu,
    RocketLaunchIcon,
    Avatar,
    CardHeader,
    CardBody,
    CardFooter,
    Tooltip,
    PestControlIcon,
    GroupsIcon,
    ArrowForwardIosIcon,
    IconButton,
    ButtonGroup,
    ArrowForwardIosIcon,
    ArrowRightIcon,
    ArrowLeftIcon,
    InventorySharpIcon,
    NavigateBeforeSharpIcon,
    NavigateNextSharpIcon,
    AddIcon,
    MoreVertIcon,
    NotificationsNoneOutlinedIcon,
    MailOutlinedIcon,
    FilterAltOutlinedIcon,
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
    Progress,
    CurrencyRupeeIcon,
    RemoveRedEyeOutlinedIcon,
    ArrowBackIosIcon,
    Badge,
    Popover,
    PopoverContent,
    PopoverHandler,
    SubjectIcon,
    SpeedDial,
    SpeedDialAction,
    SpeedDialContent,
    PlusIcon,
    SpeedDialHandler,
    GroupIcon,
    LocalHospitalOutlinedIcon,
    SendOutlinedIcon,
    Textarea,
    Spinner,
    WavingHandIcon,
    PeopleAltOutlinedIcon,
    PersonOutlineOutlinedIcon,
    PersonAddAltOutlinedIcon,
    BoltOutlinedIcon,
    ClassOutlinedIcon,
    InterpreterModeOutlinedIcon,
    WorkspacePremiumOutlinedIcon,
    Option,
    Select,
    SearchIcon,
    VisibilityOutlinedIcon,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    EditOutlinedIcon,
    Stepper,
    Step,
    HomeIcon,
    CogIcon,
    UserIcon,
    Radio,
    Collapse,
    Switch,
    CheckIcon,
    DownloadIcon,
    ClearOutlinedIcon,
    HttpsOutlinedIcon,
    Bars4Icon,
    GlobeAmericasIcon,
    NewspaperIcon,
    PhoneIcon,
    RectangleGroupIcon,
    SquaresPlusIcon,
    SunIcon,
    TagIcon,
    UserGroupIcon,
    Bars3Icon,
    XMarkIcon,
    Navbar,
    NotificationsOutlinedIcon,
    DeleteOutlineOutlinedIcon,
    PowerSettingsNewOutlinedIcon,
    AddCircleOutlineOutlinedIcon,
    RemoveCircleOutlineOutlinedIcon,
}

export default Index;