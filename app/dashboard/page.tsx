'use client'

import { usePermissions } from '@/hooks/usePermissions'

export default function DashboardPage() {
  const { user, permissions } = usePermissions()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Welcome Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Welcome back!</h2>
          <p className="text-gray-600">{user?.name}</p>
          <p className="text-sm text-gray-500 mt-1">Role: {user?.roleType}</p>
        </div>

        {/* Permissions Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Your Permissions</h2>
          <p className="text-gray-600">You have {permissions.length} permissions</p>
          <div className="mt-2 text-sm text-gray-500">
            {permissions.slice(0, 3).map((perm, i) => (
              <div key={i} className="truncate">• {perm}</div>
            ))}
            {permissions.length > 3 && <div>• and {permissions.length - 3} more...</div>}
          </div>
        </div>

        {/* Stats Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Quick Stats</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Active Users</span>
              <span className="font-bold">12</span>
            </div>
            <div className="flex justify-between">
              <span>Open Tasks</span>
              <span className="font-bold">5</span>
            </div>
            <div className="flex justify-between">
              <span>New Leads</span>
              <span className="font-bold">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}