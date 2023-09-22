import React, { FC } from 'react';

const FeaturesListing = () => {
  return (
    <section className="max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center">
        <div className="light:bg-white-800 light:text-darkgray-100">
          <div data-aos="fade-up" className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">All the <span className="text-header-gradient">features</span> you need</h2>
              <p className="mt-4 text-lg dark:text-gray-400">Fragmentation of services across multiple third party vendors is what sparked the idea for AlertBird - the home of observability, giving you a wide array of functionalities to use within a single platform.</p>
            </div>
            <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Logs Management</dt>
                  <dd className="hidden sm:block mt-2 dark:text-gray-400">Centralized log collection and analysis for deep insights into application and system logs, enabling real-time issue detection and historical data analysis.</dd>
                </div>
              </div>
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Metrics &amp; Monitoring</dt>
                  <dd className="hidden sm:block mt-2 dark:text-gray-400">Comprehensive metrics tracking and real-time monitoring to assess application and infrastructure performance, with customizable alerts and interactive data visualizations.</dd>
                </div>
              </div>
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Distributed Tracing</dt>
                  <dd className="hidden sm:block mt-2 dark:text-gray-400">End-to-end tracing of requests and transactions in microservices and distributed systems, facilitating the identification of latency bottlenecks and service interactions.</dd>
                </div>
              </div>
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Application Performance Monitoring (APM)</dt>
                  <dd className="hidden sm:block mt-2 dark:text-gray-400">Instrument code, capture metrics, trace transactions, and identify performance bottlenecks for optimized code and correlated insights.</dd>
                </div>
              </div>
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Error &amp; Exception Tracking</dt>
                  <dd className="hidden sm:block mt-2 dark:text-gray-400">Pinpoint issues promptly, reducing downtime and enhancing user satisfaction.</dd>
                </div>
              </div>
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Infrastructure Monitoring</dt>
                  <dd className="hidden sm:block mt-2 dark:text-gray-400">Continuous monitoring of hosts, servers, and network infrastructure for performance, availability, and security, with real-time alerts and network traffic analysis.</dd>
                </div>
              </div>
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Incident Management</dt>
                  <dd className="hidden sm:block mt-2 dark:text-gray-400">Stay in control during critical situations, coordinate responses, and ensure business continuity.</dd>
                </div>
              </div>
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Alerting</dt>
                  <dd className="hidden sm:block mt-2 dark:text-gray-400">Notify stakeholders about critical errors and exceptions, integrating seamlessly with incident response and collaboration tools.</dd>
                </div>
              </div>
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Test Governance</dt>
                  <dd className="hidden sm:block mt-2 dark:text-gray-400">Detect flaky tests and track their occurrences to ensure reliable and accurate testing results. On-demand test triggering and real-time monitoring to ensure software functions as expected.</dd>
                </div>
              </div>
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Serverless Actions</dt>
                  <dd className="hidden sm:block mt-2 dark:text-gray-400">Simplify workflows and save resources with serverless functions, akin to Azure Functions, AWS Lambda, or GitHub Actions.</dd>
                </div>
              </div>
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Cross-Cloud Load Balancing & Auto-Scaling</dt>
                  <dd className="hidden sm:block mt-2 dark:text-gray-400">Optimize performance and ensure high availability by evenly distributing traffic across multiple servers.</dd>
                </div>
              </div>
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Easy Billing Management</dt>
                  <dd className="hidden sm:block mt-2 dark:text-gray-400">Transparent and flexible pricing models based on usage. Choose from various tiers to match your organization's size and requirements, making observability both accessible and cost-effective.</dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default FeaturesListing;
