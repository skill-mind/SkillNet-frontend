import { ExamNavLinkProps, ExamProps } from '@/interfaces/exam.interface';

export const examMockData: ExamProps[] = [
  {
    title: 'WEB3 FUNDAMENTALS CERTIFICATION EXAM',
    description:
      "The Web3 Test Exam is a blockchain-powered assessment designed to evaluate a candidate's understanding of decentralized technologies, smart contracts, and blockchain security. This exam is hosted on StarkNet, ensuring that all results are securely stored on-chain for authenticity and tamper-proof verification.",
    date: '26th Feb, 2025',
    duration: '2h',
    registered: 110,
    certification: 'Yes on completion',
    format: 'Multiple choice',
    topics: [
      'Blockchain Basics (consensus mechanisms, Layer 1 vs. Layer 2, decentralization)',
      'Smart Contracts (solidity fundamentals, contract security, gas optimization)',
      'DeFi & NFTs (decentralized finance protocols, NFT standards, use cases)',
    ],
    advantages: [
      'Enhance Your Web3 Credentials With A Blockchain-Verified Certificate',
      'Prove Your Skills To Potential Employers And Blockchain Projects',
      'Gain Credibility In The Decentralized Space With Verifiable Results',
    ],
  },
  {
    title: 'WEB3 FUNDAMENTALS CERTIFICATION EXAM',
    description:
      "The Web3 Test Exam is a blockchain-powered assessment designed to evaluate a candidate's understanding of decentralized technologies, smart contracts, and blockchain security. This exam is hosted on StarkNet, ensuring that all results are securely stored on-chain for authenticity and tamper-proof verification.",
    date: '26th Feb, 2025',
    duration: '2h',
    registered: 110,
    certification: 'Yes on completion',
    format: 'Multiple choice',
    topics: [
      'Blockchain Basics (consensus mechanisms, Layer 1 vs. Layer 2, decentralization)',
      'Smart Contracts (solidity fundamentals, contract security, gas optimization)',
      'DeFi & NFTs (decentralized finance protocols, NFT standards, use cases)',
    ],
    advantages: [
      'Enhance Your Web3 Credentials With A Blockchain-Verified Certificate',
      'Prove Your Skills To Potential Employers And Blockchain Projects',
      'Gain Credibility In The Decentralized Space With Verifiable Results',
    ],
  },
];

export const examCategories = [
  'JavaScript',
  'Data Science',
  'AI Development',
  'Frontend',
  'Cairo',
  'Solidity',
  'NextJS',
  'Blockchain',
  'Web3',
  'StarkNet',
  'Ethereum',
  'Polygon',
  'Arbitrum',
  'Optimism',
];

export const navLinks: ExamNavLinkProps[] = [
  { href: '/exam/feed', label: 'Exams' },
  { href: '/exam/registered', label: 'Registered' },
  { href: '/exam/results', label: 'Results' },
];
