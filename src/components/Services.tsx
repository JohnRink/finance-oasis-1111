import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

const services = [
  {
    title: "Financial Controller Services",
    description: "Comprehensive financial leadership and oversight for your business operations.",
    price: "from $12/h",
    link: "/services/controlling",
    details: {
      intro: "This model provides businesses access to high-level financial expertise without requiring a full-time hire, ideal for small to medium-sized businesses or startups with limited resources.",
      services: [
        "Financial Reporting: Prepares accurate financial statements, including balance sheets, income statements, and cash flow statements.",
        "Budgeting and Forecasting: Sets budgets, monitors performance, adjusts as needed, and predicts financial outcomes.",
        "Internal Controls: Establishes and enforces controls to ensure data accuracy, prevent fraud, and safeguard assets.",
        "Cash Flow Management: Monitors and manages liquidity to meet obligations.",
        "Financial Process Improvements: Identifies and implements efficiencies for cost savings.",
        "Accounting System Management: Optimizes accounting systems and implements new tools if needed.",
        "Income Tax and VAT: Ensures compliance and prepares data for tax filings.",
        "External Audit Liaison: Acts as the primary contact for external auditors.",
        "Strategic Planning: Shapes financial strategies and provides actionable insights.",
        "Team Management: Oversees and trains in-house accounting teams."
      ]
    }
  },
  {
    title: "Fractional Financial Controller Services",
    description: "Part-time financial expertise tailored to your business needs.",
    price: "from $10/h",
    link: "/services/controlling",
    details: {
      intro: "A fractional controller provides many of the same services and responsibilities as a comprehensive controller but on a part-time or as-needed basis. This model is ideal for existing financial controllers who need an extra pair of hands and support to free up time to focus on operations and strategy.",
      services: [
        "Financial Reporting: Prepares accurate financial statements, including balance sheets, income statements, and cash flow statements.",
        "Budgeting and Forecasting: Sets budgets, monitors performance, adjusts as needed, and predicts financial outcomes.",
        "Internal Controls: Establishes and enforces controls to ensure data accuracy, prevent fraud, and safeguard assets.",
        "Cash Flow Management: Monitors and manages liquidity to meet obligations.",
        "Financial Process Improvements: Identifies and implements efficiencies for cost savings.",
        "Accounting System Management: Optimizes accounting systems and implements new tools if needed.",
        "Income Tax and VAT: Ensures compliance and prepares data for tax filings.",
        "External Audit Liaison: Acts as the primary contact for external auditors.",
        "Strategic Planning: Shapes financial strategies and provides actionable insights.",
        "Team Management: Oversees and trains in-house accounting teams."
      ]
    }
  },
  {
    title: "Finance Function Support",
    description: "Comprehensive support for your finance operations and processes.",
    price: "from $10/h",
    link: "/services/secondment",
    details: {
      intro: "Managing a modern finance function requires flexibility, expertise, and precision. At Actuate, we provide comprehensive Finance Function Support by introducing experienced accountants into your accounting processes to improve efficiency and meet your period-end deadlines.\n\nOur services are tailored to your needs, offering full outsourced solutions, interim support during busy periods, short-term cover, month-end assistance, or specific technical expertise for complex accounting matters.",
      services: [
        "Accounts Payable Management",
        "Accounts Receivable Management",
        "General Ledger Maintenance",
        "Bank Reconciliation",
        "Payroll Processing",
        "Financial Statement Preparation",
        "Budgeting and Forecasting",
        "Financial and Management Reporting",
        "Cost and Inventory Management",
        "Fixed Assets Management",
        "Cash Flow Management"
      ]
    }
  },
  {
    title: "Audit Firm Support",
    description: "Professional assistance for audit processes and compliance.",
    price: "from $15/h",
    link: "/services/audit-support",
    details: {
      intro: "Managing audit engagements requires skilled professionals who can balance technical expertise, leadership, and client relationship management. At Actuate, we provide Big 4 Experienced Auditors to support audit firms by performing high-quality audit work, managing and coaching teams, and leading client relationships to ensure seamless execution of engagements.\n\nOur auditors integrate seamlessly with your teams, offering interim support or long-term secondments tailored to your needs.",
      services: [
        "Performing detailed audit work to ensure accuracy and compliance with firm methodology",
        "Managing and coaching audit teams to achieve high-quality deliverables",
        "Leading day-to-day client relationships, fostering trust and effective communication",
        "Reviewing completed work and financial statements to maintain quality standards",
        "Addressing and clearing client queries and review points promptly and effectively"
      ],
      schedule: {
        title: "A Typical Day in Action:",
        timeSlots: [
          {
            time: "Morning",
            activity: "A team check-in to align priorities, address challenges, and review project timelines, tasks, and areas requiring special attention."
          },
          {
            time: "Mid-Morning",
            activity: "Overseeing the review of audit files, providing constructive feedback to team members, and ensuring accuracy and quality. Participating in virtual meetings with clients to discuss audit progress, identify opportunities to add value, and resolve bottlenecks."
          },
          {
            time: "Afternoon",
            activity: "Focusing on completing complex audit work, reviewing junior team members' work, and coaching members on technical challenges."
          },
          {
            time: "Late Afternoon",
            activity: "Checking in with senior management on audit progress to align on deliverables and identify areas for process improvement."
          }
        ]
      }
    }
  },
  {
    title: "Gen AI and Accounting Technologies",
    description: "Cutting-edge AI solutions for modern accounting challenges.",
    price: "from $20/h",
    link: "/services/technology"
  },
  {
    title: "Crypto Accounting Advisory",
    description: "Expert guidance in digital asset accounting and compliance.",
    price: "from $25/h",
    link: "/services/technology"
  }
];

export const Services = () => {
  const [openService, setOpenService] = useState<string | null>(null);

  return (
    <section className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-olive text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-sand-light">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-olive">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-olive-dark mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-olive">{service.price}</p>
              </CardContent>
              <CardFooter className="flex flex-col w-full">
                {service.details ? (
                  <Collapsible
                    open={openService === service.title}
                    onOpenChange={() => setOpenService(openService === service.title ? null : service.title)}
                    className="w-full"
                  >
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" className="w-full mb-2">
                        Learn More
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 space-y-2 text-sm text-olive-dark">
                      <p className="mb-4 whitespace-pre-line">{service.details.intro}</p>
                      {service.details.services && (
                        <ul className="list-disc pl-4 space-y-2">
                          {service.details.services.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {service.details.schedule && (
                        <div className="mt-4">
                          <h4 className="font-semibold mb-2">{service.details.schedule.title}</h4>
                          <div className="space-y-2">
                            {service.details.schedule.timeSlots.map((slot, index) => (
                              <div key={index} className="border-l-2 border-olive pl-4">
                                <span className="font-semibold">{slot.time}:</span> {slot.activity}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Link to={service.link} className="w-full">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
