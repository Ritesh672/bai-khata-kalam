import registration from '../assets/images/registration.jpeg';
import nashaMukt from '../assets/images/nashamukt.jpeg';
import integrityPledge from '../assets/images/pledge.jpeg';
import childMarriage from '../assets/images/childmarriage.jpeg';
import tbMukt from '../assets/images/tbmukt_pledge_certificate.jpeg';
import { org } from './org';

// Legal documents: what makes the NGO a registered, accountable organisation.
export const legalDocuments = [
  {
    title: 'Society Registration',
    idLabel: 'Registration No.',
    idValue: org.registrationNo,
    issuer: 'Registrar of Societies, Govt. of Tripura',
    text: `Registered under the Societies Registration Act, 1860 on ${org.registeredOn}.`,
    image: registration,
    href: registration,
    tone: 'blue',
    icon: 'landmark',
  },
  {
    title: 'Income Tax 12A (Provisional)',
    idLabel: 'Unique Registration No.',
    idValue: org.twelveAUrn,
    issuer: 'Income Tax Department, Govt. of India',
    text: 'Form 10AC dated 12 July 2025, valid for AY 2026-27 to 2028-29.',
    href: org.twelveAPdf,
    tone: 'green',
    icon: 'file',
  },
  {
    title: 'NGO Darpan',
    idLabel: 'Darpan ID',
    idValue: org.darpanId,
    issuer: 'NITI Aayog, Govt. of India',
    text: 'Listed on the Government of India’s official portal for voluntary organisations.',
    href: 'https://ngodarpan.gov.in/',
    tone: 'orange',
    icon: 'badge',
  },
];

// Pledges taken through Government of India campaigns.
export const pledges = [
  { title: 'Nasha Mukt Bharat', text: 'Took the Nasha Mukti pledge for a drug-free India, July 2025.', image: nashaMukt },
  { title: 'Child-Marriage-Free India', text: 'Pledged to help end child marriage and protect child rights, July 2025.', image: childMarriage },
  { title: 'TB Mukt Bharat', text: 'Pledged support to the national TB elimination programme.', image: tbMukt },
  { title: 'Integrity Pledge', text: 'The Central Vigilance Commission’s pledge for organisations, July 2025.', image: integrityPledge },
];
