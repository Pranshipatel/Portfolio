import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa'; // Icon for error

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#ffedec', // Lighter red background for a softer look
            color: '#d9534f', // Red color for error
            padding: '40px',
            borderRadius: '10px',
            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            fontSize: '24px',
            maxWidth: '600px',
            margin: '0 auto',
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <FaExclamationTriangle
              size={50}
              style={{ color: '#d9534f', marginBottom: '20px' }}
            />
            <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>Oops! Something went wrong.</h2>
            <p style={{ fontSize: '18px', marginBottom: '20px' }}>
              We encountered an unexpected error, but don't worry! We're on it.
            </p>
            <p style={{ fontSize: '16px', marginBottom: '20px' }}>
              Please try again later or contact support if the problem persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '12px 24px',
                backgroundColor: '#d9534f',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                transition: '0.3s',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#c9302c'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#d9534f'}
            >
              Retry
            </button>
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
