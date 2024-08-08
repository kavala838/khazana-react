// src/components/About.js
import React from 'react';
import { useNavigate } from 'react-router-dom'
import './About.css';
import { FaPiggyBank, FaHeadset, FaUserCheck, FaUserPlus, FaFingerprint, FaFileInvoiceDollar, FaExchangeAlt, FaMobileAlt, FaMoneyCheckAlt, FaRocket} from 'react-icons/fa';

const About = ({isAuthenticated}) => {
  const navigate = useNavigate();
  const handleLoginRedirect = () => {
    navigate('/login');
  };
   return ( <>
    <div className='item-1 about-page-container-item'>
      <h1 className='about-1-header'><span className='about-1-header-highlight'>Khazana Pay</span> Secure and Seamless
      Finacial Transactions</h1>
      <p className='about-1-para'>As a prominent B2B company, we are proud to offer comprehensive solutions in the areas of money transfer, AEPS (Aadhaar Enabled Payment System), BBPS (Bharat Bill Payment System), and DMT (Domestic Money Transfer).
      </p>
      {!isAuthenticated && <button onClick={handleLoginRedirect}>Sign in</button>}
    </div>
    <div className='item-2 about-page-container-item-not-all'>
      <div className='item-2-item'>
        <div className='item-2-icon'><FaPiggyBank/></div>
        <div className='item-2-head'>Minimum Investment</div>
        <div className='item-2-para'>We offers all the services with a minimum investment and with a secure platform.</div>
      </div>
      <div className='item-2-item'>
        <div className='item-2-icon'><FaHeadset/></div>
        <div className='item-2-head'>24/7 Support</div>
        <div className='item-2-para'>No matter what day or time is?, We will try to provide our best support.</div>
      </div>
      <div className='item-2-item'>
        <div className='item-2-icon'><FaUserCheck/></div>
        <div className='item-2-head'>Trusted Users</div>
        <div className='item-2-para'>We offers 60+ services to our agents to serve best way possible to their customer.</div>
      </div>
      <div className='item-2-item'>
        <div className='item-2-icon'><FaUserPlus/></div>
        <div className='item-2-head'>Join With Us</div>
        <div className='item-2-para'>If you need try to connect us, I will be so pleased if you join us or with us .</div>
      </div>
    </div>
    <div className="about-page-container-item item-3">
      <h1 className='item-3-header'>Smart solutions for your payment</h1>
      <ul>
        <li>Welcome to KhazanaPay, the leading provider of secure and seamless financial transaction solution</li>
        <li>We are revolutionizing the way individuals and businesses conduct their financial transactions.With our cutting-edge technology and robust infrastructure.</li>
        <li>Our team of experienced professionals is dedicated to creating a reliable and user-friendly platform that meets the evolving needs of our customers.</li>
        <li>KhazanaPay is a leading B2B service provider with a passion for empowering businesses across various industries.</li>
        <li>With years of experience and a team of seasoned professionals, we have established ourselves as a reliable partner for companies seeking tailored solutions to enhance their operations and drive growth.</li>
        <li>Our mission is to revolutionize B2B services by offering comprehensive and customized solutions that enable our clients to gain a competitive edge.
</li>
      </ul>
    </div>
    <div className='item-4 about-page-container-item'>
      <div className='item-4-item'>
        <div className='item-4-icon'><FaFingerprint/></div>
        <div className='item-4-head'>Aeps(Aadhar Enable Payment System)</div>
        <div className='item-4-para'>Aadhaar Enabled Payment System (AEPS) is a payment service that allows a bank customer to use Aadhaar as his/her identity to access his/her Aadhaar enabled bank account and perform basic banking transactions .</div>
      </div>
      <div className='item-4-item'>
        <div className='item-4-icon'><FaFileInvoiceDollar/></div>
        <div className='item-4-head'>BBPS (Bharat Bill Payment System)t</div>
        <div className='item-4-para'>Bharat Bill Payment System (BBPS) is an online bill payment system. National Payments Corporation of India (NPCI) functioning as a sanctioned Bharat Bill Payment Central Unit (BBPCU) is responsible for setting standards.</div>
      </div>
      <div className='item-4-item'>
        <div className='item-4-icon'><FaExchangeAlt/></div>
        <div className='item-4-head'>DMT (Domestic Money Transfer)</div>
        <div className='item-4-para'>Domestic Money Transfer Service enables customers to transfer money to any bank account all around India anytime instantly with reliability and convenience.Domestic Money Transfers allow you to send funds across bank accounts in India.</div>
      </div>
      <div className='item-4-item'>
        <div className='item-4-icon'><FaMobileAlt/></div>
        <div className='item-4-head'>Mobile Prepaid Recharge</div>
        <div className='item-4-para'>At KhazanaPay, we understand that efficient travel
                            management is
                            crucial for businesses of all sizes. Our comprehensive travel booking services travel
                            experiences, allowing you to focus on your core business objectives.</div>
      </div>
      <div className='item-4-item'>
        <div className='item-4-icon'><FaMoneyCheckAlt/></div>
        <div className='item-4-head'>Payout</div>
        <div className='item-4-para'>B2B recharge service refers to a business-to-business service that allows businesses to recharge or top-up the prepaid accounts of their customers or employees. This service is commonly used by businesses in industries such as banking.</div>
      </div>
      <div className='item-4-item'>
        <div className='item-4-icon'><FaRocket/></div>
        <div className='item-4-head'>Quick Transfer</div>
        <div className='item-4-para'>As part of our comprehensive B2B services, KhazanaPay offers assistance with PAN (Permanent Account Number) card application and related services. We understand the importance of PAN cards for businesses and individuals in India.</div>
      </div>
    </div>
    </>
);
}
export default About;
