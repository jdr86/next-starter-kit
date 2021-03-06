import React from 'react';

export default () => (
    <style>{`
       .links > h1, .links > p {
          text-align: center;
        }
        .links > h1 a, .links > p a {
          text-decoration: none;
          color: #000000;
          font-weight: bold;
        }

        .quick-link-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .quick-link-container .quick-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 200px;
          height: 200px;
          margin: 15px;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          background-color: #eeeeee;
          box-shadow: 0 0 10px rgba(38, 38, 38, 0.3);
        }
        .quick-link-container .quick-link:after {
          content: "";
          position: absolute;
          display: block;
          bottom: 0;
          height: 100%;
          width: 100%;
          background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 20%, transparent);
        }
        .quick-link-container .quick-link a {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: #ffffff;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 1.5rem;
          z-index: 2;
        }
        .quick-link-container .quick-link a:before {
          content: '#cwc19';
          display: block;
          font-size: 0.9rem;
        }
        .quick-link-container .quick-link .background {
          position: absolute;
          width: 300px;
          height: 300px;
          z-index: 1;
          top: -5%;
          right: -5%;
          border-radius: 50%;
          box-shadow: 3px -7px 28px 0 rgba(38, 38, 38, 0.3);
          transition: all 0.2s ease-out;
        }
        .quick-link-container .quick-link .background:before, .quick-link-container .quick-link .background:after {
          content: '';
          position: absolute;
          border-radius: 50%;
          box-shadow: 3px -7px 28px 0 rgba(38, 38, 38, 0.3);
        }
        .quick-link-container .quick-link .background:before {
          width: 250px;
          height: 250px;
          left: -5%;
          top: 25%;
        }
        .quick-link-container .quick-link .background:after {
          width: 100px;
          height: 100px;
          left: 20%;
          top: 50%;
          background-color: #232882;
        }
        .quick-link-container .quick-link:hover .background {
          top: -15%;
          right: -15%;
        }
        .quick-link-container .quick-link:nth-child(1) {
          background-color: #42baff;
        }
        .quick-link-container .quick-link:nth-child(2) {
          background-color: #aa25de;
        }
        .quick-link-container .quick-link:nth-child(3) {
          background-color: #ff1f51;
        }
        .quick-link-container .quick-link:nth-child(4) {
          background-color: #ffe500;
        }
        .quick-link-container .quick-link:nth-child(5) {
          background-color: #00c36e;
        }
        .quick-link-container .quick-link:nth-child(6) {
          background-color: #f50;
        }

    `}</style>
)