import React from 'react';
import BpkText from 'bpk-component-text';
import BpkButton from 'bpk-component-button';
import {
  BpkGridContainer,
  BpkGridRow,
  BpkGridColumn,
} from 'bpk-component-grid';

const textColor = {
  color: '#90909a',
};
const btnStyle = {
  textAlign: 'right',
  height: '59px',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
};

const CardFooter = props => (
  <BpkGridContainer fullWidth={true}>
    <BpkGridRow padded={false}>
      <BpkGridColumn padded={false} width={6}>
        <BpkGridRow padded={false}>
          <BpkGridColumn padded={false} width={12}>
            <BpkText textStyle="xxl">{props.price}</BpkText>
          </BpkGridColumn>
        </BpkGridRow>
        <BpkGridRow padded={false}>
          <BpkGridColumn padded={false} width={12}>
            <BpkText textStyle="base" style={textColor}>
              {props.agent}
            </BpkText>
          </BpkGridColumn>
        </BpkGridRow>
      </BpkGridColumn>
      <BpkGridColumn width={6} padded={false} style={btnStyle}>
        <BpkButton onClick={() => props.onSelect(props.id)}>
          <span>{props.btnText} </span>
        </BpkButton>
      </BpkGridColumn>
    </BpkGridRow>
  </BpkGridContainer>
);

export default CardFooter;
