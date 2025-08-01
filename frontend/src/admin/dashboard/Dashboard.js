import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { dashboardData } from '../../mock/data';
import { 
  BarChart3, TrendingUp, Users, Clock, CheckCircle, 
  AlertCircle, DollarSign, FileText, Calendar, Settings 
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800';
      case 'medium':
        return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700';
    }
  };

  const statCards = [
    {
      title: 'Total Inquiries',
      value: dashboardData.monthlyStats.totalInquiries,
      icon: BarChart3,
      trend: '+12%',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Completed Projects',
      value: dashboardData.monthlyStats.completedProjects,
      icon: CheckCircle,
      trend: '+8%',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      title: 'Pending Projects',
      value: dashboardData.monthlyStats.pendingProjects,
      icon: Clock,
      trend: '-5%',
      color: 'text-orange-600 dark:text-orange-400'
    },
    {
      title: 'Monthly Revenue',
      value: dashboardData.monthlyStats.revenue,
      icon: DollarSign,
      trend: '+15%',
      color: 'text-red-600 dark:text-red-400'
    }
  ];

  return (
      
      <main className="px-4 py-4" style={{borderRadius:"5px", backgroundColor:"#ffffff"}}>
        <div className="w-full mx-auto">
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-['Syne'] mb-2">
              Business Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Monitor your business performance and manage client inquiries.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statCards.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                          {stat.value}
                        </p>
                        <p className={`text-sm font-semibold ${stat.color} flex items-center mt-2`}>
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {stat.trend} from last month
                        </p>
                      </div>
                      <div className={`p-3 rounded-xl bg-gray-100 dark:bg-gray-700`}>
                        <IconComponent className={`h-6 w-6 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Dashboard Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="-mb-px flex space-x-8">
                {[
                  { id: 'overview', label: 'Overview', icon: BarChart3 },
                  { id: 'inquiries', label: 'Inquiries', icon: FileText },
                  { id: 'settings', label: 'Settings', icon: Settings }
                ].map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${
                        activeTab === tab.id
                          ? 'border-red-500 text-red-600 dark:text-red-400'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                      }`}
                    >
                      <IconComponent className="h-4 w-4 mr-2" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <Card className="border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-gray-900 dark:text-white">
                      <BarChart3 className="h-5 w-5 mr-2 text-red-600 dark:text-red-400" />
                      Business Overview
                    </CardTitle>
                    <CardDescription>
                      Your business performance this month
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">45</div>
                          <div className="text-sm text-blue-700 dark:text-blue-300">New Inquiries</div>
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400">32</div>
                          <div className="text-sm text-green-700 dark:text-green-300">Completed Projects</div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-red-600 dark:text-red-400">₹4,50,000</div>
                        <div className="text-sm text-red-700 dark:text-red-300">Monthly Revenue</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">+15% from last month</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div>
                <Card className="border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start bg-red-600 hover:bg-red-700 text-white">
                      <FileText className="h-4 w-4 mr-2" />
                      Create New Quote
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-red-200 text-red-600 hover:bg-red-50">
                      <Users className="h-4 w-4 mr-2" />
                      View All Clients
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-red-200 text-red-600 hover:bg-red-50">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Meeting
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'inquiries' && (
            <Card className="border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900 dark:text-white">
                  <FileText className="h-5 w-5 mr-2 text-red-600 dark:text-red-400" />
                  Recent Inquiries
                </CardTitle>
                <CardDescription>
                  Manage your client inquiries and project requests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dashboardData.recentInquiries.map((inquiry) => (
                    <div key={inquiry.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {inquiry.name}
                          </h3>
                          <Badge className={getStatusColor(inquiry.status)}>
                            {inquiry.status}
                          </Badge>
                          <Badge className={getPriorityColor(inquiry.priority)}>
                            {inquiry.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                          Service: {inquiry.service}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Date: {inquiry.date}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                          View
                        </Button>
                        <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                          Update
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'settings' && (
            <Card className="border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900 dark:text-white">
                  <Settings className="h-5 w-5 mr-2 text-red-600 dark:text-red-400" />
                  Dashboard Settings
                </CardTitle>
                <CardDescription>
                  Customize your dashboard preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Notification Settings
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="form-checkbox text-red-600" defaultChecked />
                        <span className="text-gray-700 dark:text-gray-300">Email notifications for new inquiries</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="form-checkbox text-red-600" defaultChecked />
                        <span className="text-gray-700 dark:text-gray-300">SMS alerts for urgent projects</span>
                      </label>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Display Preferences
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="form-checkbox text-red-600" defaultChecked />
                        <span className="text-gray-700 dark:text-gray-300">Show monthly revenue chart</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="form-checkbox text-red-600" />
                        <span className="text-gray-700 dark:text-gray-300">Enable dark mode by default</span>
                      </label>
                    </div>
                  </div>

                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Save Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
        );
};

export default Dashboard;