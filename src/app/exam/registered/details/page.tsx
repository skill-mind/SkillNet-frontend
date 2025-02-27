import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Arrow from '@/public/arrow-left.svg';
import Vector from '@/public/Vector.svg';
import Header from '@/public/registered.svg';

const ExamDetailsPage = () => {
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
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
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
    contentContainer: {
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'center',
    },
    content: {
      width: '100%',
      maxWidth: '900px',
      backgroundColor: '#161716',
      borderRadius: '8px',
      padding: '30px',
      marginBottom: '40px',
    },
    examTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      fontFamily: '"Ubuntu Sans", "Helvetica Neue", sans-serif',
    },
    examDescription: {
      lineHeight: '1.6',
      fontSize: '16px',
      fontFamily: '"Ubuntu Sans", "Helvetica Neue", sans-serif',
      color: 'rgba(255, 255, 255, 0.8)',
      marginBottom: '30px',
    },
    divider: {
      borderTop: '1px solid #252625',
      margin: '30px 0',
    },
    detailItem: {
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
    },
    detailLabel: {
      color: '#999',
      fontSize: '14px',
      fontFamily: '"Ubuntu Sans", "Helvetica Neue", sans-serif',
      marginRight: '8px',
    },
    detailValue: {
      fontSize: '16px',
      fontFamily: '"Ubuntu Sans", "Helvetica Neue", sans-serif',
      color: 'rgba(255, 255, 255, 0.9)',
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '15px',
      marginTop: '30px',
      fontFamily: '"Ubuntu Sans", "Helvetica Neue", sans-serif',
      color: '#999',
    },
    topicsList: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
    },
    topicItem: {
      marginBottom: '15px',
      paddingLeft: '20px',
      position: 'relative' as const,
      lineHeight: '1.5',
    },
    bullet: {
      position: 'absolute' as const,
      left: '0',
      top: '8px',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      backgroundColor: '#fff',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Registered Exam</h1>
      </div>
      
      <div style={styles.buttonsContainer}>
        <Link href="/exam/registered" passHref>
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
        </Link>
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
          <h1 style={styles.examTitle}>WEB3 FUNDAMENTALS CERTIFICATION EXAM</h1>
          
          <p style={styles.examDescription}>
            The Web3 Test Exam is a blockchain-powered assessment designed to evaluate a candidate&apos;s understanding of decentralized technologies, smart contracts, and blockchain security. This exam is hosted on SkillNet, ensuring that all results are securely stored on-chain for authenticity and tamper-proof verification.
          </p>
          
          <div style={styles.divider}></div>
          
          <div>
            <div style={styles.detailItem}>
              <div style={styles.detailLabel}>DATE:</div>
              <div style={styles.detailValue}>29th Feb, 2025</div>
            </div>
            
            <div style={styles.detailItem}>
              <div style={styles.detailLabel}>DURATION:</div>
              <div style={styles.detailValue}>1hr</div>
            </div>
            
            <div style={styles.detailItem}>
              <div style={styles.detailLabel}>REGISTERED CANDIDATES:</div>
              <div style={styles.detailValue}>120</div>
            </div>
            
            <div style={styles.detailItem}>
              <div style={styles.detailLabel}>CERTIFICATION:</div>
              <div style={styles.detailValue}>Yes on completion</div>
            </div>
            
            <div style={styles.detailItem}>
              <div style={styles.detailLabel}>PASSING SCORE:</div>
              <div style={styles.detailValue}>75%</div>
            </div>
            
            <div style={styles.detailItem}>
              <div style={styles.detailLabel}>FORMAT:</div>
              <div style={styles.detailValue}>Multichoice</div>
            </div>
          </div>
          
          <div style={styles.divider}></div>
          
          <h2 style={styles.sectionTitle}>TOPICS COVERED:</h2>
          <ul style={styles.topicsList}>
            <li style={styles.topicItem}>
              <div style={styles.bullet}></div>
              Blockchain Basics (Consensus mechanisms, Layer 1 vs. Layer 2, decentralization)
            </li>
            <li style={styles.topicItem}>
              <div style={styles.bullet}></div>
              Smart Contracts (Solidity fundamentals, contract security, gas optimization)
            </li>
            <li style={styles.topicItem}>
              <div style={styles.bullet}></div>
              DeFi & NFTs (Decentralized finance protocols, NFT standards, use cases)
            </li>
          </ul>
          
          <div style={styles.divider}></div>

          <h2 style={styles.sectionTitle}>WHY TAKE THIS EXAM?</h2>
          <ul style={styles.topicsList}>
            <li style={styles.topicItem}>
              <div style={styles.bullet}></div>
              Enhance Your Web3 Credentials With A Blockchain-Verified Certificate
            </li>
            <li style={styles.topicItem}>
              <div style={styles.bullet}></div>
              Prove Your Skills To Potential Employers And Blockchain Projects
            </li>
            <li style={styles.topicItem}>
              <div style={styles.bullet}></div>
              Gain Credibility In The Decentralized Space With Verifiable Results
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExamDetailsPage; 