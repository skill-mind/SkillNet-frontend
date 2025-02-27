"use client";

import React, { useState } from 'react';

interface ExamData {
  title: string;
  description: string;
  date: string;
  duration: string;
  registeredCandidates: string;
  certification: string;
  passingScore: string;
  format: string;
  topics: string[];
  reasons: string[];
}

interface ExamDetailsModalProps {
  buttonStyle: React.CSSProperties;
  examData: ExamData;
}

const ExamDetailsModal: React.FC<ExamDetailsModalProps> = ({ buttonStyle, examData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const styles = {
    modalOverlay: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modalContent: {
      width: '90%',
      maxWidth: '900px',
      maxHeight: '90vh',
      overflowY: 'auto' as const,
      backgroundColor: '#161716',
      borderRadius: '8px',
      padding: '30px',
      position: 'relative' as const,
    },
    closeButton: {
      position: 'absolute' as const,
      top: '15px',
      right: '15px',
      background: 'none',
      border: 'none',
      color: '#fff',
      fontSize: '24px',
      cursor: 'pointer',
    },
    examTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
      fontFamily: '"Ubuntu Sans", "Helvetica Neue", sans-serif',
    },
    examDescription: {
      lineHeight: '1.6',
      fontSize: '16px',
      fontFamily: '"Ubuntu Sans", "Helvetica Neue", sans-serif',
      color: 'rgba(255, 255, 255, 0.8)',
      marginBottom: '20px',
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
    <>
      <button style={buttonStyle} onClick={openModal}>
        VIEW DETAILS
      </button>

      {isOpen && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={closeModal}>×</button>
            
            <h1 style={styles.examTitle}>{examData.title}</h1>
            
            <p style={styles.examDescription}>{examData.description}</p>
            
            <div style={styles.divider}></div>
            
            <div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>DATE:</div>
                <div style={styles.detailValue}>{examData.date}</div>
              </div>
              
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>DURATION:</div>
                <div style={styles.detailValue}>{examData.duration}</div>
              </div>
              
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>REGISTERED CANDIDATES:</div>
                <div style={styles.detailValue}>{examData.registeredCandidates}</div>
              </div>
              
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>CERTIFICATION:</div>
                <div style={styles.detailValue}>{examData.certification}</div>
              </div>
              
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>PASSING SCORE:</div>
                <div style={styles.detailValue}>{examData.passingScore}</div>
              </div>
              
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>FORMAT:</div>
                <div style={styles.detailValue}>{examData.format}</div>
              </div>
            </div>
            
            <div style={styles.divider}></div>
            
            <h2 style={styles.sectionTitle}>TOPICS COVERED:</h2>
            <ul style={styles.topicsList}>
              {examData.topics.map((topic, index) => (
                <li key={index} style={styles.topicItem}>
                  <div style={styles.bullet}></div>
                  {topic}
                </li>
              ))}
            </ul>
            
            <h2 style={styles.sectionTitle}>WHY TAKE THIS EXAM?</h2>
            <ul style={styles.topicsList}>
              {examData.reasons.map((reason, index) => (
                <li key={index} style={styles.topicItem}>
                  <div style={styles.bullet}></div>
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ExamDetailsModal; 