import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'hr-attrition-bi',
    title: 'Workforce Retention and Attrition Analysis',
    tagline: 'Identifying churn drivers across 11,991 employee records using Power BI.',
    role: 'BI Analyst',
    year: '2026',
    category: 'bi',
    featured: true,
    summary: 'An interactive Power BI dashboard diagnosing the key drivers of employee turnover across departments, correlating job satisfaction scores and project workload thresholds.',
    keyFinding: 'Low-satisfaction employees accounted for 43.7% of all departures — Sales was the highest-risk department with 550 exits.',
    businessQuestion: 'Why are employees leaving, and which departments and satisfaction levels present the greatest retention risk?',
    description: [
      'This project analysed 11,991 employee records to identify why staff were leaving and which interventions leadership could deploy to reduce attrition.',
      'Using Excel for data wrangling and Power BI for modelling, I categorised satisfaction levels (below 0.4 as low, 0.4–0.7 as medium, above 0.7 as high) and workload thresholds (more than 7 projects as high burnout risk). The resulting dashboard gives HR leadership instant departmental visibility.',
    ],
    highlights: [
      'Overall employee attrition rate was 16.6% — 1,991 departures out of 11,991 total records.',
      'Sales recorded the highest turnover with 550 exits; Management had the lowest with 52.',
      '871 of 1,991 departures came from low-satisfaction employees, confirming satisfaction as the primary churn driver.',
      'Built an interactive Power BI dashboard with dynamic slicers, DAX KPI measures, and departmental drill-downs.',
    ],
    metrics: [
      { label: 'Records Analysed', value: '11,991' },
      { label: 'Attrition Rate', value: '16.6%' },
      { label: 'Primary Driver', value: 'Low Satisfaction' },
      { label: 'Highest-Risk Dept', value: 'Sales — 550 exits' },
    ],
    stack: ['Power BI', 'DAX', 'Excel', 'Data Modelling'],
    links: {
      github: 'https://github.com/Chikerezejt',
      drive: 'https://drive.google.com/drive/folders/1giDXL4xa1Kc4PeL0E0NcU85Ng3kFe2kh',
    },
    daxSnippet: `-- Attrition Rate measure
Attrition Rate % =
DIVIDE(
    CALCULATE(COUNTROWS(Employees), Employees[Employee_status] = "Left"),
    COUNTROWS(Employees),
    0
)

-- Low satisfaction share of leavers
Low_Sat_Leaver_Pct =
DIVIDE(
    CALCULATE(
        COUNTROWS(Employees),
        Employees[Satisfaction_category] = "Low",
        Employees[Employee_status] = "Left"
    ),
    CALCULATE(COUNTROWS(Employees), Employees[Employee_status] = "Left"),
    0
)`,
    businessImpact: 'Gave HR leadership visibility into which departments and satisfaction bands carry the greatest resignation risk, enabling targeted retention interventions.',
  },
  {
    id: 'retail-sales-capstone',
    title: 'Retail Sales and Revenue Analysis',
    tagline: 'SQL and Excel audit of ₦42.01M in retail transactions across three relational tables.',
    role: 'Data Analyst',
    year: '2026',
    category: 'financial',
    featured: true,
    summary: 'A transactional audit combining Customers, Products, and Transactions tables to verify revenue figures, identify data integrity issues, and answer commercial questions about product performance.',
    keyFinding: 'A negative quantity entry (-2 on transaction T0120) would have understated laptop revenue by ₦900,000 if left uncorrected.',
    businessQuestion: 'Is the reported revenue figure accurate, and which product categories and customers drive the most value?',
    description: [
      'This project was the final capstone for the TechBridge Data Analytics Fellowship, auditing 150 transactions across relational schemas to provide revenue transparency.',
      'The analysis resolved data integrity issues including invalid customer and product keys and a negative order quantity that would have understated laptop category revenue by ₦900,000.',
    ],
    highlights: [
      'Verified ₦42,013,200 in total gross revenue across 147 clean transactions and 447 units sold.',
      'Identified and corrected a negative quantity entry that would have caused a ₦900,000 reporting discrepancy.',
      'Removed orphan foreign keys (C999 and P999) before aggregating revenue figures.',
      'Wrote multi-table SQL queries to answer questions on customer frequency, category performance, and discount impact.',
    ],
    metrics: [
      { label: 'Revenue Verified', value: '₦42.01M' },
      { label: 'Clean Transactions', value: '147 of 150' },
      { label: 'Units Sold', value: '447' },
      { label: 'Discrepancy Caught', value: '₦900,000' },
    ],
    stack: ['SQL', 'PostgreSQL', 'Excel', 'Data Cleaning'],
    links: {
      github: 'https://github.com/Chikerezejt',
      drive: 'https://drive.google.com/drive/folders/1giDXL4xa1Kc4PeL0E0NcU85Ng3kFe2kh',
    },
    sqlSnippet: `-- Net revenue by category after discount and data cleaning
SELECT
    p.Category,
    COUNT(t.TransactionID)                             AS order_count,
    SUM(t.Quantity)                                    AS units_sold,
    ROUND(SUM(t.Quantity * p.UnitPrice * (1 - t.Discount)), 2) AS net_revenue_ngn
FROM Transactions t
INNER JOIN Products p  ON t.ProductID  = p.ProductID
INNER JOIN Customers c ON t.CustomerID = c.CustomerID
WHERE t.CustomerID <> 'C999'
  AND t.ProductID  <> 'P999'
  AND t.Quantity   > 0
GROUP BY p.Category
ORDER BY net_revenue_ngn DESC;`,
    businessImpact: 'Prevented a material reporting error and provided product-level revenue data to support marketing budget allocation decisions.',
  },
  {
    id: 'airbnb-eda-sql',
    title: 'Airbnb Global Listings and Host Performance Analysis',
    tagline: 'SQL exploratory analysis of 279,712 listings and 5.37 million reviews across 10 cities.',
    role: 'Data Analyst',
    year: '2026',
    category: 'sql',
    featured: true,
    summary: 'Exploratory SQL analysis of Airbnb listing and review data across ten international cities, examining pricing patterns, host responsiveness, neighbourhood concentration, and review behaviour.',
    keyFinding: 'Paris holds 23.1% of all listings; Sydney has the highest average price ($149.46 USD) while Istanbul has the lowest ($10.57 USD) — a 14× gap. 46% of host response times are missing, limiting performance analysis.',
    businessQuestion: 'How do listing supply, pricing, and host responsiveness vary across ten international cities, and what does this mean for market strategy?',
    description: [
      'This project analyses 279,712 Airbnb listings and over 5.37 million customer reviews across Paris, New York, Sydney, Cape Town, Rome, Bangkok, Hong Kong, Istanbul, Mexico City, and Rio de Janeiro.',
      'I standardised listing prices to USD using ECB exchange rates, removed exact duplicate review records using PostgreSQL\'s ctid system column, and preserved rows with missing review scores to avoid analytical bias.',
    ],
    highlights: [
      'Paris accounts for 23.1% of all listings (64,690 of 279,712) — the most concentrated single-city supply.',
      'Sydney has the highest average listing price at $149.46 USD; Istanbul the lowest at $10.57 USD — a 14× pricing difference.',
      '46% of host response-time records are NULL, documented as a material data-quality limitation.',
      'Standardised 10 local currencies to USD using ECB reference rates for valid cross-city price comparison.',
    ],
    metrics: [
      { label: 'Listings Analysed', value: '279,712' },
      { label: 'Reviews Processed', value: '5.37M' },
      { label: 'Cities Covered', value: '10' },
      { label: 'Price Range (avg USD)', value: '$10 – $149' },
    ],
    stack: ['PostgreSQL', 'SQL', 'Excel', 'Exploratory Data Analysis', 'Data Cleaning'],
    links: {
      github: 'https://github.com/Chikerezejt/Airbnb-Data-Analysis',
      kaggle: 'https://www.kaggle.com/datasets/chikerezejt/airbnb-data-analysis/data',
    },
    sqlSnippet: `-- Average vs median listing price by city (USD-standardised)
SELECT
    city,
    ROUND(AVG(price_usd)::numeric, 2)                           AS avg_price_usd,
    ROUND(PERCENTILE_CONT(0.5)
          WITHIN GROUP (ORDER BY price_usd)::numeric, 2)        AS median_price_usd
FROM airbnb_listings
WHERE price_usd IS NOT NULL
GROUP BY city
ORDER BY avg_price_usd DESC;`,
    businessImpact: 'Identified pricing disparities and host responsiveness gaps across ten markets, providing an analytical basis for host acquisition strategy and pricing guidance.',
  },
  {
    id: 'global-customer-sql',
    title: 'Customer Segmentation Analysis',
    tagline: 'Querying 8,000 customer profiles across 20 countries to map geographic market concentration.',
    role: 'Data Analyst',
    year: '2026',
    category: 'sql',
    featured: false,
    summary: 'SQL queries on an 8,000-record international customer database to analyse geographic distribution and regional market share.',
    keyFinding: 'Three countries accounted for over 60% of the customer base, indicating high geographic concentration and limited regional diversification.',
    businessQuestion: 'How is our customer base distributed across countries, and which regions represent the greatest concentration or opportunity?',
    description: [
      'Extracted geographic insights from an 8,000-record customer database spanning 20 countries, using aggregation queries and window functions to calculate market share by region.',
    ],
    highlights: [
      'Queried 8,000 customer profiles across 20 countries.',
      'Used window functions to calculate each country\'s share of the total customer base.',
      'Identified specific breakdowns for the United Kingdom and African cohorts.',
    ],
    metrics: [
      { label: 'Customers Queried', value: '8,000' },
      { label: 'Countries Mapped', value: '20' },
    ],
    stack: ['SQL', 'MySQL', 'Data Aggregation'],
    links: { github: 'https://github.com/Chikerezejt' },
    sqlSnippet: `-- Market share by country using window function
SELECT
    country,
    COUNT(customer_id)                                           AS total_customers,
    ROUND(COUNT(customer_id) * 100.0
          / SUM(COUNT(customer_id)) OVER (), 2)                 AS market_share_pct
FROM customer
GROUP BY country
ORDER BY total_customers DESC;`,
    businessImpact: 'Provided a geographic breakdown to help go-to-market teams identify regions with the highest existing customer concentration.',
  },
  {
    id: 'synthetic-workforce-cleaning',
    title: 'Workforce Data Cleaning and Imputation',
    tagline: 'Resolving missing values and normalising 1,020 employee records for downstream analysis.',
    role: 'Data Analyst',
    year: '2026',
    category: 'quality',
    featured: false,
    summary: 'A data cleaning exercise resolving missing age and salary values, non-numeric entries, and compound column formats across 1,020 personnel records.',
    keyFinding: '211 missing age entries and 24 invalid salary records were resolved through departmental average imputation, restoring the dataset for reliable analysis.',
    businessQuestion: 'How do we prepare an incomplete, inconsistently formatted employee dataset for reliable analysis without discarding useful records?',
    description: [
      'Real-world HR data is often incomplete. This project developed a cleaning protocol to resolve nulls, non-numeric strings, and compound attributes across 1,020 personnel entries.',
    ],
    highlights: [
      'Imputed 211 missing age entries using departmental mean values.',
      'Replaced 24 "N/A" salary entries with department-calibrated averages.',
      'Split compound "Department_Region" columns into separate, queryable dimensions.',
      'Flagged and removed records with clearly erroneous values (e.g. age recorded as 3).',
    ],
    metrics: [
      { label: 'Records Cleaned', value: '1,020' },
      { label: 'Cells Corrected', value: '235' },
    ],
    stack: ['Excel', 'Data Cleaning', 'Statistical Imputation'],
    links: {
      github: 'https://github.com/Chikerezejt',
      drive: 'https://drive.google.com/drive/folders/1XmA2qANZqFAR81TDzMMzdprxttFnegwu',
    },
    businessImpact: 'Converted an unreliable spreadsheet into a clean, analysis-ready dataset suitable for further modelling.',
  },
];
