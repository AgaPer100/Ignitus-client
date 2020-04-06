import styled from '@emotion/styled';
import {flexibleColDiv} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';
import { minimumWidthQuery } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/media';

export const WelcomeContainer = styled(flexibleColDiv)`
  background: white;
  margin-top: 4rem;
  padding: 2rem;
`;

export const Progress = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

export const TopSection = styled(flexibleColDiv)`
`;

export const DefaultDropdownContainer = styled.div`
  margin: 1rem;
`;

export const MiddleSection = styled.div`
  align-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2rem;
  flex-wrap: wrap;
`;

export const BottomSection = styled(flexibleColDiv)`
  margin-top: 2rem;
`;

export const LeftSection = styled(flexibleColDiv)`
  ${minimumWidthQuery[0]} {
    margin-right: none;
  }
  ${minimumWidthQuery[1]} {
    margin-right: none;
  }
  ${minimumWidthQuery[2]} {
    margin-right: 1rem;
  }
  ${minimumWidthQuery[3]} {
    margin-right: 1rem;
  }
`;
export const RightSection = styled.div`
  ${minimumWidthQuery[0]} {
    margin-left: none;
  }
  ${minimumWidthQuery[1]} {
    margin-left: none;
  }
  ${minimumWidthQuery[2]} {
    margin-left: 1rem;
  }
  ${minimumWidthQuery[3]} {
    margin-left: 1rem;
  }
`;
