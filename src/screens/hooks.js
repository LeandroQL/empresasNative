import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

/* Container */
import ScheduleContainer from '@components/container/ScheduleContainer/ScheduleContainer';

/* Core */
import Container from '@components/core/Container';
import Screen from '@components/core/Screen';
import Header from '@components/core/Header';

/* Presentational */
import SuccessModal from '@components/presentational/SuccessModal/SuccessModal';
import FailureModal from '@components/presentational/FailureModal/FailureModal';

/* Configs */
import STRINGS from '@config/strings';

/* Use Cases */
import { takeAlongToLoginRoute } from '@useCases/expiredTokenUseCase';

/* Actions */
import successModalActions from '@actions/successModalActions';
import failureModalActions from '@actions/failureModalActions';
import { AddIcon, FilterIcon } from './styles';

/* Utils */
import { modalTitle } from '@utils/help';

/* Selectors */
import { selectorSuccessModal, selectorFailureModal, selectorExpiredToken, selectorUserInfo } from './selectors';

function ScheduleScreen(props) {
    const userInfo = useSelector(selectorUserInfo, shallowEqual);
    const successModalState = useSelector(selectorSuccessModal, shallowEqual);
    const failureModalState = useSelector(selectorFailureModal, shallowEqual);
    const expiredToken = useSelector(selectorExpiredToken, shallowEqual);

    const dispatch = useDispatch();
    const failureModalOnClose = () => dispatch(failureModalActions.FAILURE_MODAL_CLOSE());
    const successModalOnClose = () => dispatch(successModalActions.SUCCESS_MODAL_CLOSE());

    const forceReload = () => {
        dispatch(takeAlongToLoginRoute(props.navigation));
    };

    const [currentItem, setCurrentItem] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [contextModalTitle, setContextModalTitle] = useState({});

    useEffect(() => {
        if (expiredToken) {
            forceReload();
        }
    }, [expiredToken]);

    const toggleModal = item => {
        if (item && item.tipo) {
            const title = modalTitle(item.tipo);
            setContextModalTitle({ title, type: item.tipo });
            setCurrentItem(item);
        }
        setIsModalVisible(!isModalVisible);
    };

    const isAbleToRegisterNewItemOnSchedule =
        (userInfo.permissions && userInfo.permissions[49]) || userInfo.permissions[57];

    const isAbleToFilterItems =
        (userInfo.permissions && userInfo.permissions[47]) || userInfo.permissions[54] || userInfo.permissions[63];

    const renderRightSideIcon = () => {
        return isAbleToRegisterNewItemOnSchedule ? (
            <AddIcon
                onPress={() => {
                    toggleModal();
                    setContextModalTitle({ title: STRINGS.newReserve, id: 2 });
                }}
            >
                <Image source={require('@assets/images/icons/icAdd.png')} />
            </AddIcon>
        ) : (
                <AddIcon />
            );
    };

    const renderLeftSideIcon = () => {
        return isAbleToFilterItems ? (
            <FilterIcon
                onPress={() => {
                    toggleModal();
                    setContextModalTitle({ title: STRINGS.filterBy, id: 1 });
                }}
            >
                <Image source={require('@assets/images/icons/icFilter.png')} />
            </FilterIcon>
        ) : (
                <FilterIcon />
            );
    };

    return (
        <>
            <Screen>
                <Container width="100%" height="100%" display="flex" alignItems="center">
                    <Header title="Agenda" leftSide={renderLeftSideIcon()} rightSide={renderRightSideIcon()} />
                    <ScheduleContainer
                        currentItem={currentItem}
                        isModalVisible={isModalVisible}
                        toggleModal={toggleModal}
                        user={userInfo}
                        contextModalTitle={contextModalTitle}
                        setContextModalTitle={setContextModalTitle}
                    />
                </Container>
            </Screen>
            <SuccessModal
                key="success-failure-modal"
                isVisible={successModalState.successModalIsVisible}
                message={successModalState.successModalMessage}
                buttonText={successModalState.successModalButtonText}
                onClose={successModalOnClose}
                onButtonClick={successModalState.successModalOnButtonClick}
            />
            <FailureModal
                isVisible={failureModalState.failureModalIsVisible}
                message={failureModalState.failureModalMessage}
                buttonText={failureModalState.failureModalButtonText}
                onClose={failureModalOnClose}
                onButtonClick={failureModalState.failureModalOnButtonClick}
            />
        </>
    );
}

const screenWithNavigation = withNavigationFocus(ScheduleScreen);
export default screenWithNavigation;
