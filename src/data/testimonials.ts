import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'TechBridge Senior Analytics Lead',
    role: 'Lead Project Evaluator',
    organization: 'TechBridge Data Analytics Fellowship',
    rating: 5,
    message: 'Timothy exhibits an exceptional eye for detail in data cleaning and business problem framing. While analysing the Capstone Retail dataset, he was among the few to catch the -2 quantity discrepancy on transaction T0120 that would have corrupted the entire laptop sales calculation. That instinct is what separates good analysts from great ones.',
  },
  {
    id: '2',
    name: 'Peer Fellow',
    role: 'BI & Analytics Collaborator',
    organization: 'Data Analytics Cohort',
    rating: 5,
    message: 'Working alongside Timothy during our data wrangling and Power BI sprint was inspiring. His ability to structure clean relational data models allowed our team to finish hours ahead of deadline with zero referential errors.',
  },
  {
    id: '3',
    name: 'Department Project Reviewer',
    role: 'Academic Supervisor',
    organization: 'Federal University of Technology, Owerri (FUTO)',
    rating: 5,
    message: 'Timothy blends strong Computer Science fundamentals with practical analytics execution. His technical rigour, curiosity, and structured problem-solving approach make him a valuable asset to any analytical team.',
  },
];
