import { SignIn } from './pages/SignIn';
import './index.css';

import { SignUp } from './pages/SignUp';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
import { Logout } from './pages/Logout';
import { Admin } from './layout/Admin';
import { Layout } from './pages/Layout';
import { Sidebar } from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { ConstructionPage } from './pages/ConstructionPage';
import { DevicePage } from './pages/DevicePage';
import { PromotionPage } from './pages/PromotionPage';
import { AssignStaff } from './pages/AssignStaff';
import { ProfileLayout } from './layout/ProfileLayout';
import { ProfileDetail } from './pages/ProfileDetail';
import { ChangePassword } from './pages/ChangePassword';
import { NewContract } from './pages/NewContract';
import { DepositPage } from './pages/DepositPage';
import { DoingConstruction } from './pages/DoingConstruction';
import { DoneConstruction } from './pages/DoneConstruction';
import { RequetsPage } from './pages/RequestPage';
import { CreateContract } from './pages/CreateContract';
import { SurveyPage } from './pages/SurveyPage';
import { SurveyDetail } from './pages/SurveyDetail';
import { PackagePage } from './pages/PackagePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/reset-password' element={<ForgotPassword />} />
        <Route path='/log-out' element={<Logout />} />
        <Route element={<Admin />}>
        <Route element={<ConstructionPage />}>
          <Route path='/construction' element={<NewContract/>} />
            <Route path='/construction/deposit' element={<DepositPage/>} />
            <Route path='/construction/doing' element={<DoingConstruction />} />
            <Route path='/construction/project-done' element={<DoneConstruction />} />
          </Route>
          <Route path='/construction/create-contract' element={<CreateContract />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/survey' element={<SurveyPage/>}/>
          <Route path='/request' element={<RequetsPage />} />
          <Route path='/device-page' element={<DevicePage />} />
          <Route path='/promotion' element={<PromotionPage />} />
          <Route path='/assign-staff' element={<AssignStaff />} />
          <Route path='/survey/create-survey' element={<SurveyDetail />} />
          <Route path='/package-page' element={<PackagePage />} />
          <Route element={<ProfileLayout />}>
            <Route path='/profile' element={<ProfileDetail />} />
            <Route path='/change-password' element={<ChangePassword />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
