import React, { Component } from 'react';
import CardFooter from '../CardFooter/CardFooter';
import BpkCard from 'bpk-component-card';
import LegDetails from '../LegDetails/LegDetails';
import BpkBadge, { BADGE_TYPES } from 'bpk-component-badge';
import {
  BpkGridContainer,
  BpkGridRow,
  BpkGridColumn,
} from 'bpk-component-grid';
import { getFlights } from '../../models/flights';

const paddingTopStyle = {
  paddingTop: '15px',
};

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: {},
      selectedId: '',
    };
    this.onSelect = this.onSelect.bind(this);
  }
  async componentDidMount() {
    let data = await getFlights();
    this.setState({ flights: data });
  }
  onSelect = id => {
    let selectedId = this.state.selectedId === id ? '' : id;
    this.setState({ selectedId });
  };
  render() {
    return (
      <>
        {this.state.flights.itineraries
          ? this.state.flights.itineraries.map(iternary => (
              <BpkGridContainer fullWidth={true} key={iternary.id}>
                <BpkGridRow>
                  <BpkGridColumn width={12}>
                    <BpkCard style={paddingTopStyle}>
                      {iternary.id === this.state.selectedId ? (
                        <BpkBadge docked="right" type={BADGE_TYPES.warning}>
                          Selected
                        </BpkBadge>
                      ) : null}
                      <LegDetails
                        legsDetails={this.state.flights.legs}
                        legs={iternary.legs}
                      ></LegDetails>
                      <CardFooter
                        price={iternary.price}
                        agent={iternary.agent}
                        id={iternary.id}
                        onSelect={this.onSelect}
                        btnText={
                          this.state.selectedId === iternary.id
                            ? 'Unselect'
                            : 'Select'
                        }
                      ></CardFooter>
                    </BpkCard>
                  </BpkGridColumn>
                </BpkGridRow>
              </BpkGridContainer>
            ))
          : null}
      </>
    );
  }
}
