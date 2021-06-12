import React from "react";
import { useDispatch } from "react-redux";

import { stateStepsControl } from "@actions/state-steps-control.actions";
import { useStepsContainer } from "@components/feature/auth/signup/steps-container/container";
import { CustomButton } from "../custom-button";

import * as S from "./styles";

export const CustomStepButton = ({
  itemIndex,
  isLastStep = false,
  isNextDisabled = false,
  onNextClick,
}: {
  itemIndex: number;
  isLastStep: boolean;
  isNextDisabled: boolean;
  onNextClick: () => void;
}): JSX.Element => {
  const dispatch = useDispatch();
  const { STEPS } = useStepsContainer();
  const isLoading = false;

  console.log({ STEPS });

  const onNext = (): void => {
    if (isLastStep) {
      onNextClick();

      console.log(STEPS[itemIndex], STEPS[itemIndex + 1]);
    }
    if (!isLastStep) {
      console.log(STEPS[itemIndex], STEPS[itemIndex + 1]);
      const nextStepIndex = STEPS[itemIndex + 1];
      try {
        onNextClick();
        dispatch(stateStepsControl.updateSteps(nextStepIndex));
      } catch {
        dispatch(stateStepsControl.updateSteps(itemIndex));
      }
    }
  };

  console.log(STEPS[itemIndex], STEPS[itemIndex + 1]);

  const onBack = (): void => {
    const prevStepIndex = STEPS[itemIndex - 1];
    dispatch(stateStepsControl.updateSteps(prevStepIndex));
  };

  return (
    <S.ButtonContainer>
      {itemIndex > 0 && (
        <CustomButton
          {...{
            onClick: onBack,
            type: "button",
            color: "primary",
            content: "< Back",
          }}
        />
      )}
      <CustomButton
        {...{
          onClick: onNext,
          type: "button",
          color: "primary",
          content: "Next >",
          disabled: isNextDisabled || isLoading,
        }}
      />
    </S.ButtonContainer>
  );
};
