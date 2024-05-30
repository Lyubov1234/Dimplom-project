import React from 'react';
import PageTitle from '#components/pageTitle';
import GoBackButton from '#ui/goBackButton';
import AccountForm from '#containers/accountForm';
import { AccountModuleStyled } from './AccountModuleStyled';

const AccountModule: React.FC = () => {
  return (
    <AccountModuleStyled>
      <GoBackButton />
      <PageTitle>account</PageTitle>
      <AccountForm />
    </AccountModuleStyled>
  );
};

export default AccountModule;
