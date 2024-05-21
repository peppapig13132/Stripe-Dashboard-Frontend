import { MontlyRecurringRevenue } from "../../components/monthly-recurring-revenue/MontlyRecurringRevenue";
import { MrrMovements } from "../../components/mrr-movements/MrrMovements";
import { LastSubscribers } from "../../components/last-subscribers/LastSubscribers";
import { AverageStaying } from "../../components/average-staying/AverageStaying";
import { CustomerLifetimeValue } from "../../components/customer-lifetime-value/CustomerLifetimeValue";
import { CustomerChurnRate } from "../../components/customer-churn-rate/CustomerChurnRate";
import { FreeToPaidSubscriptions } from "../../components/free-to-paid-subscriptions/FreeToPaidSubscriptions";
import { FreeTrials } from "../../components/free-trials/FreeTrials";
import { AnnualRunRate } from "../../components/annual-run-rate/AnnualRunRate";

export const Dashboard = () => {
  return(
    <div className="bg-slate-200">
      <div className="dashboard container mx-auto w-full min-h-screen p-8">
        <div className="dashboard__header p-2">
          <h2 className="font-bold text-2xl lg:text-3xl text-sky-600">Dashboard</h2>
        </div>

        <div className="dashboard__body flex flex-col">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 px-1.5 py-3">
              <MontlyRecurringRevenue />
            </div>
            <div className="w-full lg:w-1/3 px-1.5 py-3">
              <LastSubscribers />
            </div>
            <div className="w-full lg:w-1/3 px-1.5 py-3">
              <MrrMovements />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 px-1.5 py-3">
              <AverageStaying />
            </div>
            <div className="w-full lg:w-1/3 px-1.5 py-3">
              <CustomerLifetimeValue />
            </div>
            <div className="w-full lg:w-1/3 px-1.5 py-3">
              <CustomerChurnRate />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 px-1.5 py-3">
              <FreeToPaidSubscriptions />
            </div>
            <div className="w-full lg:w-1/3 px-1.5 py-3">
              <FreeTrials />
            </div>
            <div className="w-full lg:w-1/3 px-1.5 py-3">
              <AnnualRunRate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}