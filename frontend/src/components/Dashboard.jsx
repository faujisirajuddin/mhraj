import React from 'react';
import { 
  TrendingUp, DollarSign, Eye, ShoppingCart, 
  MoreHorizontal, ArrowUp, ArrowDown, User 
} from 'lucide-react';
import { 
  dashboardStats, recentOrders, topSellingProducts, 
  earningsData, chartData, topCountries, topCustomers 
} from '../mock/mock';

const Dashboard = () => {
  const renderStatsCard = (stat) => {
    const iconMap = {
      TrendingUp: TrendingUp,
      DollarSign: DollarSign,
      Eye: Eye,
      ShoppingCart: ShoppingCart
    };

    const Icon = iconMap[stat.icon];
    const colorClasses = {
      purple: 'bg-purple-100 text-purple-600',
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      orange: 'bg-orange-100 text-orange-600'
    };

    return (
      <div key={stat.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg ${colorClasses[stat.color]}`}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          <div className="flex items-center space-x-1">
            <span className={`text-xs font-medium ${
              stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.changeType === 'positive' ? '+' : ''}{stat.change}
            </span>
            <span className="text-xs text-gray-500">{stat.period}</span>
          </div>
        </div>
      </div>
    );
  };

  const SimpleChart = () => (
    <div className="h-64 flex items-end justify-between space-x-2 px-4">
      {chartData.map((item, index) => (
        <div key={index} className="flex flex-col items-center space-y-1">
          <div 
            className="w-6 bg-purple-500 rounded-t"
            style={{ height: `${item.value * 2}px` }}
          ></div>
          <span className="text-xs text-gray-500">{item.month}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <button className="text-sm text-red-600 hover:text-red-700 font-medium">
          View All
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map(renderStatsCard)}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Charts and Promo */}
        <div className="lg:col-span-2 space-y-6">
          {/* Promo Card */}
          <div className="bg-gray-700 rounded-lg p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm opacity-90">Spenko Official Inc</p>
                  <h3 className="text-xl font-bold">BIG SAVING DAYS</h3>
                </div>
                <div className="bg-gray-600 px-3 py-1 rounded text-sm">
                  15 Jan
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Bank Offer 10% off on Adena Bank Credit Cards, up to $10. On orders of $500 and above T&C
              </p>
              <p className="text-xs opacity-75">15 Jan 2022 - 18 Jan 2022</p>
            </div>
          </div>

          {/* Earnings Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Earnings</h3>
              <button className="text-sm text-red-600 hover:text-red-700 font-medium">
                View All
              </button>
            </div>
            
            {/* Earnings Summary */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-600">First Half</p>
                <p className="text-lg font-bold text-gray-900">{earningsData.firstHalf.value}</p>
                <p className="text-xs text-green-600">+20%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Top Gross</p>
                <p className="text-lg font-bold text-gray-900">{earningsData.topGross.value}</p>
                <p className="text-xs text-green-600">+30%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Second Half</p>
                <p className="text-lg font-bold text-gray-900">{earningsData.secondHalf.value}</p>
                <p className="text-xs text-red-600">-20%</p>
              </div>
            </div>

            {/* Simple Chart */}
            <SimpleChart />
          </div>

          {/* Sales Alert */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-red-600 mb-2">Biggest sale is back.</h3>
            <p className="text-sm text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Labore harum accusamus earum dolorem sapiente. Sapge
            </p>
            <div className="flex space-x-3">
              <button className="bg-red-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-700 transition-colors">
                Notify Me
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
                Others
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Recent Orders and Products */}
        <div className="space-y-6">
          {/* Recent Orders */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-red-600 mb-4">Recent Orders</h3>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{order.product}</p>
                    <p className="text-xs text-gray-500">{order.category}</p>
                  </div>
                  <p className="text-sm font-semibold text-green-600">{order.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Countries */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-red-600 mb-4">Top Countries By Sales</h3>
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>38,256</span>
                <span>Since last week</span>
              </div>
            </div>
            <div className="space-y-3">
              {topCountries.map((country, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{country.country}</span>
                  <span className="text-sm font-medium text-gray-900">{country.sales}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Customers */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-red-600 mb-4">Top Customers</h3>
            <div className="space-y-4">
              {topCustomers.map((customer, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{customer.name}</p>
                    <p className="text-xs text-gray-500">{customer.purchases}</p>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{customer.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Selling Products Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-red-600">Top Selling Products</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.no</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Sales</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topSellingProducts.map((product, index) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      product.stockColor === 'green' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.sales}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;