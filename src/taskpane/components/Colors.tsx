import * as React from "react";
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { Text, Toggle, DefaultPalette, SwatchColorPicker} from 'office-ui-fabric-react';
import Header from "./Header";
import NavStepBar from "./NavStepBar";

export interface AppProps {
  onClick: any;
}

// Styles definition
const verticalGapStackTokens: IStackTokens = {
  childrenGap: 15,
  padding: 10,
};
const colorCellsExample1 = [
  { id: 'a', label: 'Primary Color', color: '#6200ee' },
  { id: 'b', label: 'Secondary Color', color: '#02dbc6' },
  { id: 'c', label: 'Text', color: '#616161' },
];
export default class Colors extends React.Component<AppProps> {
  render() {
    return (
      <div className="ms-welcome">
        <section style={{marginTop: 60}}>
          <Header />
          <NavStepBar onClick={() => this.props.onClick('stepthree')} pageTitle="Colors" title=""
            backgroung={DefaultPalette.white}  />


          <Stack tokens={verticalGapStackTokens}>

            <Text variant={'xxLarge'}>Edit Colors</Text>
            <Text variant={'medium'}>Modify the colors used in your table</Text>

            <Text variant={'large'}>Main Colors</Text>


            <Toggle label="Banded Columns" onText="On" offText="Off"  />

            <div>Primary</div>
            <SwatchColorPicker
              columnCount={1}
              cellHeight={35}
              cellWidth={35}
              cellShape={'square'}
              colorCells={colorCellsExample1}
             />

            <Text variant={'large'}>Available Options</Text>
            <Text variant={'small'}>Fine tune specific colors for the table style.</Text>

            <div>Main Colors</div>
            <SwatchColorPicker
              columnCount={1}
              cellHeight={35}
              cellWidth={35}
              cellShape={'square'}
              colorCells={colorCellsExample1}
             />

          </Stack>
        </section>
      </div>
    );
  }
}
