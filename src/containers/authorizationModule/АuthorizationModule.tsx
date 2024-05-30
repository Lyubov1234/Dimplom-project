import React from 'react';
import useThemeColors from '#hooks/useThemeColors';
import { setIsSignUpActive } from '#store/reducers/userReducer';
import { useAppDispatch, useAppSelector } from '#store/store';
import SignInForm from '#containers/SignInForm';
import SignUpForm from '#containers/SignUpForm';
import {
  AuthorizationModuleStyled,
  AuthorizationModuleWrapper,
  Divider,
  TabButton,
  TabsWrapper,
} from './AuthorizationModuleStyled';

const AuthorizationModule: React.FC = () => {
  const { activeSignTab } = useAppSelector((state) => state.userReducer);

  const { textColorBlack, textColorGray } = useThemeColors();

  const dispatch = useAppDispatch();

  const singTabs = [
    { id: '1', title: 'sign in' },
    { id: '2', title: 'sing up' },
  ];

  return (
    <AuthorizationModuleWrapper>
      <AuthorizationModuleStyled $borderColor={textColorGray}>
        <TabsWrapper>
          {singTabs.map((item) => (
            <TabButton
              key={item.id}
              $isActive={item.id === activeSignTab}
              $colorActive={textColorBlack}
              $colorInactive={textColorGray}
              onClick={() => dispatch(setIsSignUpActive(item.id))}
            >
              {item.title}
            </TabButton>
          ))}
        </TabsWrapper>
        <Divider $color={textColorGray} />
        {activeSignTab === '2' ? <SignUpForm /> : <SignInForm />}
      </AuthorizationModuleStyled>
    </AuthorizationModuleWrapper>
  );
};

export default AuthorizationModule;
