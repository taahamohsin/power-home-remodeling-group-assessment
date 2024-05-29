class DashboardController < ApplicationController
  def index
    @kpi_data = [
      { name: "Revenue", value: "$12,345.67", change: "+26%" },
      { name: "Orders", value: "8,910", change: "-2%" },
      { name: "Profit", value: "$5,432.10", change: "" },
      { name: "Average Check", value: "$14.99", change: "+5%" },
      { name: "Canceled", value: "18%", change: "-8%" },
      { name: "Repeat Sales", value: "22%", change: "" },
    ]

    @stats_summary = [
      { icon: "fa-solid fa-users", value: "2,450", label: "New Users" },
      { icon: "fa-solid fa-chart-line", value: "$12,456.78", label: "Sales" },
      { icon: "fa-solid fa-cart-shopping", value: "1,234", label: "Orders" },
    ]

    render partial: "dashboard/index"
  end
end
