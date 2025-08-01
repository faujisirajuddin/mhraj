// Mock data for the dashboard application

export const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'LayoutDashboard',
    path: '/dashboard',
    active: true
  },
  {
    id: 'role-management',
    label: 'Role Management',
    icon: 'ShieldCheck',
    path: '/role-management'
  },
  {
    id: 'faq-management',
    label: 'FAQ Management',
    icon: 'HelpCircle',
    path: '/faq-management'
  },
  {
    id: 'masters',
    label: 'Masters',
    icon: 'Settings',
    path: '/masters',
    hasSubmenu: true,
    isExpanded: false,
    subItems: [
      { id: 'company-industry', label: 'Company Industry Management', path: '/masters/company-industry' },
      { id: 'industry-sector', label: 'Industry Sector/Category Management', path: '/masters/industry-sector' },
      { id: 'nationality', label: 'Nationality Master Management', path: '/masters/nationality' },
      { id: 'legal-form', label: 'Company Legal Form Management', path: '/masters/legal-form' }
    ]
  },
];

export const dashboardStats = [
  {
    id: 'sales',
    title: 'Total Sales',
    value: '14,732',
    change: '+14%',
    changeType: 'positive',
    period: 'this month',
    icon: 'TrendingUp',
    color: 'purple'
  },
  {
    id: 'expenses',
    title: 'Total Expenses',
    value: '$28,346.00',
    change: '+20%',
    changeType: 'positive',
    period: 'this month',
    icon: 'DollarSign',
    color: 'blue'
  },
  {
    id: 'visitors',
    title: 'Total Visitors',
    value: '129,368',
    change: '-7%',
    changeType: 'negative',
    period: 'this month',
    icon: 'Eye',
    color: 'green'
  },
  {
    id: 'orders',
    title: 'Total Orders',
    value: '35,367',
    change: '+12%',
    changeType: 'positive',
    period: 'this month',
    icon: 'ShoppingCart',
    color: 'orange'
  }
];

export const recentOrders = [
  {
    id: 1,
    product: 'Smart Phone',
    category: 'Mobiles',
    price: '$999.99',
    image: '/placeholder-phone.jpg'
  },
  {
    id: 2,
    product: 'White Headphones',
    category: 'Music',
    price: '$79.49',
    image: '/placeholder-headphones.jpg'
  },
  {
    id: 3,
    product: 'Stop Watch',
    category: 'Electronics',
    price: '$49.29',
    image: '/placeholder-watch.jpg'
  },
  {
    id: 4,
    product: 'Kikon Camera',
    category: 'Electronics',
    price: '$1,690.00',
    image: '/placeholder-camera.jpg'
  },
  {
    id: 5,
    product: 'Photo Frame',
    category: 'Furniture',
    price: '$29.99',
    image: '/placeholder-frame.jpg'
  },
  {
    id: 6,
    product: 'Canvas Shoes',
    category: 'Footwear',
    price: '$89.99',
    image: '/placeholder-shoes.jpg'
  }
];

export const topSellingProducts = [
  {
    id: 1,
    name: 'Ethnic School bag for children (24L)',
    category: 'Bags',
    stock: 'In Stock',
    stockColor: 'green',
    sales: '5,093',
    price: '$199.99'
  },
  {
    id: 2,
    name: 'Leather jacket for men (S,M,L,XL)',
    category: 'Clothing',
    stock: 'In Stock',
    stockColor: 'green',
    sales: '6,890',
    price: '$299.99'
  },
  {
    id: 3,
    name: 'Childrens Teddy toy of high quality',
    category: 'Toys',
    stock: 'Out Of Stock',
    stockColor: 'red',
    sales: '5,423',
    price: '$49.99'
  }
];

export const earningsData = {
  firstHalf: { value: '$61.94K', change: '+20%', changeType: 'positive' },
  topGross: { value: '$18.32K', change: '+30%', changeType: 'positive' },
  secondHalf: { value: '$38K', change: '-20%', changeType: 'negative' }
};

export const chartData = [
  { month: 'Jan', value: 45 },
  { month: 'Feb', value: 52 },
  { month: 'Mar', value: 48 },
  { month: 'Apr', value: 65 },
  { month: 'May', value: 70 },
  { month: 'Jun', value: 55 },
  { month: 'Jul', value: 60 },
  { month: 'Aug', value: 58 },
  { month: 'Sep', value: 62 },
  { month: 'Oct', value: 68 },
  { month: 'Nov', value: 45 },
  { month: 'Dec', value: 42 }
];

export const topCountries = [
  { country: 'France', sales: '5,932' },
  { country: 'Spain', sales: '5,383' },
  { country: 'Argentina', sales: '4,825' },
  { country: 'Usa', sales: '4,527' },
  { country: 'Germany', sales: '4,501' }
];

export const topCustomers = [
  { name: 'Emma Wilson', purchases: '19 Purchases', amount: '$1,835' },
  { name: 'Robert Lewis', purchases: '18 Purchases', amount: '$2,415' },
  { name: 'Angelina Hope', purchases: '21 Purchases', amount: '$2,341' },
  { name: 'Samantha Sam', purchases: '24 Purchases', amount: '2,824' }
];

export const userProfile = {
  name: 'Admin User',
  email: 'admin@gulfina.com',
  avatar: '/placeholder-avatar.jpg'
};