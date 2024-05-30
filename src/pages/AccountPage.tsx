import React from 'react';
import ContentWithHeader from '#containers/contentWithHeader';
import AccountModule from '#containers/accountModule';

const AuthorizationPage: React.FC = () => {
  return (
    <ContentWithHeader>
      <AccountModule />
    </ContentWithHeader>
  );
};
export default AuthorizationPage;
