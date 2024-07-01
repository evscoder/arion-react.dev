import {FC} from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import mapData from './map-data';
import styled from 'styled-components';

const MapWrapper = styled.div`
  flex-grow: 1;

  svg {
    path {
      &[id=ru] {
        fill: #FDBF5E;
      },
      &[id=cn] {
        fill: #FF3D57;
      },
      &[id=au] {
        fill: #22CCE2;
      },
      &[id=us] {
        fill: #09B66D;
      }
    }
  }
`;

const Map: FC = () => {
    return (
        <MapWrapper>
            <VectorMap {...mapData } />
        </MapWrapper>
    );
};

export default Map;
