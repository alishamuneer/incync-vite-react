import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// layouts
// import { FrontendLayout } from '../layouts/clients/FrontendLayout';
// import { DashboardLayout } from '@src/layouts/dashboard/DashboardLayout';
// // pages
// import { AccountSetting } from '@src/pages/dashboard/AccountSetting';
// import { PaymentMethod } from '@src/pages/dashboard/PaymentMethod';
// import { DashboardApp } from '@src/pages/dashboard/DashboardApp';
// import { VendorRegister } from '@src/pages/auth/VendorRegister';
// import { Addresses } from '@src/pages/dashboard/Addresses';
// import { VendorLogin } from '@src/pages/auth/VendorLogin';
// import { Password } from '@src/pages/auth/Password';
// import { Register } from '@src/pages/auth/Register';
// import { Order } from '@src/pages/dashboard/Order';
// import { Login } from '@src/pages/auth/Login';

export const Routers = () => {
 
  const [open, setOpen] = useState(false);

  return (
    <Routes>
      {/* <Route path='/login' element={<Login title='Login' />} />
      <Route path='/vendor-login' element={<VendorLogin title='Login' />} />
      <Route path='/register' element={<Register title='Register' />} />
      <Route
        path='/vendor-register'
        element={<VendorRegister title='Register' />}
      />
      <Route
        path='/forgot-password'
        element={<Password title='Forgot Password' />}
      /> */}
      {/* <Route path='/' element={<FrontendLayout />} /> */}
      {/* <Route
        path='/dashboard'
        element={<DashboardLayout open={open} setOpen={setOpen} />}
      >
        <Route index element={<DashboardApp />} />
        <Route path='home' element={<DashboardApp />} />
        <Route path='orders' element={<Order />} />
        <Route path='addresses' element={<Addresses />} />
        <Route path='payment' element={<PaymentMethod />} />
        <Route path='profile' element={<AccountSetting />} />
      </Route> */}
    </Routes>
  );
};
