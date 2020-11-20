import React from 'react';
import {
  BpkGridContainer,
  BpkGridRow,
  BpkGridColumn,
} from 'bpk-component-grid';
import ArrowIcon from 'bpk-component-icon/sm/long-arrow-right';
import { withButtonAlignment, withRtlSupport } from 'bpk-component-icon';
import BpkText from 'bpk-component-text';

const AlignedArrowIcon = withButtonAlignment(withRtlSupport(ArrowIcon));

const textColor = {
  color: '#90909a',
};
const destinationStyles = {
  textAlign: 'center',
};
const originStyles = {
  textAlign: 'center',
};

const verticallyCenter = {
  display: 'flex',
  alignItems: 'center',
};
const durationStyles = {
  textAlign: 'right',
  height: '40px',
  flexDirection: 'column',
  justifyContent: 'center',
  display: 'flex',
};

const stopColorGreen = {
  color: '#2da698',
};
const stopColorRed = {
  color: '#dc5a5a',
};

const arrowStyles = {
  ...verticallyCenter,
  height: '40px',
  textAlign: 'center',
};
const containerStyle = {
  marginBottom: '15px',
};
const arrowStyle = {
  fill: '#90909a',
};
const imageStyle = {
  width: '100%',
  maxWidth: '50px',
};

// functions
const getLegData = (leg, legsDetails) => {
  return legsDetails.filter(detail => {
    return detail.id === leg;
  })[0];
};

const getDuration = time => {
  const hour = Math.floor(time / 60);
  const min = time - hour * 60;
  return `${hour}h ${min}m`;
};

const getIcon = id => {
  return `https://logos.skyscnr.com/images/airlines/favicon/${id}.png`;
};

const LegDetails = ({ legsDetails, legs }) => (
  <>
    {legs.map(leg => {
      const {
        arrival_time,
        departure_time,
        arrival_airport,
        departure_airport,
        id,
        duration_mins,
        airline_id,
        stops,
      } = getLegData(leg, legsDetails);

      return (
        <BpkGridContainer fullWidth={true} key={id} style={containerStyle}>
          <BpkGridRow padded={false}>
            <BpkGridColumn width={7} padded={false}>
              <BpkGridRow padded={false}>
                <BpkGridColumn padded={false} width={3} style={arrowStyles}>
                  <img
                    src={getIcon(airline_id)}
                    alt="flight"
                    style={imageStyle}
                  ></img>
                </BpkGridColumn>

                <BpkGridColumn padded={false} width={3} style={originStyles}>
                  <BpkText>{departure_time.slice(11)}</BpkText>
                  <div>
                    <BpkText weight="regular" style={textColor}>
                      {departure_airport}
                    </BpkText>
                  </div>
                </BpkGridColumn>
                <BpkGridColumn padded={false} width={1} style={arrowStyles}>
                  <AlignedArrowIcon style={arrowStyle} />
                </BpkGridColumn>
                <BpkGridColumn
                  padded={false}
                  width={4}
                  style={destinationStyles}
                >
                  <BpkText>{arrival_time.slice(11)}</BpkText>
                  <div>
                    <BpkText weight="regular" style={textColor}>
                      {arrival_airport}
                    </BpkText>
                  </div>
                </BpkGridColumn>
              </BpkGridRow>
            </BpkGridColumn>

            <BpkGridColumn padded={false} width={5}>
              <div style={durationStyles}>
                <BpkText weight="regular" textStyle="base" style={textColor}>
                  {getDuration(duration_mins)}
                </BpkText>
                <div>
                  <BpkText
                    weight="regular"
                    textStyle="base"
                    style={stops === 0 ? stopColorGreen : stopColorRed}
                  >
                    {stops === 0 ? `Direct` : `${stops} stop`}
                  </BpkText>
                </div>
              </div>
            </BpkGridColumn>
          </BpkGridRow>
        </BpkGridContainer>
      );
    })}
  </>
);

export default LegDetails;
