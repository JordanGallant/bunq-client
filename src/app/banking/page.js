'use client';

import { useState } from 'react';
import SimpleCameraCapture from '../components/camera';

export default function BankingMockup() {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <div className="min-h-screen bg-[#222] flex justify-center items-center p-4">
      <style jsx global>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .phone {
            width: 360px;
            height: 780px;
            background: #000;
            border-radius: 40px;
            overflow: hidden;
            position: relative;
            color: white;
        }

        .status-bar {
            height: 24px;
            padding: 0 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            background: rgba(0, 0, 0, 0.9);
        }

        .status-bar-icons {
            display: flex;
            gap: 4px;
        }

        .header {
            padding: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .profile-pic {
            width: 40px;
            height: 40px;
            background: #333;
            border-radius: 50%;
        }

        .header-center {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: bold;
        }

        .notification-badge {
            position: relative;
        }

        .badge {
            position: absolute;
            top: -4px;
            right: -4px;
            background: red;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            font-size: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .header-right {
            display: flex;
            gap: 12px;
        }

        .awaiting-events {
            padding: 16px;
        }

        .verify-box {
            background: #333;
            border-radius: 12px;
            padding: 16px;
            margin-top: 8px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .verify-icon {
            width: 40px;
            height: 40px;
            background: #8855ff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .account {
            padding: 16px;
        }

        .account-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        }

        .cards {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .card {
            padding: 16px;
            border-radius: 12px;
            min-height: 100px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .card.purple {
            background: #8855ff;
            grid-column: 1 / -1;
        }

        .card.dark {
            background: #333;
        }

        .card-amount {
            font-size: 24px;
            font-weight: bold;
        }

        .verification {
            color: #ff8833;
        }

        .action-buttons {
            padding: 24px 16px;
            display: flex;
            justify-content: center;
            gap: 32px;
        }

        .action-button {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
        }

        .circle-button {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .orange { background: #ff8833; }
        .blue { background: #3388ff; }
        .purple { background: #8855ff; }

        .info-banner {
            margin: 16px;
            background: #ff8833;
            padding: 16px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .nav-bar {
            position: absolute;
            bottom: 0;
            width: 100%;
            padding: 8px 16px 32px;
            background: #111;
            display: flex;
            justify-content: space-between;
        }

        .nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 12px;
            gap: 4px;
            color: #666;
        }

        .nav-item.active {
            color: #3388ff;
        }

        .beta-tag {
            font-size: 10px;
            opacity: 0.5;
        }
      `}</style>

      {showCamera ? (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button 
            onClick={() => setShowCamera(false)}
            className="absolute top-4 right-4 text-white text-xl"
          >
            ✕
          </button>
          <SimpleCameraCapture />
        </div>
      ) : (
        <div className="phone">
          <div className="status-bar">
            <span>00:21</span>
            <div className="status-bar-icons">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
              </svg>
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
              </svg>
            </div>
          </div>

          <div className="header">
            <div className="profile-pic"></div>
            <div className="header-center">
              <div className="notification-badge">
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
                </svg>
                <span className="badge">1</span>
              </div>
              Home
            </div>
            <div className="header-right">
              <svg 
                width="24" 
                height="24" 
                fill="white" 
                viewBox="0 0 24 24"
                style={{ cursor: 'pointer' }}
                onClick={() => setShowCamera(true)}
              >
                <path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                <path d="M12 17c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3z"/>
              </svg>
              <div className="profile-pic" style={{background: '#8855ff'}}>
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="awaiting-events">
            <h2>Awaiting Events</h2>
            <div className="verify-box">
              <div className="verify-icon">
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <span>Verify your identity</span>
            </div>
          </div>

          <div className="account">
            <div className="account-header">
              <h2>Cao Minh Nguyen</h2>
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </div>
            <div className="cards">
              <div className="card purple">
                <div>
                  <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                    <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  </svg>
                  Total Balance
                </div>
                <div className="card-amount">€ 0.00</div>
              </div>
              <div className="card dark">
                <div>
                  <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                  </svg>
                  Main
                </div>
                <div className="card-amount">€ 0.00</div>
              </div>
              <div className="card dark">
                <div>
                  <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                    <path d="M15.5 11.5c2.5-2.5 4.55-5.54 5.51-8.03-.97.23-4.01.91-8.03 5.51-1.95-1.95-3.76-5.12-4.86-7.64-2.88 5.2-8.41 9.61-8.12 15.43.4 8.13 7.52 9.23 9.92 9.23 2.21 0 4.15-.83 5.66-2.34 1.51-1.51 2.34-3.45 2.34-5.66-.01-2.4-1.1-4.51-2.42-6.5zm-3 13c-2.99 0-5.42-2.43-5.42-5.42 0-1.79.87-3.37 2.21-4.37.67 1.37 1.52 2.71 2.54 3.73 1.02 1.02 2.36 1.88 3.73 2.54-1 1.35-2.59 2.52-4.38 2.52z"/>
                  </svg>
                  Savings Acc...
                </div>
                <div className="card-amount">€ 0.00</div>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <div className="action-button">
              <div className="circle-button orange">
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
                </svg>
              </div>
              <span>Pay</span>
            </div>
            <div className="action-button">
              <div className="circle-button blue">
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/>
                </svg>
              </div>
              <span>Request</span>
            </div>
            <div className="action-button">
              <div className="circle-button purple">
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </div>
              <span>Add</span>
            </div>
          </div>

          <div className="info-banner">
            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
            </svg>
            <span>Enjoy bunq demo and finish signing up for the full experience!</span>
          </div>

          <div className="nav-bar">
            <div className="nav-item active">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              <span>Home</span>
            </div>
            <div className="nav-item">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
              <span>Travel</span>
            </div>
            <div className="nav-item">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"/>
              </svg>
              <span>Budgeting</span>
            </div>
            <div className="nav-item">
              <div className="beta-tag">BETA</div>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
              </svg>
              <span>Stocks</span>
            </div>
            <div className="nav-item">
              <div className="beta-tag">BETA</div>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontWeight="bold">₿</text>
              </svg>
              <span>Crypto</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
