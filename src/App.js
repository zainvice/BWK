import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RequestRecieved from "./pages/RequestRecieved";
import CustomerSupportPage from "./pages/CustomerSupportPage";
import CustomerLiveScorePage from "./pages/CustomerLiveScorePage";
import CustomerSUBPage from "./pages/CustomerSUBPage";
import AdminCSPage from "./pages/AdminCSPage";
import AdminReportsPage from "./pages/AdminReportsPage";
import AdminBettingTipsPage from "./pages/AdminBettingTipsPage";
import AdminContentMngPage from "./pages/AdminContentMngPage";
import AdminSubMngPage from "./pages/AdminSubMngPage";
import AdminUsrMngPage from "./pages/AdminUsrMngPage";
import ContactUs from "./pages/ContactUs";
import LiveScore from "./pages/LiveScore";
import WebBetting from "./pages/WebBetting";
import SMSBetting from "./pages/SMSBetting";
import AdminHomePage from "./pages/AdminHomePage";
import CustomerHomePage from "./pages/CustomerHomePage";
import Subscriptions from "./pages/Subscriptions";
import ConfirmPhone from "./pages/ConfirmPhone";
import CustContactPhone from "./pages/CustContactPhone";
import CustLivescorePhone from "./pages/CustLivescorePhone";
import CustSubcriptionPhone from "./pages/CustSubcriptionPhone";
import CustRequestRecieved from "./pages/CustRequestRecieved";
import CustomerHomePhone from "./pages/CustomerHomePhone";
import SuccesfullyRegistered from "./pages/SuccesfullyRegistered";
import ForgotPassword from "./pages/ForgotPassword";
import SignupPhone from "./pages/SignupPhone";
import LoginPhone from "./pages/LoginPhone";
import ContactPhone from "./pages/ContactPhone";
import LivescorePhone from "./pages/LivescorePhone";
import WebBettingPhone from "./pages/WebBettingPhone";
import SMSBettingPhone from "./pages/SMSBettingPhone";
import SubcriptionPhone from "./pages/SubcriptionPhone";
import HomePhone from "./pages/HomePhone";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);
  useEffect(() => {
    document.title = 'Bet Wise Kenya';
  }, []);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/customer-supportpage":
        title = "";
        metaDescription = "";
        break;
      case "/customer-livescorepage":
        title = "";
        metaDescription = "";
        break;
      case "/customer-subpage":
        title = "";
        metaDescription = "";
        break;
      case "/admin-cspage":
        title = "";
        metaDescription = "";
        break;
      case "/admin-reportspage":
        title = "";
        metaDescription = "";
        break;
      case "/admin-bettingtipspage":
        title = "";
        metaDescription = "";
        break;
      case "/admin-contentmngpage":
        title = "";
        metaDescription = "";
        break;
      case "/admin-submngpage":
        title = "";
        metaDescription = "";
        break;
      case "/admin-usrmngpage":
        title = "";
        metaDescription = "";
        break;
      case "/footormob":
        title = "";
        metaDescription = "";
        break;
      case "/footor":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/live-score":
        title = "";
        metaDescription = "";
        break;
      case "/web-betting":
        title = "";
        metaDescription = "";
        break;
      case "/sms-betting":
        title = "";
        metaDescription = "";
        break;
      case "/admin-homepage":
        title = "";
        metaDescription = "";
        break;
      case "/customer-homepage":
        title = "";
        metaDescription = "";
        break;
      case "/subscriptions":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/confirmphone":
        title = "";
        metaDescription = "";
        break;
      case "/custcontactphone":
        title = "";
        metaDescription = "";
        break;
      case "/custlivescorephone":
        title = "";
        metaDescription = "";
        break;
      case "/custsubcriptionphone":
        title = "";
        metaDescription = "";
        break;
      case "/cust-request-recieved":
        title = "";
        metaDescription = "";
        break;
      case "/customer-homephone":
        title = "";
        metaDescription = "";
        break;
      case "/succesfully-registered":
        title = "";
        metaDescription = "";
        break;
      case "/forgotpassword":
        title = "";
        metaDescription = "";
        break;
      case "/signupphone":
        title = "";
        metaDescription = "";
        break;
      case "/loginphone":
        title = "";
        metaDescription = "";
        break;
      case "/contactphone":
        title = "";
        metaDescription = "";
        break;
      case "/livescorephone":
        title = "";
        metaDescription = "";
        break;
      case "/web-bettingphone":
        title = "";
        metaDescription = "";
        break;
      case "/sms-bettingphone":
        title = "";
        metaDescription = "";
        break;
      case "/subcriptionphone":
        title = "";
        metaDescription = "";
        break;
      case "/homephone":
        title = "";
        metaDescription = "";
        break;
      case "/request-recieved":
          title = "";
          metaDescription = "";
          break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/request-recieved" element={<RequestRecieved />} />
      <Route path="/customer-supportpage" element={<CustomerSupportPage />} />
      <Route
        path="/customer-livescorepage"
        element={<CustomerLiveScorePage />}
      />
      <Route path="/customer-subpage" element={<CustomerSUBPage />} />
      <Route path="/admin-cspage" element={<AdminCSPage />} />
      <Route path="/admin-reportspage" element={<AdminReportsPage />} />
      <Route path="/admin-bettingtipspage" element={<AdminBettingTipsPage />} />
      <Route path="/admin-contentmngpage" element={<AdminContentMngPage />} />
      <Route path="/admin-submngpage" element={<AdminSubMngPage />} />
      <Route path="/admin-usrmngpage" element={<AdminUsrMngPage />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/live-score" element={<LiveScore />} />
      <Route path="/web-betting" element={<WebBetting />} />
      <Route path="/sms-betting" element={<SMSBetting />} />
      <Route path="/admin-homepage" element={<AdminHomePage />} />
      <Route path="/customer-homepage" element={<CustomerHomePage />} />
      <Route path="/subscriptions" element={<Subscriptions />} />
      
      <Route path="/confirmphone" element={<ConfirmPhone />} />
      <Route path="/custcontactphone" element={<CustContactPhone />} />
      <Route path="/custlivescorephone" element={<CustLivescorePhone />} />
      <Route path="/custsubcriptionphone" element={<CustSubcriptionPhone />} />
      <Route path="/cust-request-recieved" element={<CustRequestRecieved />} />
      <Route path="/customer-homephone" element={<CustomerHomePhone />} />
      <Route
        path="/succesfully-registered"
        element={<SuccesfullyRegistered />}
      />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
     
      <Route path="/signupphone" element={<SignupPhone />} />
      <Route path="/loginphone" element={<LoginPhone />} />
      <Route path="/contactphone" element={<ContactPhone />} />
      <Route path="/livescorephone" element={<LivescorePhone />} />
      <Route path="/web-bettingphone" element={<WebBettingPhone />} />
      <Route path="/sms-bettingphone" element={<SMSBettingPhone />} />
      <Route path="/subcriptionphone" element={<SubcriptionPhone />} />
      <Route path="/homephone" element={<HomePhone />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
