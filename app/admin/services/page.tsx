import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { getAllServices } from "@/lib/content";
import { Plus, ToggleLeft, ToggleRight, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

export default async function AdminServices() {
  const authenticated = await isAuthenticated();
  if (!authenticated) redirect("/admin/login");

  const services = getAllServices();

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-stone-800">Services</h1>
          <p className="text-stone-500">Beheer je diensten en aanbod</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-colors">
          <Plus className="h-5 w-5" />
          Nieuwe Service
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-stone-50 border-b border-stone-100">
              <th className="text-left py-4 px-6 text-sm font-medium text-stone-500">Service</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-stone-500">Beschrijving</th>
              <th className="text-center py-4 px-6 text-sm font-medium text-stone-500">Status</th>
              <th className="text-right py-4 px-6 text-sm font-medium text-stone-500">Acties</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="border-b border-stone-50 hover:bg-stone-50/50">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center">
                      <span className="text-stone-400 text-xl">{service.icon}</span>
                    </div>
                    <span className="font-medium text-stone-800">{service.title}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-stone-500 max-w-md truncate">
                  {service.description}
                </td>
                <td className="py-4 px-6 text-center">
                  {service.active ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                      <ToggleRight className="h-3 w-3" /> Actief
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-stone-100 text-stone-500 rounded-full text-xs font-medium">
                      <ToggleLeft className="h-3 w-3" /> Inactief
                    </span>
                  )}
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-stone-400 hover:text-stone-600 hover:bg-stone-100 rounded-lg transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-xl text-blue-700 text-sm">
        <strong>Tip:</strong> Zet services op &quot;Inactief&quot; om ze tijdelijk te verbergen zonder te verwijderen.
      </div>
    </div>
  );
}
