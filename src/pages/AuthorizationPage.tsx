import React from 'react';
import ContentWithHeader from '#containers/contentWithHeader';
import AuthorizationModule from '#containers/authorizationModule';

const AuthorizationPage: React.FC = () => {
  return (
    <ContentWithHeader>
      <AuthorizationModule />
    </ContentWithHeader>
  );
};
export default AuthorizationPage;
