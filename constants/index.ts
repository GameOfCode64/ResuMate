// Main Sidebarlinks

import { BotMessageSquare, File, Home, Layout, LineChart } from "lucide-react";

export const Sidebarlinks = [
  {
    icons: Home,
    route: "/dashboard",
    titel: "Dashboard",
  },
  {
    icons: Layout,
    route: "/resume-template",
    titel: "Template",
  },
  {
    icons: File,
    route: "/my-resume",
    titel: "My Resume",
  },
  {
    icons: BotMessageSquare,
    route: "/genrate-ai",
    titel: "AI Genrated",
  },
  {
    icons: LineChart,
    route: "/ats-checker",
    titel: "ATS Checker",
  },
];

// Resume select domain filed options
export const industries = [
  { label: "Accounting", value: "accounting" },
  { label: "Airlines", value: "airlines" },
  {
    label: "Alternative Dispute Resolution",
    value: "alternative dispute resolution",
  },
  { label: "Alternative Medicine", value: "alternative medicine" },
  { label: "Animation", value: "animation" },
  { label: "Apparel & Fashion", value: "apparel & fashion" },
  { label: "Architecture", value: "architecture" },
  { label: "Arts", value: "arts" },
  { label: "Crafts", value: "crafts" },
  { label: "Automotive", value: "automotive" },
  { label: "Aviation", value: "aviation" },
  { label: "Aerospace", value: "aerospace" },
  { label: "Banking", value: "banking" },
  { label: "Biotechnology", value: "biotechnology" },
  { label: "Broadcast Media", value: "broadcast media" },
  { label: "Building Materials", value: "building materials" },
  {
    label: "Business Supplies & Equipment",
    value: "business supplies & equipment",
  },
  { label: "Capital Markets", value: "capital markets" },
  { label: "Chemicals", value: "chemicals" },
  { label: "Social Organization", value: "social organization" },
  { label: "Civil Engineering", value: "civil engineering" },
  { label: "Network Security", value: "network security" },
  { label: "Games Development", value: "games development" },
  { label: "Hardware Engineering", value: "hardware engineering" },
  { label: "Network Engineering", value: "network engineering" },
  { label: "Software Development", value: "software development" },
  { label: "Construction", value: "construction" },
  { label: "Consumer Electronics", value: "consumer electronics" },
  { label: "Consumer Goods", value: "consumer goods" },
  { label: "Consumer Services", value: "consumer services" },
  { label: "Cosmetics", value: "cosmetics" },
  { label: "Dairy", value: "dairy" },
  { label: "Defense & Space", value: "defense & space" },
  { label: "Design", value: "design" },
  { label: "Education Management", value: "education management" },
  { label: "Electronic Manufacturing", value: "electronic manufacturing" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Environment", value: "environment" },
  { label: "Events", value: "events" },
  { label: "Executive Office", value: "executive office" },
  { label: "Facilities Services", value: "facilities services" },
  { label: "Agricultural", value: "agricultural" },
  { label: "Financial Services", value: "financial services" },
  { label: "Fine Art", value: "fine art" },
  { label: "Harvest", value: "harvest" },
  { label: "Food & Beverages", value: "food & beverages" },
  { label: "Food Production", value: "food production" },
  { label: "Fundraising", value: "fundraising" },
  { label: "Furniture", value: "furniture" },
  { label: "Government Administration", value: "government administration" },
  { label: "Government Relations", value: "government relations" },
  { label: "Graphic Design", value: "graphic design" },
  { label: "Health", value: "health" },
  { label: "Wellness", value: "wellness" },
  { label: "Fitness", value: "fitness" },
  { label: "Education", value: "education" },
  { label: "Health Care", value: "health care" },
  { label: "Hospital", value: "hospital" },
  { label: "Hospitality", value: "hospitality" },
  { label: "Human Resources", value: "human resources" },
  { label: "Import & Export", value: "import & export" },
  { label: "Individual Services", value: "individual services" },
  { label: "Family Services", value: "family services" },
  { label: "Industrial Automation", value: "industrial automation" },
  { label: "Information Services", value: "information services" },
  {
    label: "Information Technology & Services",
    value: "information technology & services",
  },
  { label: "Insurance", value: "insurance" },
  { label: "International Affairs", value: "international affairs" },
  {
    label: "International Trade & Development",
    value: "international trade & development",
  },
  { label: "Internet", value: "internet" },
  { label: "Investment Banking", value: "investment banking" },
  { label: "Investment Management", value: "investment management" },
  { label: "Justice", value: "justice" },
  { label: "Law Enforcement", value: "law enforcement" },
  { label: "Law Practice", value: "law practice" },
  { label: "Legal Services", value: "legal services" },
  { label: "Legislative Office", value: "legislative office" },
  { label: "Travel & Tourism", value: "travel & tourism" },
  { label: "Logistics", value: "logistics" },
  { label: "Supply Chain", value: "supply chain" },
  { label: "Jewelry", value: "jewelry" },
  { label: "Luxury Goods", value: "luxury goods" },
  { label: "Machinery", value: "machinery" },
  { label: "Management Consulting", value: "management consulting" },
  { label: "Market Research", value: "market research" },
  { label: "Marketing", value: "marketing" },
  { label: "Advertising", value: "advertising" },
  { label: "Mechanical", value: "mechanical" },
  { label: "Industrial Engineering", value: "industrial engineering" },
  { label: "Medical Devices", value: "medical devices" },
  { label: "Medical Practice", value: "medical practice" },
  { label: "Mental Health Care", value: "mental health care" },
  { label: "Military", value: "military" },
  { label: "Mining & Metals", value: "mining & metals" },
  { label: "Motion Pictures & Film", value: "motion pictures & film" },
  { label: "Museums", value: "museums" },
  { label: "Institutions", value: "institutions" },
  { label: "Music", value: "music" },
  { label: "Nanotechnology", value: "nanotechnology" },
  { label: "Newspapers", value: "newspapers" },
  {
    label: "Non Profit Organization Management",
    value: "non profit organization management",
  },
  { label: "Oil", value: "oil" },
  { label: "Energy", value: "energy" },
  { label: "Online Media", value: "online media" },
  { label: "Fulfillment", value: "fulfillment" },
  { label: "Freight Delivery", value: "freight delivery" },
  { label: "Packaging & Containers", value: "packaging & containers" },
  { label: "Paper", value: "paper" },
  { label: "Forest", value: "forest" },
  { label: "Pharmaceuticals", value: "pharmaceuticals" },
  { label: "Photography", value: "photography" },
  { label: "Plastics", value: "plastics" },
  { label: "Political Organization", value: "political organization" },
  { label: "Printing", value: "printing" },
  { label: "Professional Training", value: "professional training" },
  { label: "Coaching", value: "coaching" },
  { label: "Program Development", value: "program development" },
  { label: "Public Policy", value: "public policy" },
  { label: "Public Relations", value: "public relations" },
  { label: "Communications", value: "communications" },
  { label: "Public Safety", value: "public safety" },
];
// Resume select experience filed options
export const experience = [
  {
    label: "Internship",
    value: "internship",
  },
  {
    label: "Entry level",
    value: "entry level",
  },
  {
    label: "Associate",
    value: "associate",
  },
  {
    label: "Junior level",
    value: "junior level",
  },
  {
    label: "Mid-Senior level",
    value: "mid senior level",
  },
  {
    label: "Director",
    value: "director",
  },
  {
    label: "Executive",
    value: "executive",
  },
];

export const TopNavoptionLink = [
  {
    title: "CONTACT",
    href: "/contact",
  },
  {
    title: "EXPERIENCE",
    href: "/experience",
  },
  {
    title: "PROJECT",
    href: "/project",
  },
  {
    title: "EDUCATION",
    href: "/education",
  },
  {
    title: "CERTIFICATIONS",
    href: "/certipications",
  },
  {
    title: "COURSE",
    href: "/coures",
  },
  {
    title: "DESIGNATION",
    href: "/designation",
  },
  {
    title: "SKILLS",
    href: "/skills",
  },
  {
    title: "Description",
    href: "/description",
  },
  {
    title: "PREVIEW",
    href: "/preview",
  },
];

export const MAX_FREE_COUNT = 5;
