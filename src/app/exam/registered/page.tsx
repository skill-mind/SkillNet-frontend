import React from 'react';
import Image from 'next/image';
import Arrow from '@/public/arrow-left.svg';
import Vector from '@/public/Vector.svg';
import Header from '@/public/registered.svg';
import ExamDetailsModal from '@/app/exam/registered/ExamDetailsModal';

const Page = () => {
  const styles = {
    pageContainer: {
      backgroundColor: '#121212',
      color: '#fff',
      fontFamily: '"Ubuntu Sans", "Helvetica Neue", sans-serif',
      padding: '0',
      minHeight: '100vh',
    },
    header: {
      width: '100%',
      height: '250px',
      position: 'relative' as const,
      backgroundColor: '#2a4d69',
      backgroundImage: `url(${Header.src})`,
      backgroundSize: '150%',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'flex-end',
      paddingLeft: '20px',
      paddingBottom: '20px',
    },
    headerTitle: {
      fontSize: '40px',
      fontFamily: '"Ubuntu Sans", "Helvetica Neue", sans-serif',
      color: 'rgba(255, 255, 255, 0.8)',
    },
    backButton: {
      background: 'none',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '16px',
      margin: '20px',
      marginTop: '60px',
      marginBottom: '60px',
      display: 'flex',
      alignItems: 'center',
      fontFamily: '"Ubuntu Sans", "Helvetica Neue", sans-serif',
    },
    backIcon: {
      marginRight: '8px',
      width: '20px',
      height: '20px',
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
      },
    chatboxButton: {
      background: 'none',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
      fontFamily: '"Ubuntu Sans", "Helvetica Neue", sans-serif',
    },
    chatboxIcon: {
      marginLeft: '8px',
      width: '20px',
      height: '20px',
    },
    contentContainer: {
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'center',
    },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      maxWidth: '1200px',
      gap: '20px',
    },
    examCard: {
      backgroundColor: '#161716',
      borderRadius: '8px',
      padding: '20px',
      flex: '1',
      maxWidth: 'calc(50% - 10px)',
    },
    examTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '15px',
      fontFamily: '"Ubuntu Sans", "Helvetica Neue", sans-serif',
    },
    examDescription: {
      marginBottom: '20px',
      lineHeight: '1.5',
      fontSize: '16px',
      fontFamily: '"Ubuntu Sans", "Helvetica Neue", sans-serif',
    },
    examDetails: {
      borderTop: '1px solid #252625',
      paddingTop: '15px',
      marginTop: '15px',
    },
    detailItem: {
      display: 'flex',
      marginBottom: '10px',
    },
    detailLabel: {
      color: '#999',
      marginRight: '10px',
      fontSize: '16px',
      fontFamily: '"Ubuntu Sans", "Helvetica Neue", sans-serif',
    },
    detailValue: {
      fontSize: '16px',
      fontFamily: '"Ubuntu Sans", "Helvetica Neue", sans-serif',
      color: 'rgba(255, 255, 255, 0.8)',
    },
    detailsButton: {
      backgroundColor: 'transparent',
      border: '2px solid #D0EFB1',
      borderRadius: '6px',
      color: '#fff',
      cursor: 'pointer',
      padding: '10px 20px',
      width: '100%',
      marginTop: '20px',
      fontSize: '16px',
      fontFamily: '"Ubuntu Sans", "Helvetica Neue", sans-serif',
    },
    buttonDivider: {
      borderTop: '1px solid #252625',
      marginTop: '20px',
      paddingTop: '20px',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Registered exam</h1>
      </div>
      
      <div style={styles.buttonsContainer}>
        <button style={styles.backButton}>
          <Image 
            src={Arrow} 
            alt="Back" 
            width={20}
            height={20}
            style={{ marginRight: '8px' }}
          />
          Back
        </button>
        <button style={styles.chatboxButton}>
          Chatbox
          <Image 
            src={Vector} 
            alt="Chat" 
            width={12}
            height={12}
            style={{ marginLeft: '8px' }}
          />
        </button>
      </div>

      <div style={styles.contentContainer}>
        <div style={styles.content}>
          <div style={styles.examCard}>
            <h2 style={styles.examTitle}>WEB3 FUNDAMENTALS CERTIFICATION EXAM</h2>
            <p style={styles.examDescription}>
              The Web3 Test Exam is a blockchain-powered assessment designed to evaluate a candidate&apos;s understanding of decentralized technologies, smart contracts, and blockchain security. This exam is hosted on SkillNet, ensuring that all results are securely stored on-chain for authenticity and tamper-proof verification.
            </p>
            <div style={styles.examDetails}>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>DATE:</span>
                <span style={styles.detailValue}>29th Feb, 2025</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>DURATION:</span>
                <span style={styles.detailValue}>1hr</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>REGISTERED CANDIDATES:</span>
                <span style={styles.detailValue}>120</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>CERTIFICATION:</span>
                <span style={styles.detailValue}>Yes on completion</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>PASSING SCORE:</span>
                <span style={styles.detailValue}>75%</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>FORMAT:</span>
                <span style={styles.detailValue}>Multichoice</span>
              </div>
            </div>
            <div style={styles.buttonDivider}></div>
            <ExamDetailsModal 
              buttonStyle={styles.detailsButton}
              examData={{
                title: "WEB3 FUNDAMENTALS CERTIFICATION EXAM",
                description: "The Web3 Test Exam is a blockchain-powered assessment designed to evaluate a candidate&apos;s understanding of decentralized technologies, smart contracts, and blockchain security. This exam is hosted on SkillNet, ensuring that all results are securely stored on-chain for authenticity and tamper-proof verification.",
                date: "29th Feb, 2025",
                duration: "1hr",
                registeredCandidates: "120",
                certification: "Yes on completion",
                passingScore: "75%",
                format: "Multichoice",
                topics: [
                  "Blockchain Basics (Consensus mechanisms, Layer 1 vs. Layer 2, decentralization)",
                  "Smart Contracts (Solidity fundamentals, contract security, gas optimization)",
                  "DeFi & NFTs (Decentralized finance protocols, NFT standards, use cases)"
                ],
                reasons: [
                  "Enhance Your Web3 Credentials With A Blockchain-Verified Certificate",
                  "Prove Your Skills To Potential Employers And Blockchain Projects",
                  "Gain Credibility In The Decentralized Space With Verifiable Results"
                ]
              }}
            />
          </div>
          
          <div style={styles.examCard}>
            <h2 style={styles.examTitle}>WEB3 FUNDAMENTALS CERTIFICATION EXAM</h2>
            <p style={styles.examDescription}>
              The Web3 Test Exam is a blockchain-powered assessment designed to evaluate a candidate&apos;s understanding of decentralized technologies, smart contracts, and blockchain security. This exam is hosted on SkillNet, ensuring that all results are securely stored on-chain for authenticity and tamper-proof verification.
            </p>
            <div style={styles.examDetails}>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>DATE:</span>
                <span style={styles.detailValue}>29th Feb, 2025</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>DURATION:</span>
                <span style={styles.detailValue}>1hr</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>REGISTERED CANDIDATES:</span>
                <span style={styles.detailValue}>120</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>CERTIFICATION:</span>
                <span style={styles.detailValue}>Yes on completion</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>PASSING SCORE:</span>
                <span style={styles.detailValue}>75%</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>FORMAT:</span>
                <span style={styles.detailValue}>Multichoice</span>
              </div>
            </div>
            <div style={styles.buttonDivider}></div>
            <ExamDetailsModal 
              buttonStyle={styles.detailsButton}
              examData={{
                title: "WEB3 FUNDAMENTALS CERTIFICATION EXAM",
                description: "The Web3 Test Exam is a blockchain-powered assessment designed to evaluate a candidate&apos;s understanding of decentralized technologies, smart contracts, and blockchain security. This exam is hosted on SkillNet, ensuring that all results are securely stored on-chain for authenticity and tamper-proof verification.",
                date: "29th Feb, 2025",
                duration: "1hr",
                registeredCandidates: "120",
                certification: "Yes on completion",
                passingScore: "75%",
                format: "Multichoice",
                topics: [
                  "Blockchain Basics (Consensus mechanisms, Layer 1 vs. Layer 2, decentralization)",
                  "Smart Contracts (Solidity fundamentals, contract security, gas optimization)",
                  "DeFi & NFTs (Decentralized finance protocols, NFT standards, use cases)"
                ],
                reasons: [
                  "Enhance Your Web3 Credentials With A Blockchain-Verified Certificate",
                  "Prove Your Skills To Potential Employers And Blockchain Projects",
                  "Gain Credibility In The Decentralized Space With Verifiable Results"
                ]
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
